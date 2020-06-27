<template>
    <div>
        <h2>Clicado {{ contador }} vezeses </h2>
        <button @click="incrementar">Incrementar</button>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            contador: 0,
        }
    },
    methods: {
        incrementar: function() {
            this.contador ++;
        }
    }
}
</script>