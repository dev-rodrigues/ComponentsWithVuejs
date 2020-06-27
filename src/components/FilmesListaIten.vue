<template>
    <li class="list-group-item">
        <span>{{ filme.titulo }} | {{ filme.ano }} | {{filme.autor}}</span>
        <button 
            @click="selecionar"
            class="btn btn-success float-right">Editar</button>
    </li>
</template>

<script>

import { eventBus } from './../main';

export default {
    inheritAtrs: false,
    props:{
        filme: {
            type: Object,
            required: true,
        }
    },
    methods: {
        selecionar() {
            // this.$emit('selecionarFilme', this.filme)
            // eventBus.$emit('selecionarFilme', this.filme);
            eventBus.selecionarFilme(this.filme);
        }
    }
}
</script>
