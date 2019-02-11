<template>
    <ul class="list-group">
        <li v-for="(tarea, i) of tareas" class="list-group-item" v-bind:key="{terminada: tarea.terminada}">
                {{ tarea.texto }}
                <span class="pull-right-ese">
                    <button type="button" 
                        class="btn btn-success"
                        @click="estado(i)">Ok</button>
                    <button type="button" 
                        class="btn btn-danger"
                        @click="borrarAlv(i)">Borrar alv</button>
                </span>
        </li>
    </ul>
</template>

<script>
    export default {
        props: ['tareas'],
        methods: {
            borrarAlv: function (index) {
                let id = this.tareas[index].id;
                this.tareas.splice(index, 1);
                this.$http.delete('tareas/' + id + '.json')
                .then(res => {
                    console.log(res);
                }).catch(e => {
                    console.warn(e);
                });
            },
            estado(index) {
                let terminada = this.tareas[index].terminada = !this.tareas[index].terminada;
                let id = this.tareas[index].id;
                this.$http.patch('tareas/' + id + '.json', {
                    terminada: terminada
                }).then(res => {
                    console.log(res);
                }).catch(e => {
                    console.warn(e);
                });
            }
        }
    }
</script>

<style>
    .pull-right-ese {
        float: right;
    }

    .terminada {
        color: #b9b9b9;
        text-decoration: line-through;
    }
</style>