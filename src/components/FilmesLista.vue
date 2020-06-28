<template>
  <div class="row">

    <!-- coluna 1 -->
    <div class="col-8">

      <h2>Filmes</h2>

      <ul class="list-group list-group-flush">
        <FilmesListaIten 
        v-for="filme in filmes" 
        :key="filme.id" 
        :filme="filme"
        :class="aplicarClasseActive(filme)"
        @selecionarFilme="filmeSelecionado = $event"/>
      </ul>
    </div>

    <!-- coluna 2 -->
    <div class="col-4">

      <FilmesListaItenInfo
        v-if="!editar" 
        :filme="filmeSelecionado"
        @editarFilme="editarFilme"/>

      <FilmesListaItenEditar 
        v-else
        :filme="filmeSelecionado"/>
    </div>

  </div>
</template>

<script>

import FilmesListaIten from './FilmesListaIten.vue';
import FilmesListaItenInfo from './FilmesListaItenInfo.vue';
import FilmesListaItenEditar from './FilmesListaItenEditar.vue';


export default {
  components: {
    FilmesListaIten,
    FilmesListaItenInfo,
    FilmesListaItenEditar
  },
  data() {
    return {
      filmes: [
        {autor:'Stan',ano: 2018,titulo: 'Harry Potter', id: 1},
        {autor:'Stan',ano: 2018,titulo: 'As Aventuras de Tintin', id: 2},
        {autor:'Stan',ano: 2018,titulo: 'Magnolia', id: 3}
      ],
      filmeSelecionado: undefined,
      editar: false,
    }    
  },
  methods: {
      aplicarClasseActive(filmeIterado) {
        return {
          active: this.filmeSelecionado && this.filmeSelecionado.id === filmeIterado.id,
      }
    },
    editarFilme(filme) {
      this.editar = true;
      this.filmeSelecionado = filme;
    }
  }
}
</script>
