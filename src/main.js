import './style.css';

import { createApp } from 'vue';
import App from './App.vue';
import pokemonStore from './data/data';

const app = createApp(App);

app.provide('pokemon-store', pokemonStore);
app.mount('#app');
