<template lang='pug'>
  v-card(height='100%')
    Navigation
    Toolbar
    Playlist
</template>

<script lang='ts'>
import Toolbar from '@/components/Toolbar.vue';
import Playlist from '@/components/Playlist.vue';
import Navigation from '@/components/Navigation.vue';
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'admin',
  components: {
    Toolbar,
    Playlist,
    Navigation
  }
})

export default class Admin extends Vue {}
</script>

<style>
</style>
