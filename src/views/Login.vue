<template lang='pug'>
  v-content
    v-container(fluid, fill-height)
      v-layout(align-center, justify-center)
        v-flex(xs9, sm6, md3)
          v-card.elevation-24
            v-toolbar(dark, color='blue-grey darken-1')
              v-toolbar-title Hello, login please
              v-spacer
              v-icon fas fa-key
            v-card-text
              v-form
                v-text-field(prepend-icon='fa-user', v-model='username', label='Login', type='text')
                v-text-field#password(prepend-icon='fa-lock', @keyup.enter='login()', v-model='password', label='Password', type='password')
            v-card-actions
              v-layout(justify-center)
                v-btn(outline, :loading='loading', :disabled='loading', color='blue-grey darken-2', @click='login()') Login
</template>

<script lang='ts'>
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  name: 'Login',
  components: {
  }
})

export default class Login extends Vue {
  private loading: boolean = false;
  private username: string = '';
  private password: string = '';

  private login(): void {
    this.loading = true;

    const { username, password } = this;

    this.$store.dispatch('AUTH_REQUEST', { username, password })
    .then(() => {
      this.$router.push('/admin');
      this.loading = false;
    })
    .catch((err) => {
      this.loading = false;
    });
  }
}
</script>

<style>
</style>
