<template lang='pug'>
  v-card(height='100%')
    Navigation
    Toolbar
    List
</template>

<script lang='ts'>
import List from '@/components/List.vue';
import Toolbar from '@/components/Toolbar.vue';
import Navigation from '@/components/Navigation.vue';
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'admin',
  components: {
    List,
    Toolbar,
    Navigation
  }
})

export default class Admin extends Vue {

}
</script>

<style>
</style>
