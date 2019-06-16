import * as firebase from 'firebase'

export default function (ctx) {
  if (!firebase.apps.length) {
    const config = {
      apiKey: process.env.FIREBASE_API_KEY,
      authDomain: process.env.FIREBASE_AUTH_DOMAIN,
      databaseURL: process.env.FIREBASE_DATABASE_URL,
      projectId: process.env.FIREBASE_PROJECT_ID,
      storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
      messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
      appId: process.env.FIREBASE_APP_ID
    }
    firebase.initializeApp(config)
  }

  firebase.auth().onAuthStateChanged(async (user) => {
    if (user) {
      const idToken = await user.getIdToken()
      if (idToken) {
        localStorage.setItem('jwt', idToken)
      }
      ctx.store.commit('SET_USER', {
        displayName: user.displayName,
        email: user.email
      })
    } else {
      localStorage.removeItem('jwt')
      ctx.store.commit('RESET_USER')
      ctx.app.router.push('/')
    }
  })
}
