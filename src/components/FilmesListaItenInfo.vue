<template>
    <div>
        <h2>Filme selecionado</h2>

        <div class="card" v-if="filme">
            <div class="card-body">
                <h5 class="card-title"> {{ filme.titulo }} | {{ filme.ano }}</h5>
                <button class="btn btn-danger float-right">Editar</button>
            </div>
        </div>
        <p v-else>Nenhum Filme Selecionado</p>        
        <button 
            v-if="filme"
            @click="limpar"
            class="btn btn-warning w-100 p-3">Limpar</button>
    </div>    
</template>

<script>

import { eventBus } from './../main';

export default {
    // props: {
    //     filme: Object
    // }
    data() {
        return {
           filme: undefined 
        }
    },
    methods: {
        limpar() {
            // this.$emit('selecionarFilme', this.filme)
            // eventBus.$emit('selecionarFilme', this.filme);
            eventBus.selecionarFilme(null);
        }
    },
    created() {
        eventBus.$on('selecionarFilme', (filmeSelecionado) => {
            this.filme = filmeSelecionado;
        });
    }
}
</script>