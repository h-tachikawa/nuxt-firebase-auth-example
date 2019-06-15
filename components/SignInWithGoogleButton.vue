<template>
  <img
    class="signin-button"
    :src="signinIcon"
    @mouseenter="mouseEnter = true"
    @mouseleave="mouseEnter = false"
    @click="login"
  >
</template>
<script>
export default {
  data() {
    return {
      mouseEnter: false
    }
  },
  computed: {
    signinIcon() {
      if (this.mouseEnter) {
        return '/btn_google_signin_dark_focus_web@2x.png'
      }
      return '/btn_google_signin_dark_normal_web@2x.png'
    }
  },
  methods: {
    login() {
      this.$emit('signin')
    }
  }
}
</script>
<style lang="scss" scoped>
  .signin-button {
    height: 50%;
    width: 50%;
    &:hover {
      cursor: pointer;
    }
  }
</style>
