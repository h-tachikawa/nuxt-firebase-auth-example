<template>
  <VLayout
    row
    justify-center
    align-center
  >
    <VFlex
      xs7
    >
      <SignInWithGoogleButton
        class="mt-4"
        @signin="handleSignIn"
      />
    </VFlex>
  </VLayout>
</template>

<script>
import firebase from 'firebase'
import SignInWithGoogleButton from '~/components/SignInWithGoogleButton'

export default {
  middleware: ['auth'],
  components: {
    SignInWithGoogleButton
  },
  computed: {
    user() {
      return this.$store.getters.user
    }
  },
  async mounted() {
    const redirecting = localStorage.getItem('redirecting')
    if (redirecting) {
      this.$store.commit('SET_LOADING', true)
    }
    const userCredential = await firebase.auth().getRedirectResult()
    this.$store.commit('SET_LOADING', false)
    if (userCredential.user && redirecting) {
      const idToken = await userCredential.user.getIdToken()
      if (idToken) {
        localStorage.setItem('jwt', idToken)
        this.$router.push({ path: '/profile' })
        localStorage.removeItem('redirecting')
        this.$store.commit('SET_LOGIN_SUCCEED', true)
      }
    }
  },
  methods: {
    async handleSignIn() {
      /**
       * リダイレクトで遷移を挟むとVuexは初期化されてしまうため、
       * リダイレクトしても消えないLocalStorageにリダイレクト中であるという状態を持たせる。
       */
      localStorage.setItem('redirecting', 'true')
      await firebase.auth().signInWithRedirect(new firebase.auth.GoogleAuthProvider())
    }
  }
}
</script>
