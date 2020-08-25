<template>
  <div class="gc-main-content-app">
    <gc-nav-bar />

    <gc-aside-bar />

    <main class="gc-main-content-app__content">
      <router-view />
    </main>
  </div>
</template>

<script>
import gcNavBar   from './components/nav-bar.component.vue';
import gcAsideBar from './components/aside-bar.component.vue';

export default {
  name: 'gcMainContentApp',
  components: {
    gcAsideBar,
    gcNavBar,
  },
};
</script>

<style lang="scss"
       scoped>
.gc-main-content-app {
  display: grid;
  grid-template-columns: 10.3rem auto;
  grid-template-rows: 7.9rem auto;
  height: 100vh;

  &__content {
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 2;
    grid-row-end: 3;
    padding: 2.9rem 7.1rem;
  }
}
</style>