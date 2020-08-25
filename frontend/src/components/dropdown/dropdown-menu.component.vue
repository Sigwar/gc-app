<template>
  <el-dropdown-menu class="gc-dropdown-menu"
                    v-bind="$attrs"
                    v-on="$listeners">

    <slot :name="slot"
          :slot="slot"
          v-for="(_, slot) of $slots" />
  </el-dropdown-menu>
</template>

<script>
export default {
  name: 'gcDropdownMenu',
};
</script>

<style lang="scss">
.gc-dropdown-menu {
  min-width: 15rem;
}
</style>