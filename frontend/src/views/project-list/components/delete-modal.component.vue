<template>
  <gc-dialog :visible.sync="isDeleteModal"
             :before-close="changeDeleteModal"
             width="40%"
             class="delete-modal">

    <h2 class="delete-modal__title">Are you sure you want
      <span class="delete-modal__title__highlighted">remove</span></h2>

    <p class="delete-modal__project">{{projectToDelete.name}}
      <span class="delete-modal__project__insertion">from</span>
      {{projectToDelete.client}}
    </p>

    <div class="delete-modal__buttons">

      <gc-button @click.native.prevent="changeDeleteModal"
                 class="button"
                 type="info">Cancel</gc-button>

      <gc-button @click.native.prevent="deleteProject"
                 class="button"
                 type="danger">Delete</gc-button>
    </div>
  </gc-dialog>
</template>

<script>
import { defineComponent } from '@vue/composition-api';
import { useProjectList }  from '../hooks/use-project-list';
import gcButton            from '@/components/form/button/button.component.vue';
import gcDialog            from '@/components/dialog/dialog.component.vue';

export default defineComponent({
  name: 'gcNewProjectModal',
  components: {
    gcButton,
    gcDialog,
  },
  setup() {
    const {
      isDeleteModal,
      deleteProject,
      projectToDelete,
      changeDeleteModal,
    } = useProjectList();

    return {
      isDeleteModal,
      deleteProject,
      projectToDelete,
      changeDeleteModal,
    };
  },
});
</script>

<style lang="scss"
       scoped>
.delete-modal {
  padding: 2rem;

  &__title {
    color: var(--font-color);
    text-align: center;
    font-size: 2.9rem;
    margin-top: 0;
  }

  &__project {
    text-align: center;
    font-size: 4.1rem;
    color: var(--gray-dark);
    margin: 2.1rem;
    letter-spacing: 2px;

    &__insertion {
      font-size: 2.7rem;
      color: var(--gray-light);
      letter-spacing: normal;
    }
  }

  &__buttons {
    margin-top: 3.1rem;
    padding: 0 3.1rem;
    display: flex;
    justify-content: space-between;
    align-self: center;
  }
}
</style>