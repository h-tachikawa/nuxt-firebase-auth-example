<template>
  <VLayout
    row
    justify-center
  >
    <VDialog
      v-model="value"
      persistent
      content
      content-class="centered-dialog"
    >
      <VContainer fill-height>
        <VLayout
          column
          justify-center
          align-center
        >
          <PulseLoader color="#1976D2"></PulseLoader>
          <h1 v-if="message != null">
            {{ message }}
          </h1>
        </VLayout>
      </VContainer>
    </VDialog>
  </VLayout>
</template>

<script>
import PulseLoader from 'vue-spinner/src/PulseLoader'

export default {
  name: 'Loading',
  components: {
    PulseLoader
  },
  props: {
    value: { type: Boolean, default: false },
    message: { type: String, default: null },
    progressColor: { type: String, default: 'primary' }
  },
  data: function () {
    return {}
  }
}
</script>

<style>
  .dialog.centered-dialog,
  .v-dialog.centered-dialog {
    background-color: rgba(255, 255, 255, 0) !important; /* モーダルの背景のみ表示するためにダイアログを透明にする */
    box-shadow: none;
    border-radius: 6px;
    width: auto;
    color: whitesmoke;
  }
</style>
