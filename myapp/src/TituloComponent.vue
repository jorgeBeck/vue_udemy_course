<template>
    <div>
        <h2>{{ tituloMayus() }}</h2>
        <h5>Tareas a hacer: {{ numTareas }}</h5>
    </div>
</template>

<script>
    import { bus } from './main.js'

    export default {
        props: {
            titulo: {
                type: String,
                default: 'tars'
            }, 
            // numTareas: {
            //     type: Number
            // }
        },
        methods: {
            tituloMayus() {
                return this.titulo.toUpperCase();
            }
        },
        created(){
            bus.$on('actualizarContador', (numTareas) => {
                this.numTareas = this.tareas.length
            });
        },
        data () {
            return {
                numTareas: 0
            };
        }
    }
</script>