<template>
  <div class="checkbox">
    <div class="property">
      <span class="key">Id:</span>
      <span class="value">{{checkbox.id}}</span>
    </div>
    <div class="property">
      <span class="key">Parent Id:</span>
      <span class="value">{{checkbox.parentId || "null"}}</span>
    </div>
    <div class="property">
      <span class="key">Text:</span>
      <span class="value">{{checkbox.name}}</span>
    </div>
    <div class="property property--checkbox">
      <span class="key">Checked:</span>
      <span class="value">{{checkbox.checked}}</span>
      <input type="checkbox" :checked="checkbox.checked"/>
    </div>

    <Checkboxes :entrypoint="checkbox.id"/>
  </div>
</template>

<script lang="ts">
  import {Component, Prop, Vue} from 'vue-property-decorator'
  import {Checkbox} from "@/checkbox";
  import Checkboxes from "@/components/Checkboxes.vue";

  @Component({
    components: {Checkboxes}
  })
  export default class CheckboxComponent extends Vue {
    @Prop({type: Object as () => Checkbox}) checkbox!: Checkbox;
  }
</script>

<style scoped lang="scss">
  .checkbox {
    margin: 20px;
    padding: 30px;
    font-size: 16px;
    line-height: 1.5em;
    border: 1px solid #2c3e50;
    border-radius: 20px;

    .property {
      &--checkbox {
        display: flex;
        align-items: center;
        margin-bottom: 0;
      }

      .key {
        font-weight: bold;
        margin-right: 2px;
      }
    }

    input[type=checkbox] {
      height: 16px;
      width: 16px;
      margin: 0 0 0 5px;
    }
  }
</style>