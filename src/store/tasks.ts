import {defineStore} from "pinia";

export const tasksStore = defineStore('tasksStore', {
    state: () => ({
        tasks:[]
    }),
    getters: {

    },
    persist:true,
    actions:{
        addTask(description){
            let maxId = 0;
            this.tasks.forEach(item => {
                if(item!=null && item.id>=maxId){
                    maxId=item.id+1;
                }
            })
            let task={
                id:maxId,
                description:description,
                completed:false
            }
            this.tasks.push(task);
        },
        changeState(task){
            this.tasks.find((item, index) => {
                if(item.id===task.id){
                    this.tasks[index].completed=!this.tasks[index].completed;
                }
            })
        },
        deleteTask(task){
            this.tasks.find((item, index) => {
                if(item != null && item.id===task.id){
                    this.tasks.splice(index, 1);
                }
            })
        }
    }
})