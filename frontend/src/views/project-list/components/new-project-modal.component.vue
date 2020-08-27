<template>
  <gc-dialog :visible.sync="modal"
             :before-close="changeModalState"
             width="37%"
             class="gc-new-project-modal">

    <h2 class="gc-new-project-modal__title">Create new project</h2>

    <gc-form :modal="newProjectForm"
             ref="gcNewProjectModal"
             class="gc-new-project-modal__form">

      <gc-form-item prop="name"
                    class="gc-new-project-modal__form__item">

        <span class="gc-new-project-modal__form__item__label">Name: </span>

        <gc-input v-model="newProjectForm.name"
                  class="gc-new-project-modal__form__item__value"></gc-input>
      </gc-form-item>

      <gc-form-item prop="client"
                    class="gc-new-project-modal__form__item">

        <span class="gc-new-project-modal__form__item__label">Client: </span>

        <gc-input v-model="newProjectForm.client"
                  class="gc-new-project-modal__form__item__value"></gc-input>
      </gc-form-item>

      <gc-form-item prop="employees"
                    class="gc-new-project-modal__form__item">

        <span class="gc-new-project-modal__form__item__label">Employees: </span>

        <gc-select v-model="newProjectForm.employees"
                   multiple
                   collapse-tags>

          <gc-option v-for="employee in employees"
                     :key="employee.uuid"
                     :value="employee.uuid">{{employee.name}} {{employee.lastName}}
          </gc-option>
        </gc-select>
      </gc-form-item>

      <gc-form-item prop="client"
                    class="gc-new-project-modal__form__item">

        <span class="gc-new-project-modal__form__item__label gc-new-project-modal__form__item__label--large">Time frame: </span>

        <gc-date-picker v-model="newProjectForm.dateStart"
                        type="monthrange"
                        range-separator="-"
                        start-placeholder="Start month"
                        end-placeholder="End month"></gc-date-picker>
      </gc-form-item>

      <gc-form-item prop="topic"
                    class="gc-new-project-modal__form__item">

        <span class="gc-new-project-modal__form__item__label">Topic: </span>

        <gc-input v-model="newProjectForm.topic"
                  class="gc-new-project-modal__form__item__value"></gc-input>
      </gc-form-item>

      <gc-form-item prop="description"
                    class="gc-new-project-modal__form__item">

        <span class="gc-new-project-modal__form__item__label">Description: </span>

        <gc-input v-model="newProjectForm.description"
                  :autosize="{minRows: 4}"
                  type="textarea"
                  class="gc-new-project-modal__form__item__value"></gc-input>
      </gc-form-item>

      <div class="gc-new-project-modal__form__buttons">

        <gc-button @click.native.prevent="changeModalState"
                   class="button"
                   type="info">Cancel</gc-button>

        <gc-button @click.native.prevent="createNewProject"
                   class="button"
                   type="default">Create</gc-button>
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
      newProjectForm,
      createNewProject,
      changeModalState
    } = useProjectList();

    return {
      modal,
      employees,
      newProjectForm,
      createNewProject,
      changeModalState,
    };
  },
});
</script>

<style lang="scss"
       scoped>
.gc-new-project-modal {
  padding: 2rem;

  &__title {
    color: var(--font-color);
    text-align: center;
    font-size: 2.9rem;
    margin-top: 0;
  }

  &__form {
    padding: 3.1rem 5.3rem;

    &__item {
      display: flex;
      align-items: center;

      /deep/ {
        .el-form-item__content {
          display: flex;
          align-items: center;
          width: 100%;
        }

        .el-date-editor {
          width: calc(100% - 14rem);
        }
      }

      &__label {
        font-size: 2.3rem;
        display: block;
        margin-right: 2.3rem;
        word-break: keep-all;

        &--large {
          width: 14rem;
        }
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