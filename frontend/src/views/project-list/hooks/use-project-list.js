import { computed, ref } from '@vue/composition-api';
import store             from '@/store/store';

export const useProjectList = () => {

  const valueInput = ref('');

  const sort = computed(() => store.state.projectsModule.sort);
  const projects = computed(() => store.state.projectsModule.projects);
  const modal = computed(() => store.state.projectsModule.isModalOpen);
  const employees = computed(() => store.state.projectsModule.employees);
  const newProjectForm = computed(() => store.state.projectsModule.newProjectForm);

  const changeSearch = (value) => {
    valueInput.value = value;
  };

  const setSort = (value) => {
    store.commit('projectsModule/setSort', value);
  };

  const changeModalState = () => {
    store.commit('projectsModule/setModal');
    store.commit('projectsModule/resetForm')
  };
  const createNewProject = () => {
    store.commit('projectsModule/createNewProject');
  };

  return {
    sort,
    modal,
    setSort,
    projects,
    employees,
    valueInput,
    changeSearch,
    newProjectForm,
    createNewProject,
    changeModalState,
  };
};