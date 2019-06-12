<template lang='pug'>
  v-navigation-drawer(app)
    v-toolbar.transparent(flat)
      v-list.pa-0
        v-list-tile(avatar)
          v-list-tile-avatar
            img.pa-1(src='http://www.waybackmachinedownloader.com/en/img/archiveorg_logo.png')
          v-list-tile-content
            v-list-tile-title
    v-fab-transition
      v-btn(color='indigo',dark, fab, fixed, bottom, left, @click.stop='showDialog()')
        v-icon fa fa-plus


    v-list.pt-0(dense)
      v-divider
      v-list-tile(v-for='pl in playlists', :item='pl', :key='pl.id', @click)
        v-list-tile-action
          v-icon  fa fa-list
        v-list-tile-content
          v-list-tile-title {{ pl.name }}

    AddList(:show='show', @ready='dialogReady')
</template>

<script lang='ts'>
import { Playlist } from '../interfaces';
import AddList from '@/components/AddList.vue';
import { Component, Vue } from 'vue-property-decorator';
import axios, { AxiosResponse, AxiosError } from 'axios';


@Component({
  name: 'navigation',
  components: {
    AddList
  }
})

export default class Navigation extends Vue {
  show: boolean = false;
  playlists: Playlist[] = [];

  showDialog() {
    this.show = true;
  }

  dialogReady(pl?: Playlist) {
    if (pl) this.playlists.push(pl);

    this.show = false;
  }

  mounted() {
    axios
      .get('playlists')
      .then((response: AxiosResponse) => {
        this.playlists = response.data;
      });
  }
}
</script>

<style>

</style>
