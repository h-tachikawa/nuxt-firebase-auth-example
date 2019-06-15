export const state = () => ({
  user: null,
  loading: null
})

export const getters = {
  user(state) {
    return state.user
  },
  isLoading(state) {
    return state.loading
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
  }
}
