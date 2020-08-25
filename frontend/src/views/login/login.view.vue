<template>
  <div class="gc-login">
    <gc-login-form />
  </div>
</template>

<script>
import gcLoginForm from './components/login-form.component.vue';

export default {
  name: 'gcLogin',
  components: {
    gcLoginForm,
  },
};
</script>

<style lang="scss"
       scoped>
.gc-login {
  height: 100vh;
  width: 100vw;
  background: var(--primary-color);
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>