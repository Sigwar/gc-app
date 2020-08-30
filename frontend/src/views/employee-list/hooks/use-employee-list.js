import { computed, ref } from '@vue/composition-api';
import store             from '@/store/store';

export const useEmployeeList = () => {

  const employeesList = () =>{
    store.dispatch('employeesModule/getEmployees');
  };

  const valueInput = ref('');

  const employees = computed(() => store.state.employeesModule.employees);
  const sort = computed(() => store.state.employeesModule.sort);

  const changeSearch = (value) => {
    valueInput.value = value;
  };

  const setSort = (value) => {
    store.commit('employeesModule/setSort', value);
  };

  return {
    sort,
    setSort,
    employees,
    valueInput,
    changeSearch,employeesList
  };
};