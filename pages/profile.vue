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
      <VSubheader class="headline">User Profile</VSubheader>
      <VSubheader>Name: {{ loggedInUser.displayName }}</VSubheader>
      <VSubheader>Mail Address: {{ loggedInUser.email }}</VSubheader>
    </VFlex>
  </VLayout>
</template>
<script>
export default {
  middleware: ['auth'],
  computed: {
    loggedInUser() {
      return this.$store.getters.user || {}
    }
  }
}
</script>
