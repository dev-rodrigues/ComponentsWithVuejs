<template>
    <div>

        <div class="jumbotron jumbotron-fluid"> 
            <div class="container">  
                <h1 class="display-4">Lista de Filmes</h1>
                <p class="lead">Treinamento comunicação entre Componentes no Vue</p>
            </div>
        </div>
        <div class="container"> 
            <FilmesLista/>
        </div>
    </div>
</template>

<script>

import FilmesLista from './components/FilmesLista';

export default {
    components: {
        FilmesLista,
    }    
}
</script>