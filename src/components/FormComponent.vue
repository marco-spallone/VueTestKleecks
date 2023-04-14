<template>
  <div class="mb-4">
    <form class="shadow-md rounded px-8 pt-6 pb-8 mb-4 grid place-items-center">
      <div class="mb-4">
        <h1 class="text-white font-bold mb-2">New task</h1>
      </div>
      <div class="mb-4">
        <label class="block text-white text-sm font-bold mb-2" for="username">Description</label>
        <BaseInput v-model="description"></BaseInput>
      </div>
      <div class="mb-0">
        <BaseButton :styles="'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'" :type="'solid'"
                    :disabled="false" :text="'Invia'"
                    @click="onSubmit">
          <slot></slot>
        </BaseButton>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import BaseInput from "@/components/library/BaseInput.vue";
import {tasksStore} from '@/store/tasks';
import BaseButton from "@/components/library/BaseButton.vue";
import {ref} from "vue";
import router from "@/router";

const description = ref("")
const onSubmit = () => {
  if (description.value.length != 0) {
    tasksStore().addTask(description.value);
    router.push('/tasks');
  }
}
</script>

<style scoped>

</style>