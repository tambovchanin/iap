<template lang='pug'>
  v-app
    router-view
</template>

<script>
import Home from '@/views/Home';
import Login from '@/views/Login';
import Admin from '@/views/Admin';

export default {
  name: 'App',
  components: {
    Home,
    Login
  },
  data() {
    return {
      //
    };
  }
};
</script>
