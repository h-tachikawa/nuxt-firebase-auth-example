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
      <VSubheader>Name: {{ user.displayName }}</VSubheader>
      <VSubheader>Mail Address: {{ user.email }}</VSubheader>
    </VFlex>
  </VLayout>
</template>
<script>
export default {
  computed: {
    user() {
      return this.$store.getters.user
    }
  }
}
</script>
