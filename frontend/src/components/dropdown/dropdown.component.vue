<template>
  <el-dropdown class="gc-dropdown"
               v-bind="$attrs"
               v-on="$listeners">

    <slot :name="slot"
          :slot="slot"
          v-for="(_, slot) of $slots" />
  </el-dropdown>
</template>

<script>
export default {
  name: 'gcDropdown',
};
</script>

<style lang="scss">

</style>