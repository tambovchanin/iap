<template lang='pug'>
  v-content
    v-container(grid-list-lg, :key='playlist.id', v-if='playlist.name')
      v-layout(row, wrap, justify-space-between)
        v-flex.xs12
          v-toolbar
            v-toolbar-title {{ playlist.name }}
            v-autocomplete.mx-3(
              v-model='query'
              :loading='loading'
              :items='items'
              :search-input.sync='query'
              cache-items
              flat
              hide-no-data
              hide-details
              label='Search for new content...'
            )
        //v-flex.xs5
          h1 {{ playlist.name }}
        //v-flex.xs7
          v-text-field(label='Search new content...', append-icon='fa fa-search', v-model='query', @keyup.enter='addContent()')
        v-flex.xs6(v-for='song in playlist.Songs', :key='song.id', :item='song')
          v-card
            v-layout(justify-space-between)
              v-flex.md-8.xs12
                v-card-title(primary-title)
                  h4 {{song.name}}
              v-flex.md-4.xs12
                v-img.shrink.ma-2(contain, height='125px', :src='song.cover', aspect-ratio='1', style='flex-basis: 125px')
            v-divider(dark)
    v-container(grid-list-md, :key='playlist.id', v-if='!playlist.id', style='height: 100%')
      v-layout(align-center, justify-center, row, fill-height)
        .display-1 Playlist not selected
</template>

<script lang='ts'>
import { mapState } from 'vuex';
import { Getter, State } from 'vuex-class';
import { Vue, Component, Prop, Watch } from 'vue-property-decorator';

@Component({ name: 'playlist' })
export default class Playlist extends Vue {
  @Getter('playlist') playlist: any|null;
  @Getter('status') status: string;

  query: string = '';
  loading: boolean = false;
  items: [] = [];

  @Watch('query')
  onQueryChanged(val: string) {
    console.log('* query', this.query);
    // 'https://archive.org/advancedsearch.php?q=Hind+Swaraj+Speec&fl%5B%5D=identifier&sort%5B%5D=&sort%5B%5D=&sort%5B%5D=&rows=50&page=1&output=json&callback=callback&save=yes'
  }
}
</script>

<style>
</style>
