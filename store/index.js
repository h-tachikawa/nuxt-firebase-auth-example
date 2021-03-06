export const state = () => ({
  user: null,
  loading: null,
  loginSucceed: false
})

export const getters = {
  user(state) {
    return state.user
  },
  isLoading(state) {
    return state.loading
  },
  loginSucceed(state) {
    return state.loginSucceed
  }
}

export const mutations = {
  SET_USER(state, user) {
    state.user = user
  },
  RESET_USER(state) {
    state.user = null
  },
  SET_LOADING(state, isLoading) {
    state.loading = isLoading
  },
  SET_LOGIN_SUCCEED(state, loginSucceed) {
    state.loginSucceed = loginSucceed
  }
}
