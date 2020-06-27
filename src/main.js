import Vue from 'vue';
import App from './App.vue';

// ponto central para comunicação entre componentes
export const eventBus = new Vue();

new Vue({
  render: h => h(App)
}).$mount('#app');