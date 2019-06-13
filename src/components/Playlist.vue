<template lang='pug'>
  v-content(style='height: 100%')
    v-layout(align-center, justify-center, row, fill-height, v-if='!listId')
      .display-1 Playlist not selected
      // p blue-grey.lighten-2

</template>

<script lang='ts'>
import { Vue, Component, Prop, Watch } from 'vue-property-decorator';
import { Getter } from 'vuex-class';

@Component({ name: 'playlist' })
export default class Playlist extends Vue {
  // @Getter('listId');


}
</script>

<style>
</style>
