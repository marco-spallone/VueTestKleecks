<template>
  <div class="grid place-items-center">
    <div class="inline-flex rounded-md shadow-sm" role="group">
      <BaseButton :disabled="false" :type="'outline'" :text="'All'" :styles="'px-4 py-2 text-sm font-medium rounded-l-md hover:bg-gray-900 hover:text-white'
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
    <div class="mt-7">
      <ul class="list-disc">
        <li v-for="task of tasks" class="mb-5">
          <BaseCheckBox :checked="task.completed" class="mr-3 ml-2" @change="changeState(task)"></BaseCheckBox>
          <label :class="task.completed? 'text-green-500' : 'text-red-500'">{{ task.description }} <span
              v-if="task.completed"> - COMPLETED!</span></label>
          <BaseButton :type="'solid'" :disabled="false" :text="'Elimina'"
                      :styles="'ml-5 text-white py-1 px-2 bg-red-500 border-transparent rounded'"
                      @click="deleteTask(task)"></BaseButton>
        </li>
      </ul>
    </div>
    <div>
      <p>Task ancora da completare: {{ tasksCount }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import {tasksStore} from "@/store/tasks";
import BaseCheckBox from "@/components/library/BaseCheckBox.vue";
import BaseButton from "@/components/library/BaseButton.vue";
import {onMounted, ref} from "vue";

export default {
  name: "ListComponent",
  components: {BaseButton, BaseCheckBox},
  setup() {
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
    return {
      tasks,
      tasksCount,
      changeState,
      checkTasksCount,
      filterTasks,
      deleteTask
    }
  }
}
</script>

<style scoped>

</style>