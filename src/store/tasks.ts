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
            let task={
                id:this.tasks.length+1,
                description:description,
                completed:false
            }
            this.tasks.push(task);
            console.log(this.tasks)
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
                if(item.id===task.id){
                    this.tasks.splice(index, 1);
                }
            })
        }
    }
})