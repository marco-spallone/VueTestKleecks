<template>
  <div class="mb-4">
    <form class="shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div class="mb-4">
        <label class="block text-white text-sm font-bold mb-2" for="username">Descrizione</label>
        <BaseInput v-model="description"></BaseInput>
      </div>
      <div class="mb-0">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="button" @click="onSubmit"><slot>INVIA</slot></button>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import BaseInput from "@/components/library/BaseInput.vue";
import {tasksStore} from '@/store/tasks';

export default {
  name: "FormComponent",
  components: {BaseInput},
  data(){
    return{
      description:""
    }
  },
  methods:{
    onSubmit(){
      if(this.description.length!=0){
        tasksStore().addTask(this.description);
      }

    }
  }
}
</script>

<style scoped>

</style>