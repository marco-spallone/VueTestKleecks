import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import './assets/main.css'
import FormComponent from "@/components/FormComponent.vue";



createApp(App)
    .component('FormComponent', FormComponent)
    .use(router)
    .mount('#app')
