<template>
  <el-button class="gc-button"
             v-bind="$attrs"
             v-on="$listeners">

    <slot :name="slot"
          :slot="slot"
          v-for="(_, slot) of $slots" />
  </el-button>
</template>

<script>
export default {
  name: 'gcDropdown',
};
</script>

<style lang="scss">
.el-button {
  &--default {
    border: 2px solid var(--primary-color) !important;
    border-radius: 0 !important;
    font-weight: bold !important;
    text-transform: uppercase;
    transition: .25s;
  }

  &:hover,
  &:focus {
    transition: .25s;
    color: var(--grey-600) !important;
    background: var(--primary-color) !important;
  }
}

.el-button + .el-button {
  margin-left: 0 !important;
}

</style>