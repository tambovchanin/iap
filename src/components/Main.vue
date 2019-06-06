<template lang='pug'>
  v-img(src='https://images.unsplash.com/photo-1510797215324-95aa89f43c33?q=80&fm=jpg&w=600&fit=max')
</template>

<script lang='ts'>
import { Vue, Component } from 'vue-property-decorator';

@Component({ name: 'main' })
export default class Main extends Vue {
  private msg: string = 'Internet Archive player';
}
</script>

<style>
</style>
