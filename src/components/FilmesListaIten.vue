<template>
    <li class="list-group-item">
        <span>{{ filmeTituloConcatenado }}</span>
        <button class="btn btn-success float-right">Editar</button>
    </li>
</template>

<script>
export default {
    props:{
        filmeTitulo: {
            type: String,
            required: true,
            default: 'NÃO FOI INFORMADO UM VALOR',
            validator(valor) {
                return valor.includes('');
            }
        }
    },
    computed: {
        filmeTituloConcatenado() {
            return `Título: ${this.filmeTitulo}`;
        }
    }
}
</script>
