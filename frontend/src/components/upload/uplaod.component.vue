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
.el-upload {
  height: 100%;
  width: 100%;
  display: flex !important;
  justify-content: center;
  align-items: center;
}
</style>