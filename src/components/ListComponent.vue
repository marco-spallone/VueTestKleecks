<template>
  <div class="grid place-items-center grid-rows-5 gap-2 flow-root">
    <div class="justify-items-start row-span-1">
      <BaseButton :disabled="false" :type="'solid'" :text="'Add'"
                  :styles="'mr-52 mb-3 bg-blue-500 hover:bg-blue-700 text-white py-1 px-3 rounded border-transparent'"
                  @click="addTask()"></BaseButton>
    </div>
    <div class="inline-flex rounded-md shadow-sm row-span-1" role="group">
      <BaseButton :disabled="false" :type="'outline'" :text="'All tasks'" :styles="'px-4 py-2 text-sm font-medium rounded-l-md hover:bg-gray-900 hover:text-white'
            +'focus:z-10 focus:ring-blue-500 focus:bg-blue-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white'
            +'dark:hover:bg-yellow-800 dark:focus:bg-yellow-600'" @click="filterTasks('all')"></BaseButton>
      <BaseButton :disabled=false :type="'outline'" :text="'Active'" :styles="'px-4 py-2 text-sm font-medium bg-transparent border hover:bg-gray-900 hover:text-white'
            +'focus:z-10 focus:ring-blue-500 focus:bg-blue-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white'
            +'dark:hover:bg-yellow-800 dark:focus:bg-yellow-600'" @click="filterTasks('active')">Active
      </BaseButton>
      <BaseButton :disabled=false :type="'outline'" :text="'Completed'" :styles="'px-4 py-2 text-sm font-medium bg-transparent border rounded-r-md hover:bg-gray-900 hover:text-white'
            +'focus:z-10 focus:ring-blue-500 focus:bg-blue-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white'
            +'dark:hover:bg-yellow-800 dark:focus:bg-yellow-600'" @click="filterTasks('completed')">Completed
      </BaseButton>
    </div>
    <div class="mt-7 row-span-2">
      <ul class="list-disc">
        <li v-for="task of tasks" class="mb-5">
          <BaseCheckBox :checked="task.completed" class="mr-3 ml-2" @change="changeState(task)"></BaseCheckBox>
          <label :class="task.completed? 'text-green-500 line-through' : 'text-red-500'">{{ task.description }} </label><span
            v-if="task.completed"> - COMPLETED!</span>
          <BaseButton :type="'solid'" :disabled="false" :text="'Elimina'"
                      :styles="'ml-5 text-white py-1 px-2 bg-red-500 border-transparent rounded'"
                      @click="deleteTask(task)"></BaseButton>
        </li>
      </ul>
    </div>
    <div class="row-span-1">
      <p>Task ancora da completare: {{ tasksCount }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import {tasksStore} from "@/store/tasks";
import BaseCheckBox from "@/components/library/BaseCheckBox.vue";
import BaseButton from "@/components/library/BaseButton.vue";
import {onMounted, ref} from "vue";
import router from "@/router";


const tasks = ref([]);
const tasksCount = ref(0);
onMounted(() => {
  filterTasks('all');
  checkTasksCount();
})
const changeState = (task) => {
  tasksStore().changeState(task);
  filterTasks('all');
  checkTasksCount();
}
const deleteTask = async (task) => {
  await tasksStore().deleteTask(task);
  filterTasks('all');
  checkTasksCount();
}
const checkTasksCount = () => {
  tasksCount.value = 0;
  tasks.value.forEach(item => {
    if (!item.completed) {
      tasksCount.value++;
    }
  })
}
const filterTasks = (filter) => {
  switch (filter) {
    case 'all':
      tasks.value = tasksStore().tasks;
      break;
    case 'active':
      tasks.value = tasksStore().tasks.filter(task => !task.completed)
      break;
    case 'completed':
      tasks.value = tasksStore().tasks.filter(task => task.completed)
      break;
    default:
      break;
  }
}
const addTask = () => {
  router.push('/form')
}
</script>

<style scoped>

</style>