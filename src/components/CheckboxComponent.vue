<template>
  <div class="checkbox" :class="styleObject">
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
      <span class="key">Self Checked:</span>
      <input id="checkbox-1" type="checkbox" :checked="checkbox.checked" @change="checkbox.checked = !checkbox.checked"/>
      <label for="checkbox-1">{{checkbox.checked}}</label>
    </div>
    <div class="property property--checkbox">
      <span class="key">Actual Checked:</span>
      <input id="checkbox-2" type="checkbox" :checked="isChecked" readonly disabled/>
      <label for="checkbox-2">{{isChecked}}</label>
    </div>

    <Checkboxes :entrypoint="checkbox.id"/>
  </div>
</template>

<script lang="ts">
  import {Component, Prop, Model, Vue} from 'vue-property-decorator'
  import {Getter} from 'vuex-class'
  import {Checkbox} from "@/checkbox";
  import Checkboxes from "@/components/Checkboxes.vue";

  @Component({
    components: {Checkboxes}
  })
  export default class CheckboxComponent extends Vue {
    @Prop({type: Object as () => Checkbox}) checkbox!: Checkbox;

    @Getter isChildrenAreChecked!: (arg0: number) => boolean;

    get isChecked() {
      return this.checkbox.checked && this.isChildrenAreChecked(this.checkbox.id)
    }

    get styleObject() {
      return new Object({
        'checkbox--true': this.checkbox.checked && this.isChecked,
        'checkbox--indeterminate': !this.checkbox.checked || !this.isChecked,
        'checkbox--false': !this.checkbox.checked && !this.isChecked,
        // 'checkbox': true
      })
    }

    created() {
      // console.log(this.checkbox.id, this.isChildrenAreChecked(this.checkbox.id))
    }
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
    background-color: #fff;
    transition: background-color ease-out .1s;

    &--true {
      border-color: #2ecc71;
    }

    &--indeterminate {
      border-color: #f1c40f;
    }

    &--false {
      border-color: #e74c3c;
    }

    &:hover {
      background-color: rgba(0,0,0,.05);
    }

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
      margin: 0 2px 0 0;
    }
  }
</style>