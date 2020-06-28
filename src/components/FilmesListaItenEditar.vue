<template>
    <div>
        <h2>Editar filme</h2>

        <div class="form-group">
            <label>Título:</label>
            <input                 
                type="text" 
                class="form-control" 
                placeholder="Insira o título"
                :value="filmeSelecionado.titulo"
                @input="filmeSelecionado = { propriedade: 'titulo', valor: $event.target.value}">
        </div>

        <div class="form-group">
            <label>Ano:</label>
            <input                 
                type="text" 
                class="form-control" 
                placeholder="Insira o ano"
                :value="filmeSelecionado.ano"
                @input="filmeSelecionado = { propriedade: 'ano', valor: $event.target.value}">
        </div>

        <button 
            class="btn btn-primary float-right"
            @click="editarFilme">Editar</button>
        
    </div>
</template>

<script>
import { eventBus } from './../main';
export default {

    props: {
        filme: {
            type: Object,
            required: true,
        }
    },
    data() {
        return {
            filmeLocal: this.filme
        }
    },
    computed: {
        filmeSelecionado: {
            set(dados) {
                this.filmeLocal = Object.assign(
                    {},
                    this.filmeLocal,
                    { [dados.propriedade]: dados.valor }
                )
            },
            get() {                
                // eslint-disable-next-line vue/no-side-effects-in-computed-properties
                return this.filmeLocal=this.filme              
            }
        }
    },
    methods: {
        editarFilme() {
            eventBus.atualizarFilme(this.filmeLocal);
        }
    },
}
</script>
