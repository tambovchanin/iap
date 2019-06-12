<template lang='pug'>
  v-container(fluid, grid-list-sm)
    v-layout(row, wrap)
      v-flex(d-flex, xs12)
        v-layout(column)
          v-flex(d-flex)
            v-card(color='blue-grey', dark, tile, flat)
              v-card-text #1
          v-flex(d-flex)
            v-card(color='brown', dark, tile, flat)
              v-card-text #2
      v-flex(d-flex, xs12, sm7)
        v-layout(row, wrap)
          v-flex(d-flex)
            v-card(color='indigo lighten-2', dark, tile, flat)
              v-card-text #3
          v-flex(d-flex)
            v-layout(row)
              v-flex(v-for='n in 2', :key='n', d-flex)
                v-card(color='amber lighten-2', tile, flat)
                  v-card-text {{`#4(${n-1})`}}
      v-flex(d-flex, xs12, sm2, child-flex)
        v-card(color='orange lighten-2', tile, flat)
          v-card-text #6
      v-flex(d-flex, xs12, sm3)
        v-card(color='red lighten-2', dark, tile, flat)
          v-card-text #7
</template>

<script lang='ts'>
import { Song } from '../interfaces';
import Player from '@/components/Player.vue';
import Toolbar from '@/components/Toolbar.vue';
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'aside',
  components: {
    Toolbar,
    Player
  }
})

export default class Aside extends Vue {
  lorem: string = `Lorem ipsum dolor sit amet, mel at clita quando. \
    Tesit oratio vituperatoribus, nam ad ipsum posidonium mediocritatem, \
    explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure \
    nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.`;
}
</script>

<style>

</style>
