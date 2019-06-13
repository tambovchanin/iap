<template lang='pug'>
  v-navigation-drawer(app)
    v-toolbar.transparent(flat)
      v-list.pa-0
        v-list-tile(avatar)
          v-list-tile-content
            v-list-tile-title Playlists
    v-fab-transition
      v-btn(color='indigo', dark, fab, fixed, bottom, left, @click.stop='showDialog()')
        v-icon fa fa-plus

    v-list.pt-0(dense)
      v-divider
      v-list-tile(v-for='pl in playlists', :item='pl', :key='pl.id', @click='changeList(pl.id)')
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
import { Playlist as Mutations } from '../store/mutations';

@Component({
  name: 'navigation',
  components: {
    AddList
  }
})

export default class Navigation extends Vue {
  show: boolean = false;
  playlists: Playlist[] = [];

  changeList(id: number) {
    this.$store.dispatch(Mutations.Request, id);
  }

  showDialog() {
    this.show = true;
  }

  dialogReady(pl?: Playlist) {
    if (pl) this.playlists.push(pl);

    this.show = false;
  }

  mounted() {
    axios
      .get('playlists/all')
      .then((response: AxiosResponse) => {
        this.playlists = response.data;
      });
  }
}
</script>

<style>

</style>
