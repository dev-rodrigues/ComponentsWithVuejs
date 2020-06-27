<template>
    <li class="list-group-item">
        <span>{{ filme.titulo }} | {{ filme.ano }} | {{filme.autor}}</span>
        <button class="btn btn-success float-right">Editar</button>
    </li>
</template>

<script>
export default {
    inheritAtrs: false,
    props:{
        filme: {
            type: Object,
            required: true,
        }
    }
}
</script>
