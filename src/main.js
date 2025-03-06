import { createApp } from 'vue'

// Import PrimeVue stuff
import PrimeVue from 'primevue/config';
import Aura  from '@primeuix/themes/aura';
import Button from "primevue/button"
import Card from 'primevue/card';
import Checkbox from 'primevue/checkbox';
import InputText from 'primevue/inputtext';

import Password from 'primevue/password';

import { Form } from '@primevue/forms';
import 'primeicons/primeicons.css'

import './style.css'
import App from './App.vue'
import router from './router';
  


const app = createApp(App);
app.component('Button', Button);
app.component('Card', Card);
app.component('Checkbox', Checkbox);
app.component('InputText', InputText);
app.component('Form', Form);
app.component('Password', Password);
app.use(PrimeVue, {
    theme: {
        preset: Aura,
        options: {
            darkModeSelector: '.my-app-dark'
        },
    }
});
app.use(router)
app.mount('#app')