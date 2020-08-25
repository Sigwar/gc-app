<template>
  <el-form class="gc-form"
           v-bind="$attrs"
           v-on="$listeners">

    <slot :name="slot"
          :slot="slot"
          v-for="(_, slot) of $slots" />
  </el-form>
</template>

<script>
export default {
  name: 'gcForm',
};
</script>

<style lang="scss">
.gc-form {
}
</style>