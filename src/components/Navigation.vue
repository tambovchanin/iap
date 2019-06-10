<template lang='pug'>
  v-navigation-drawer(app)
    v-toolbar.transparent(flat)
      v-list.pa-0
        v-list-tile(avatar)
          v-list-tile-avatar
            img.pa-1(src='http://www.waybackmachinedownloader.com/en/img/archiveorg_logo.png')
          v-list-tile-content
            v-list-tile-title John Leider
    v-fab-transition
      v-btn(color='indigo',dark, fab, fixed, bottom, left, @click.stop="showDialog()")
        v-icon fa fa-plus


    v-list.pt-0(dense)
      v-divider
      v-list-tile(v-for='item in items', :key='item.title', @click)
        v-list-tile-action
          v-icon {{ item.icon }}
        v-list-tile-content
          v-list-tile-title {{ item.title }}

    AddList(:show='show')
</template>

<script lang='ts'>
import AddList from '@/components/AddList.vue';
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'navigation',
  components: {
    AddList
  }
})

export default class Navigation extends Vue {
  private show: boolean = false;

  private items: Array<{ icon?: string, title?: string, divider?: boolean }> = [
    { icon: 'fa fa-list', title: 'Playlist A' },
    { icon: 'fa fa-list', title: 'Playlist B' },
    { icon: 'fa fa-play', title: 'Playlist C' },
    { icon: 'fa fa-list', title: 'Playlist D' }
  ];

  showDialog() {
    this.show = !this.show;
  }
}
</script>

<style>

</style>
