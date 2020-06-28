<template>
    <div>
        <h2>Editar filme</h2>

        <div class="form-group">
            <label>Título:</label>
            <input 
                :value="filme.titulo"
                type="text" 
                class="form-control" 
                placeholder="Insira o título">
        </div>

        <div class="form-group">
            <label>Ano:</label>
            <input 
                :value="filme.ano"
                type="text" 
                class="form-control" 
                placeholder="Insira o ano">
        </div>
        
    </div>
</template>

<script>
export default {
    props: {
        filme: {
            type: Object,
            required: true,
        }
    }
}
</script>
