<template>
    <li class="list-group-item">
        <span>{{ filmeTituloConcatenado }} | {{ ano }}</span>
        <button class="btn btn-success float-right">Editar</button>
    </li>
</template>

<script>
export default {
    props:{
        titulo: {
            type: String,
            required: true
        },
        ano: {
            type: Number,
            required: true
        }
    },
    computed: {
        filmeTituloConcatenado() {
            return `Título: ${this.titulo}`;
        }
    }
}
</script>
