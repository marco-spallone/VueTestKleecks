import {createRouter, createWebHistory} from "vue-router";
import FormComponent from "@/components/FormComponent.vue";
import ListComponent from "@/components/ListComponent.vue";

const routes = [
    {
        path: '/tasks',
        name: 'tasks',
        component: ListComponent
    },
    {
        path: '/form',
        name: 'form',
        component: FormComponent
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;