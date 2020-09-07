<template>
  <gc-dialog :visible.sync="isModalOpen"
             :before-close="resetEmployeeForm"
             width="45%"
             center
             class="gc-employee-modal">

    <h2 class="gc-employee-modal__title">Create new employee</h2>

    <gc-form :modal="employeeForm"
             ref="gcNewProjectModal"
             class="gc-employee-modal__form">

      <div class="gc-employee-modal__form__row">

        <div class="gc-employee-modal__form__row__avatar-uploader"
             @click="$refs.pictureUpload.click()">

          <input type="file"
                 @change="handleAvatarSuccess"
                 ref="pictureUpload"
                 class="avatar-input" />

          <img v-if="employeeForm.picture.src !== ''"
               :src="employeeForm.picture.src"
               :alt="employeeForm.name"
               class="picture" />

          <i v-if="employeeForm.picture.src === ''"
             class="el-icon-plus avatar-uploader-icon"></i>
        </div>

        <div class="gc-employee-modal__form__row__wrapper gc-employee-modal__form__row__wrapper--no-margin">
          <gc-form-item prop="name"
                        label="Name"
                        class="gc-employee-modal__form__item">

            <gc-input v-model="employeeForm.name"
                      class="gc-employee-modal__form__item__value"></gc-input>
          </gc-form-item>

          <gc-form-item prop="latName"
                        label="Last name:"
                        class="gc-employee-modal__form__item">

            <gc-input v-model="employeeForm.lastName"
                      class="gc-employee-modal__form__item__value"></gc-input>
          </gc-form-item>
        </div>
      </div>

      <div class="gc-employee-modal__form__row">

        <div class="gc-employee-modal__form__row__wrapper">
          <gc-form-item prop="profession"
                        label="Profession"
                        class="gc-employee-modal__form__item">

            <gc-input v-model="employeeForm.profession"
                      class="gc-employee-modal__form__item__value"></gc-input>
          </gc-form-item>

          <gc-form-item prop="level"
                        label="Level"
                        class="gc-employee-modal__form__item gc-employee-modal__form__item">

            <gc-select v-model="employeeForm.level"
                       placeholder="Select level..."
                       filterable
                       allow-create
                       default-first-option>

              <gc-option v-for="profession in professionList"
                         :key="profession"
                         :label="profession"
                         :value="profession"></gc-option>
            </gc-select>
          </gc-form-item>
        </div>

        <div class="gc-employee-modal__form__row__wrapper">
          <gc-form-item prop="birthDay"
                        label="Birthday"
                        class="gc-employee-modal__form__item">

            <gc-input v-model="employeeForm.birthDay"
                      class="gc-employee-modal__form__item__value"></gc-input>
          </gc-form-item>

          <gc-form-item prop="itExperience"
                        label="IT Experience:"
                        class="gc-employee-modal__form__item">

            <gc-input v-model="employeeForm.itExperience"
                      class="gc-employee-modal__form__item__value"></gc-input>
          </gc-form-item>
        </div>

        <div class="gc-employee-modal__form__row__wrapper">
          <gc-form-item prop="language"
                        label="Language"
                        class="gc-employee-modal__form__item">

            <gc-input v-model="employeeForm.language"
                      class="gc-employee-modal__form__item__value"></gc-input>
          </gc-form-item>

          <gc-form-item prop="active"
                        label="Active"
                        class="gc-employee-modal__form__item gc-employee-modal__form__item--switch">

            <gc-switch v-model="employeeForm.isActive"
                       class="gc-employee-modal__form__item__value"></gc-switch>
          </gc-form-item>
        </div>
      </div>

      <gc-form-item prop="itKnowledge"
                    label="IT knowledge:"
                    class="gc-employee-modal__form__item">

        <gc-select v-model="employeeForm.itKnowledge"
                   placeholder="Select knowledge..."
                   multiple
                   filterable
                   allow-create
                   default-first-option>

          <gc-option v-for="tag in knowledgeTags"
                     :key="tag"
                     :label="tag"
                     :value="tag"></gc-option>
        </gc-select>
      </gc-form-item>

      <gc-form-item prop="projects"
                    label="Project:"
                    class="gc-employee-modal__form__item">

        <gc-select v-model="employeeForm.projects"
                   placeholder="Select projects..."
                   multiple
                   filterable
                   allow-create
                   default-first-option>

          <gc-option v-for="project in projects"
                     :key="project.uuid"
                     :label="project.label"
                     :value="project.uuid"></gc-option>
        </gc-select>
      </gc-form-item>

      <div class="gc-employee-modal__form__buttons">

        <gc-button @click.native.prevent="resetEmployeeForm"
                   class="button"
                   type="info">Cancel
        </gc-button>

        <gc-button @click.native.prevent="createNewEmployee"
                   class="button"
                   type="default">Create
        </gc-button>
      </div>
    </gc-form>
  </gc-dialog>
</template>

<script>
import { defineComponent } from '@vue/composition-api';
import { useEmployeeList } from '../hooks/use-employee-list';
import gcForm              from '@/components/form/form/form.component.vue';
import gcInput             from '@/components/form/input/input.component.vue';
import gcDialog            from '@/components/dialog/dialog.component.vue';
import gcSelect            from '@/components/form/select/select.component.vue';
import gcOption            from '@/components/form/select/option.component.vue';
import gcButton            from '@/components/form/button/button.component.vue';
import gcFormItem          from '@/components/form/form-item/form-item.component.vue';
import gcUpload            from '@/components/upload/uplaod.component.vue';
import gcSwitch            from '@/components/form/switch/switch.component.vue';

export default defineComponent({
  name: 'gcNewEmployeeModal',
  components: {
    gcForm,
    gcInput,
    gcSwitch,
    gcButton,
    gcSelect,
    gcOption,
    gcUpload,
    gcDialog,
    gcFormItem,
  },
  setup() {

    const {
      projects,
      isModalOpen,
      employeeForm,
      knowledgeTags,
      professionList,
      createNewEmployee,
      resetEmployeeForm,
      handleAvatarSuccess,
    } = useEmployeeList();

    return {
      projects,
      isModalOpen,
      employeeForm,
      knowledgeTags,
      professionList,
      createNewEmployee,
      resetEmployeeForm,
      handleAvatarSuccess,
    };
  },
});
</script>

<style lang="scss"
       scoped>

.gc-employee-modal {
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

    &__row {
      display: flex;

      &__avatar-uploader {
        min-width: 19rem;
        max-width: 19rem;
        height: 19rem;
        border: 1px dashed var(--gray-light);
        margin-right: 3.1rem;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;

        &:hover {
          border: 1px dashed var(--warning);
          box-shadow: var(--input-shadow);
          transition: var(--transition);
        }

        .avatar-input {
          display: none;
        }

        .picture {
          object-fit: cover;
          width: 100%;
          height: 100%;
        }
      }

      &__wrapper {
        width: 100%;

        &:first-child,
        &:nth-child(2) {
          margin-right: 2.1rem;
        }

        &--no-margin {
          margin-right: 0;

          &:first-child,
          &:nth-child(2) {
            margin-right: 0;
          }
        }
      }
    }

    &__item {
      &--switch {
        display: flex;
        margin-top: 4.3rem;
        align-items: center;
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