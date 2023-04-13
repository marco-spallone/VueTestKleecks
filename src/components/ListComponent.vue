<template>
  <div>
    <div class="inline-flex rounded-md shadow-sm" role="group">
      <BaseButton :disabled="false" :type="'outline'" :text="'All'" :styles="'px-4 py-2 text-sm font-medium rounded-l-md hover:bg-gray-900 hover:text-white'
            +'focus:z-10 focus:ring-blue-500 focus:bg-blue-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white'
            +'dark:hover:bg-yellow-800 dark:focus:bg-yellow-600'" @click="filterTasks('all')"></BaseButton>
      <BaseButton :disabled=false :type="'outline'" :text="'Active'" :styles="'px-4 py-2 text-sm font-medium bg-transparent border hover:bg-gray-900 hover:text-white'
            +'focus:z-10 focus:ring-blue-500 focus:bg-blue-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white'
            +'dark:hover:bg-yellow-800 dark:focus:bg-yellow-600'" @click="filterTasks('active')">Active</BaseButton>
      <BaseButton :disabled=false :type="'outline'" :text="'Completed'" :styles="'px-4 py-2 text-sm font-medium bg-transparent border rounded-r-md hover:bg-gray-900 hover:text-white'
            +'focus:z-10 focus:ring-blue-500 focus:bg-blue-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white'
            +'dark:hover:bg-yellow-800 dark:focus:bg-yellow-600'" @click="filterTasks('completed')">Completed</BaseButton>
    </div>
    <div class="mt-7">
      <ul class="list-disc">
        <li v-for="task of tasks" class="mb-5"><BaseCheckBox :checked="task.completed" class="mr-3 ml-2" @change="changeState(task)"></BaseCheckBox>
          <label :class="task.completed? 'text-green-500' : 'text-red-500'">{{task.description}}</label>
          <BaseButton :type="'solid'" :disabled="false" :text="'Elimina'" :styles="'ml-5 text-white py-1 px-2 bg-red-500 border-transparent rounded'"
                      @click="deleteTask(task)"></BaseButton></li>
      </ul>
    </div>
    <div>
      <p>Task ancora da completare: {{tasksCount}}</p>
    </div>
  </div>
</template>

<script>
import {tasksStore} from "@/store/tasks";
import BaseCheckBox from "@/components/library/BaseCheckBox.vue";
import BaseButton from "@/components/library/BaseButton.vue";

export default {
  name: "ListComponent",
  components: {BaseButton, BaseCheckBox},
  beforeMount() {
    this.filterTasks('all');
    this.checkTasksCount();
  },
  data(){
    return{
      tasks:[],
      tasksCount:0
    }
  },
  methods:{
    changeState(task){
      tasksStore().changeState(task);
      this.checkTasksCount();
    },
    deleteTask(task){
      tasksStore().deleteTask(task);
    },
    checkTasksCount(){
      this.tasksCount=0;
      this.tasks.forEach(item => {
        if(!item.completed){
          this.tasksCount++;
        }
      })
    },
    filterTasks(filter){
      switch (filter){
        case 'all':
          this.tasks=tasksStore().tasks;
          break;
        case 'active':
          this.tasks=tasksStore().tasks.filter(task => !task.completed)
          break;
        case 'completed':
          this.tasks=tasksStore().tasks.filter(task => task.completed)
          break;
        default:
          break;
      }
    }
  }
}
</script>

<style scoped>

</style>