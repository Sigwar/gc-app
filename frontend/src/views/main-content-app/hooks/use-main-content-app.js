import { onMounted, ref } from '@vue/composition-api';
import router             from '@/router';

export const useMainContentApp = () => {

  const activeLink = ref('');

  const setActiveLink = (nameClass) => {
    activeLink.value = nameClass;
    if (nameClass === 'active-employees') {
      router.push({ name: 'Employees list' });
    } else {
      router.push({ name: 'Projects list' });
    }
  };

  const logOut = () => {
    router.push({ name: 'Login' });
  };

  onMounted(() => {
    activeLink.value = router.currentRoute.fullPath.includes('employees-list') ? 'active-employees' : 'active-projects';
  });

  return {
    logOut,
    activeLink,
    setActiveLink,
  };
};
