<template>
  <div class="gc-app"
       id="app">
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'App',
};
</script>
<style lang="scss">
@import 'assets/style/main';

.gc-app {
  /deep/ {
    .el-loading-mask {
      background: var(--transparent-75);

      .el-loading-spinner {
        .circular {
          circle {
            stroke: var(--primary-color);
          }
        }
      }
    }
  }
}
</style>
