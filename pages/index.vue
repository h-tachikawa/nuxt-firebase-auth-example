<template>
  <VLayout
    column
    justify-center
    align-center
  >
    <VFlex
      xs12
      sm8
      md6
    >
      <SignInWithGoogleButton
        class="mt-3"
        @signin="handleSignIn"
      />
    </VFlex>
  </VLayout>
</template>

<script>
import firebase from 'firebase'
import SignInWithGoogleButton from '~/components/SignInWithGoogleButton'

export default {
  components: {
    SignInWithGoogleButton
  },
  computed: {
    user() {
      return this.$store.getters.user
    }
  },
  async mounted() {
    const isRedirect = !this.$store.getters.user && !localStorage.getItem('jwt')
    if (isRedirect) {
      this.$store.commit('SET_LOADING', true)
    }
    const user = await firebase.auth().getRedirectResult()
    this.$store.commit('SET_LOADING', false)
    if (user) {
      this.$router.push('/profile')
      return
    }
    this.$store.commit('RESET_USER')
  },
  methods: {
    async handleSignIn() {
      await firebase.auth().signInWithRedirect(new firebase.auth.GoogleAuthProvider())
    }
  }
}
</script>
