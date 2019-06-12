<template lang='pug'>
  v-dialog(v-model='show', persistent, max-width='500px')
    v-card(@keyup.esc='cleanupAndFinish()')
      v-card-text
        v-text-field(label='List name', v-model='listName', @keyup.enter='finished(false)', @keyup.esc='cleanupAndFinish()')
      v-card-actions
        v-spacer
          v-btn(flat, color='primary', @click='finished(false)', :loading='loading') Save
          v-btn(flat, color='danger', @click='finished(true)') Cancel
</template>

<script lang='ts'>
import { Playlist } from '../interfaces';
import axios, { AxiosResponse, AxiosError } from 'axios';
import { Component, Prop, Vue } from 'vue-property-decorator';


@Component({ name: 'addlist' })
export default class AddList extends Vue {
  @Prop(Boolean) show: boolean = false;

  listName: string = '';
  loading: boolean = false;

  finished(cancel: boolean): void {
    if (!this.listName) return this.cleanupAndFinish();

    this.loading = true;

    axios({ url: 'playlists', data: { name: this.listName }, method: 'POST' })
      .then((resp: AxiosResponse) => {
        this.cleanupAndFinish(resp.data);
      });
  }

  cleanupAndFinish(pl?: Playlist): void {
    this.$emit('ready', pl);
    this.listName = '';
    this.loading = false;
  }
}
</script>
