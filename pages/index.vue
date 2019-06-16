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
    const initialized = localStorage.getItem('initialized')
    if (isRedirect && initialized) {
      this.$store.commit('SET_LOADING', true)
    }
    const userCredential = await firebase.auth().getRedirectResult()
    this.$store.commit('SET_LOADING', false)
    if (userCredential.user && initialized) {
      const idToken = await userCredential.user.getIdToken()
      if (idToken) {
        localStorage.setItem('jwt', idToken)
        this.$router.push({ path: '/profile' })
      }
    }
  },
  methods: {
    async handleSignIn() {
      localStorage.setItem('initialized', 'true')
      await firebase.auth().signInWithRedirect(new firebase.auth.GoogleAuthProvider())
    }
  }
}
</script>
