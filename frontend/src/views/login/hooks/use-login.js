import { reactive } from '@vue/composition-api';
import router       from '@/router';

export const useLoginForm = () => {
  const loginForm = reactive({
    login: '',
    password: '',
  });

  const signIn = () => {
    router.push({ name: 'Home' });
  };

  return {
    loginForm,
    signIn,
  };
};