<template>
  <el-checkbox-group class="gc-checkbox-group"
                     v-bind="$attrs"
                     v-on="$listeners">

    <slot :name="slot"
          :slot="slot"
          v-for="(_, slot) of $slots" />
  </el-checkbox-group>
</template>

<script>
export default {
  name: 'gcCheckboxGroup',
};
</script>

<style lang="scss">
.gc-checkbox-group {
}
</style>