<template lang='pug'>
  v-container
    v-layout(row)
      v-flex.main(xs4)
        Main
      v-flex.main(xs8)
        Aside
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
import Main from '@/components/Main.vue';
import Aside from '@/components/Aside.vue';

@Component({
  name: 'home',
  components: {
    Main,
    Aside
  }
})

export default class Home extends Vue {}
</script>

<style>
</style>
