<template>
  <el-table-column class="gc-table-column"
                   v-bind="$attrs"
                   v-on="$listeners">

    <slot :name="slot"
          :slot="slot"
          v-for="(_, slot) of $slots" />

    <template :slot="slot"
              slot-scope="scope"
              v-for="slot in Object.keys($scopedSlots)">

      <slot :name="slot"
            v-bind="scope" />
    </template>
  </el-table-column>
</template>

<script>
export default {
  name: 'gcTableColumn',
};
</script>

<style lang="scss">
</style>