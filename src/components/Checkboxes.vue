<template>
  <div class="container">
    <CheckboxComponent v-for="(item, idx) in checkboxesByParentId(this.entrypoint)" :key="idx" :checkbox="item"/>
  </div>
</template>

<script lang="ts">
  import {Component, Prop, Vue} from 'vue-property-decorator'
  import {Getter, Action} from 'vuex-class'

  @Component({
    components: {
      CheckboxComponent: () => import('./CheckboxComponent.vue')
    }
  })
  export default class Checkboxes extends Vue {
    @Prop(Number) entrypoint!: number | null;

    @Action fetchCheckboxes!: Function;
    @Getter getCheckboxes!: Function;
    @Getter checkboxesByParentId!: Function;

    async created() {
      await this.fetchCheckboxes();
      console.log(this.checkboxesByParentId(this.entrypoint));
    }
  }
</script>

<style scoped lang="scss">
  .container {
    width: 100%;
    max-width: 1440px;
    /*display: flex;*/
  }
</style>