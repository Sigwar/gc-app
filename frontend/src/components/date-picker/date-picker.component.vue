<template>
  <el-date-picker class="gc-date-picker"
                  v-bind="$attrs"
                  v-on="$listeners">

    <slot :name="slot"
          :slot="slot"
          v-for="(_, slot) of $slots" />
  </el-date-picker>
</template>

<script>
export default {
  name: 'gcDatePicker',
};
</script>

<style lang="scss">
.el-month-table {
  .start-date,
  .end-date {
    div {
      .cell {
        color: var(--primary-color);
        background: var(--primary-color) !important;

        &:focus {
          color: var(--primary-color);
        }
      }
    }
  }

  div {
    .cell {
      color: var(--font-color) !important;
    }
  }
}

.el-date-editor {
  border: 1px solid var(--gray-light) !important;
  border-radius: 0 !important;
  transition: var(--transition);
}

.gc-date-picker {
  width: 100%;

  &:focus,
  &:active {
    border: 1px solid var(--warning) !important;
    box-shadow: var(--input-shadow) !important;
    transition: var(--transition) !important;
  }
}
</style>