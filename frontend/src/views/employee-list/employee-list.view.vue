<template>
  <div class="gc-employee-list">

    <gc-filters :search-valie="valueInput"
                :show-button="true"
                :show-checkboxes="true"
                :show-search="true"
                @change-search="changeSearch"></gc-filters>

    <gc-employee-list-table></gc-employee-list-table>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api';
import { useEmployeeList } from './hooks/use-employeeList';
import gcFilters           from '@/components/filters/filters.component.vue';
import gcEmployeeListTable from './components/employee-list-table.component.vue';

export default defineComponent({
  name: 'gcEmployeeList',
  components: {
    gcFilters,
    gcEmployeeListTable,
  },

  setup() {

    const {
      valueInput,
      changeSearch,
    } = useEmployeeList();

    return {
      valueInput,
      changeSearch,
    };
  },
});
</script>

<style lang="scss"
       scoped>
</style>