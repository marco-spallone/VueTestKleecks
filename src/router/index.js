import { createRouter, createWebHistory } from "vue-router";
import FormComponent from "@/components/FormComponent.vue";

const routes = [
    {
        path:'/form',
        name:'form',
        component:FormComponent
    }
];

const router = createRouter({
    history:createWebHistory(process.env.BASE_URL),
    routes
});

export default router;