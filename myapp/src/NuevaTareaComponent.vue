<template>
    <div class="input-group">
        <input type="text" 
            placeholder="Escribe una nueva tarea" 
            v-model="nuevaTarea" 
            @keyup.enter="agregarTarea()"
            class="form-control">
        <span class="input-group-btn">
            <button v-on:click="agregarTarea()" class="btn btn-primary">Guardar tarea</button>
        </span>
    </div>
</template>

<script>
    import { bus } from './main.js'

    export default {
        data() {
            return {
                nuevaTarea: ''
            };
        },
        props: ['tareas', 'actualizarContador'],
        methods: {
            agregarTarea() {
                var texto = this.nuevaTarea.trim();
                if (texto) {
                    this.tareas.push({
                        texto: texto,
                        terminada: false
                    });
                    // this.$emit('incrementarContador', 1);
                    // this.actualizarContador();
                    bus.actualizarContador(this.tareas.length);
                    this.nuevaTarea = '';
                    this.$http.post('tareas.json', {
                        texto: texto,
                        terminada: false
                    }).then(res => {
                        console.log(res);
                    }).catch(e => {
                        console.warn(e);
                    });
                }
            }
        },
        created() {
            bus.actualizarContador(this.tareas.length);
        }
    };
</script>