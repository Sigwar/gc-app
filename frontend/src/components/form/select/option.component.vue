<template>
  <el-option class="gc-option"
             v-bind="$attrs"
             v-on="$listeners">

    <slot :name="slot"
          :slot="slot"
          v-for="(_, slot) of $slots" />
  </el-option>
</template>

<script>
export default {
  name: 'gcOption',
};
</script>

<style lang="scss">
.gc-option {
  &.selected {
    &.el-select-dropdown__item {
      color: var(--primary-color);
    }
  }
}
</style>