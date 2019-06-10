<template lang='pug'>
  v-toolbar(app)
    v-toolbar-side-icon
    v-toolbar-title Internet Archive Player
    v-spacer
    v-toolbar-items
      v-btn(icon, fab)
        v-tooltip(bottom)
          template(v-slot:activator='{ on }')
            v-icon(color='grey lighten-1', v-on='on', @click='logout()') fa fa-sign-out-alt
          span Log out
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';

@Component({ name: 'toolbar' })
export default class Toolbar extends Vue {
  private logout(): void {
    this.$store.dispatch('AUTH_LOGOUT')
    .then(() => {
      this.$router.push('/');
    });
  }
}
</script>

<style>

</style>
