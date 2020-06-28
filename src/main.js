import Vue from 'vue';
import App from './App.vue';

// ponto central para comunicação entre componentes
export const eventBus = new Vue({
  methods: {
    selecionarFilme(filmeSelecionado) {
      this.$emit('selecionarFilme', filmeSelecionado)
    },
    atualizarFilme(filmeAtualizado) {
      this.$emit('atualizarFilme', filmeAtualizado)
    }
  }
});

new Vue({
  render: h => h(App)
}).$mount('#app');