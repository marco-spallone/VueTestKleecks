import {createApp} from 'vue'
import App from './App.vue'
import router from '@/router'
import './assets/main.css'
import FormComponent from "@/components/FormComponent.vue";
import {createPinia} from 'pinia'
import piniaPluginPersistedState from "pinia-plugin-persistedstate"


createApp(App)
    .component('FormComponent', FormComponent)
    .use(createPinia().use(piniaPluginPersistedState))
    .use(router)
    .mount('#app')
