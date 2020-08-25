<template>
  <el-select class="gc-select"
             v-bind="$attrs"
             v-on="$listeners">

    <slot :name="slot"
          :slot="slot"
          v-for="(_, slot) of $slots" />
  </el-select>
</template>

<script>
export default {
  name: 'gcSelect',
};
</script>

<style lang="scss">
.gc-select {
  width: 100%;

  .el-input {
    .el-input__inner {
      background: var(--background);
      border: 2px solid var(--blue);
      border-radius: 0;
      width: 100%;

      &:hover {
        border: 2px solid var(--blue);
      }
    }

    .el-input__suffix {
      background: var(--blue);
      right: 0;
      width: 4rem;

      .el-select__caret {
        color: var(--white);
      }
    }
  }
}
</style>