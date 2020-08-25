import { reactive, ref } from '@vue/composition-api';

export const useFilters = (context) => {

  const search = ref('');

  const isModalOpen = ref(false);

  const valueInput = ref('');

  const checkboxes = reactive({
    active: true,
    inactive: true,
  });

  const changeValueInput = (value) => {
    context.emit('change-search', value);
  };

  return {
    search,
    valueInput,
    checkboxes,
    isModalOpen,
    changeValueInput,
  };
};