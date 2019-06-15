<template>
  <v-layout
    row
    justify-center
  >
    <v-dialog
      v-model="value"
      persistent
      content
      content-class="centered-dialog"
    >
      <v-container fill-height>
        <v-layout
          column
          justify-center
          align-center
        >
          <v-progress-circular
            :size="70"
            :width="7"
            :color="progressColor"
            indeterminate
          />
          <h1 v-if="message != null">
            {{ message }}
          </h1>
        </v-layout>
      </v-container>
    </v-dialog>
  </v-layout>
</template>

<script>
export default {
  name: 'Loading',
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
