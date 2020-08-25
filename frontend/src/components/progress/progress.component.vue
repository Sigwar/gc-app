<template>
  <el-progress class="gc-progress"
               v-bind="$attrs"
               v-on="$listeners">

    <slot :name="slot"
          :slot="slot"
          v-for="(_, slot) of $slots" />
  </el-progress>
</template>

<script>
export default {
  name: 'gcProgress',
};
</script>

<style lang="scss">
.gc-progress {
}
</style>