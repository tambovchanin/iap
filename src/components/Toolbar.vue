<template lang='pug'>
  v-toolbar
    v-toolbar-side-icon
    v-toolbar-title Title
    v-spacer
    v-toolbar-items
      v-btn(flat) Link One
      v-btn(flat) Link Three
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';

@Component({ name: 'toolbar' })
export default class Toolbar extends Vue {}
</script>

<style>

</style>
