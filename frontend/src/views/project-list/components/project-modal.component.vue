<template>
  <gc-dialog :visible.sync="modal"
             :before-close="changeModalState"
             width="42%"
             class="gc-project-modal">

    <h2 class="gc-project-modal__title">Create new project</h2>

    <gc-form :modal="projectForm"
             ref="gcNewProjectModal"
             class="gc-project-modal__form">

      <gc-form-item prop="name"
                    label="Name:"
                    class="gc-project-modal__form__item">

        <gc-input v-model="projectForm.name"
                  class="gc-project-modal__form__item__value"></gc-input>
      </gc-form-item>

      <gc-form-item prop="client"
                    label="Client:"
                    class="gc-project-modal__form__item">

        <gc-input v-model="projectForm.client"
                  class="gc-project-modal__form__item__value"></gc-input>
      </gc-form-item>

      <div class="gc-project-modal__form__wrapper">
        <gc-form-item prop="employees"
                      label="Employees:"
                      class="gc-project-modal__form__item">

          <gc-select v-model="projectForm.employees"
                     multiple
                     collapse-tags>

            <gc-option v-for="employee in employees"
                       :labe="employee.label"
                       :key="employee.uuid"
                       :value="employee.uuid">{{employee.label}}</gc-option>
          </gc-select>
        </gc-form-item>

        <gc-form-item prop="client"
                      label="Time frame:"
                      class="gc-project-modal__form__item">

          <gc-date-picker v-model="projectForm.date"
                          type="monthrange"
                          range-separator="-"
                          start-placeholder="Start month"
                          end-placeholder="End month"
                          class="gc-project-modal__form__item__value"></gc-date-picker>
        </gc-form-item>
      </div>

      <gc-form-item prop="topic"
                    label="Topic:"
                    class="gc-project-modal__form__item">

        <gc-input v-model="projectForm.topic"
                  class="gc-project-modal__form__item__value"></gc-input>
      </gc-form-item>

      <gc-form-item prop="description"
                    label="Description"
                    class="gc-project-modal__form__item">

        <gc-input v-model="projectForm.description"
                  :autosize="{minRows: 4}"
                  type="textarea"
                  class="gc-project-modal__form__item__value"></gc-input>
      </gc-form-item>

      <div class="gc-project-modal__form__buttons">

        <gc-button @click.native.prevent="changeModalState"
                   class="button"
                   type="info">Cancel
        </gc-button>

        <gc-button v-if="!isEditMode"
                   @click.native.prevent="createNewProject"
                   class="button"
                   type="default">Create
        </gc-button>

        <gc-button v-if="isEditMode"
                   @click.native.prevent="updateProject"
                   class="button"
                   type="default">Update
        </gc-button>
      </div>
    </gc-form>
  </gc-dialog>
</template>

<script>
import { defineComponent } from '@vue/composition-api';
import { useProjectList }  from '../hooks/use-project-list';
import gcForm              from '@/components/form/form/form.component.vue';
import gcInput             from '@/components/form/input/input.component.vue';
import gcDialog            from '@/components/dialog/dialog.component.vue';
import gcSelect            from '@/components/form/select/select.component.vue';
import gcOption            from '@/components/form/select/option.component.vue';
import gcButton            from '@/components/form/button/button.component.vue';
import gcFormItem          from '@/components/form/form-item/form-item.component.vue';
import gcDatePicker        from '@/components/date-picker/date-picker.component.vue';

export default defineComponent({
  name: 'gcNewProjectModal',
  components: {
    gcForm,
    gcInput,
    gcButton,
    gcSelect,
    gcOption,
    gcDialog,
    gcFormItem,
    gcDatePicker,
  },
  setup() {
    const {
      modal,
      employees,
      isEditMode,
      projectForm,
      updateProject,
      createNewProject,
      changeModalState,
    } = useProjectList();

    return {
      modal,
      employees,
      isEditMode,
      projectForm,
      updateProject,
      createNewProject,
      changeModalState,
    };
  },
});
</script>

<style lang="scss"
       scoped>

.gc-project-modal {
  padding: 2rem;

  &__title {
    color: var(--font-color);
    text-align: center;
    font-size: 2.9rem;
    margin-top: 0;
    margin-bottom: 0;
  }

  &__form {
    padding: 3.1rem 5.3rem;

    &__wrapper {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;

      div {
        width: 31rem;
      }
    }

    &__buttons {
      margin-top: 3.1rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
}
</style>