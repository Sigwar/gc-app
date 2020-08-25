<template>
  <el-upload class="gc-upload"
             v-bind="$attrs"
             v-on="$listeners">

    <slot :name="slot"
          :slot="slot"
          v-for="(_, slot) of $slots" />
  </el-upload>
</template>

<script>
export default {
  name: 'gcUpload',
};
</script>

<style lang="scss">
.gc-upload {
  .el-upload {
    width: 100%;
    height: 100%;
  }
}
</style>