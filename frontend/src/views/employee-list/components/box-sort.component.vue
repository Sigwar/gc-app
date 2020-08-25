<template>
  <div class="gc-box-sort">

    <div :class="{'gc-box-sort__icon--upside-down': sort.direction === 'DES'}"
         class="gc-box-sort__icon icon-next"
         v-if="name === sort.sortBy"></div>

    <div class="gc-box-sort__icon icon-minus"
         v-else></div>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api';
import { useEmployeeList } from '../hooks/use-employeeList';

export default defineComponent({
  name: 'gcBoxSort',
  props: {
    name: String,
  },
  setup() {
    const {
      sort,
    } = useEmployeeList();

    return {
      sort,
    };
  },
});
</script>

<style lang="scss"
       scoped>
.gc-box-sort {
  margin-left: 1rem;
  background: var(--primary-color);
  padding: .41rem;
  border-radius: 2px;

  &__icon {
    height: 1.3rem;
    width: 1.3rem;
    transition: var(--cubic-bezier);

    &--upside-down {
      transform: rotate(180deg);
    }
  }
}
</style>