import { computed, ref } from '@vue/composition-api';
import store             from '@/store/store';

export const useProjectList = () => {
  store.dispatch('projectsModule/getProjects');

  const valueInput = ref('');

  const projects = computed(() => store.state.projectsModule.projects);
  const sort = computed(() => store.state.projectsModule.sort);

  const changeSearch = (value) => {
    valueInput.value = value;
  };

  const setSort = (value) => {
    store.commit('projectsModule/setSort', value);
  };

  return {
    sort,
    setSort,
    projects,
    valueInput,
    changeSearch,
  };
};