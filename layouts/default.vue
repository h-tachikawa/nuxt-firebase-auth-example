<template>
  <v-app>
    <v-navigation-drawer
      v-if="$route.path !== '/'"
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-tile
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title" />
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      color="primary"
      :clipped-left="clipped"
      fixed
      app
    >
      <v-toolbar-side-icon v-if="$route.path !== '/'" class="white--text" @click="drawer = !drawer" />
      <v-toolbar-title class="white--text" v-text="title" />
      <v-spacer />
      <v-btn
        v-if="$route.path !== '/'"
        flat
        color="white"
        @click="logout"
      >
        Logout
      </v-btn>
    </v-toolbar>
    <v-content>
      <VAlert
        :value="loginSucceed"
        dismissible
        icon="check_circle"
        outline
        color="info"
      >
        ログインに成功しました
      </VAlert>
      <v-container>
        <nuxt />
        <FullScreenSpinner
          :value="loading"
          progress-color="primary"
        />
      </v-container>
    </v-content>
    <v-navigation-drawer
      v-model="rightDrawer"
      :right="right"
      temporary
      fixed
    >
      <v-list>
        <v-list-tile @click.native="right = !right">
          <v-list-tile-action>
            <v-icon light>
              compare_arrows
            </v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Switch drawer (click me)</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </v-app>
</template>

<script>
import firebase from 'firebase'
import FullScreenSpinner from '~/components/FullScreenSpinner'

export default {
  components: {
    FullScreenSpinner
  },
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'apps',
          title: 'Profile',
          to: '/profile'
        },
        {
          icon: 'bubble_chart',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  },
  computed: {
    loading() {
      return this.$store.getters.isLoading
    },
    loginSucceed() {
      return this.$store.getters.loginSucceed
    }
  },
  watch: {
    $route(to, from) {
      if (from.path === '/profile') {
        this.$store.commit('SET_LOGIN_SUCCEED', false)
      }
    }
  },
  mounted() {
    document.addEventListener('keydown', this.closeAlert, false)
  },
  beforeDestroy() {
    document.removeEventListener('keydown', this.closeAlert, false)
  },
  methods: {
    closeAlert(e) {
      const keyCode = e.keyCode
      const ESC = 27
      if (keyCode === ESC && this.loginSucceed) {
        this.$store.commit('SET_LOGIN_SUCCEED', false)
      }
    },
    async logout() {
      await firebase.auth().signOut()
    }
  }
}
</script>
