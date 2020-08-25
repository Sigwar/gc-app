<template>
  <el-pagination background
                 class="gc-pagination"
                 layout="prev, pager, next, total"
                 v-bind="$attrs"
                 v-on="$listeners">

    <slot :name="slot"
          :slot="slot"
          v-for="(_, slot) of $slots" />
  </el-pagination>
</template>

<script>
export default {
  name: 'gcPagination',
};
</script>

<style lang="scss"
       scoped>
.gc-pagination {
  margin-top: 3rem;
}
</style>