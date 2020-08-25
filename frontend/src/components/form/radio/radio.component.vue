<template>
  <el-radio class="gc-radio"
            v-bind="$attrs"
            v-on="$listeners">

    <slot :name="slot"
          :slot="slot"
          v-for="(_, slot) of $slots" />
  </el-radio>
</template>

<script>
export default {
  name: 'gcRadio',
};
</script>

<style lang="scss">
.gc-radio {
  .is-checked {
    & + .el-radio__label {
      color: var(--black) !important;
    }

    .el-radio__inner {
      background-color: var(--grey) !important;
      border-color: var(--black) !important;
      transition: .25s;

      &:after {
        background: var(--black);
        transition: .25s;
      }
    }
  }

  .el-radio__label {
    font-weight: bold;
  }

  .el-radio__input {
    .el-radio__inner {
      background: var(--grey);
    }
  }
}
</style>