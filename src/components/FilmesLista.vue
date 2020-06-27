<template>
  <div class="row">

    <!-- coluna 1 -->
    <div class="col-8">

      <h2>Filmes</h2>

      <ul class="list-group list-group-flush">
        <FilmesListaIten 
          v-for="filme in filmes" 
          :key="filme.id" 
          v-bind="filme"/>      
      </ul>
    </div>

    <!-- coluna 2 -->
    <div class="col-4">

      <FilmesListaItenInfo/>

    </div>

  </div>
</template>

<script>

import FilmesListaIten from './FilmesListaIten.vue'
import FilmesListaItenInfo from './FilmesListaItenInfo.vue'

export default {
  components: {
    FilmesListaIten,
    FilmesListaItenInfo
  },
  data: function() {
    return {
      filmes: [
        {ano: 2018,titulo: 'Harry Potter', id: 1},
        {ano: 2018,titulo: 'As Aventuras de Tintin', id: 2},
        {ano: 2018,titulo: 'Magnolia', id: 3}
      ]
    }
  }
}
</script>
