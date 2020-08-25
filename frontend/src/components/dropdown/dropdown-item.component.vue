<template>
  <el-dropdown-item class="gc-dropdown-item"
                    v-bind="$attrs"
                    v-on="$listeners">

    <slot :name="slot"
          :slot="slot"
          v-for="(_, slot) of $slots" />
  </el-dropdown-item>
</template>

<script>
export default {
  name: 'gcDropdownItem',
};
</script>

<style lang="scss">
.gc-dropdown-item {
  text-align: center;
  padding: 0 !important;

  &:hover:not(.is-disabled) {
    background-color: var(--grey) !important;
    color: var(--grey-600);
  }
}
</style>