<template lang='pug'>
  v-card(tile)
    v-progress-linear.my-0(:value='50', height='3')
    v-list
      v-list-tile
        v-spacer
          v-btn(icon)
            v-icon fas fa-backward
        v-list-tile-action
          v-btn(icon)
            v-icon fas fa-forward
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';

@Component({ name: 'player' })
export default class Player extends Vue {}
</script>

<style>

</style>
