<template>
  <el-radio-group class="gc-radio-group"
                  v-bind="$attrs"
                  v-on="$listeners">

    <slot :name="slot"
          :slot="slot"
          v-for="(_, slot) of $slots" />
  </el-radio-group>
</template>

<script>
export default {
  name: 'gcRadioGroup',
};
</script>

<style lang="scss">
.gc-radio-group {
}
</style>