<template>
  <div class="gc-project-list">

    <gc-filters :search-valie="valueInput"
                :show-button="true"
                :show-checkboxes="false"
                :show-search="true"
                @change-search="changeSearch"
                button-label="Create new project"></gc-filters>

    <gc-project-list-table></gc-project-list-table>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api';
import { useProjectList }  from './hooks/use-project-list.js';
import gcFilters           from '@/components/filters/filters.component.vue';
import gcProjectListTable  from './components/project-list-table.component.vue';

export default defineComponent({
  name: 'gcProjectList',
  components: {
    gcFilters,
    gcProjectListTable,
  },
  setup() {

    const {
      valueInput,
      changeSearch,
    } = useProjectList();

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