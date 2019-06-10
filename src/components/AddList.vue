<template lang='pug'>
  v-dialog(v-model='show', max-width='500px')
    v-card
      v-card-text
        v-text-field(label='List name')
        small.grey--text * This doesn't actually save.
      v-card-actions
        v-spacer
        v-btn(flat, color='primary', @click='show = false') Save
</template>

<script lang='ts'>
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({ name: 'addlist' })
export default class AddList extends Vue {
  @Prop(Boolean) show: boolean = false;
}
</script>
