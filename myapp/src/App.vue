<template>
  <div id="app" class="container">
    <div class="jumbotron">
      <titulo :titulo="titulo"></titulo>
      <!-- nueva-tarea :tareas="tareas" v-on:incrementarContador="numTareas += $event"></nueva-tarea -->
      <nueva-tarea :tareas="tareas" :actualizarContador="actualizarContador"></nueva-tarea>
      <lista-tareas :tareas="tareas"></lista-tareas>
    </div>
  </div>
</template>

<script>
  import Titulo from './TituloComponent.vue'
  import NuevaTarea from './NuevaTareaComponent.vue'
  import ListaTareas from './ListaTareasComponent.vue'

  export default {
    components: {
      Titulo,
      NuevaTarea,
      ListaTareas
    },
    data () {
      return {
        titulo: 'Lista de tareas',
        // numTareas: 3,
        tareas: []
      };
    },
    methods: {
      actualizarContador() {
        this.numTareas++;
      }
    },
    created() {
      this.$http.get('tareas.json')
      .then(res => {
        return res.json();
      }).then(resJson => {
        for (let id in resJson) {
          let tarea = {
            id: id,
            texto: resJson[id].texto,
            terminada: resJson[id].terminada
          }
          this.tareas.push(tarea);
        }
      }).catch(e => {
        console.warn(e);
      });
    }
  }
</script>

<style>
  /** Inicia Area de tema "negro" */
  body {
      background-color: #353b44;
      color: white;
  }

  hr {
      border-color: red;
  }

  .jumbotron {
      background-color: #3d4553;
  }

  .list-group-item {
      background-color: #4e6181;
  }
  /** Fin Area de tema "negro" */
</style>
