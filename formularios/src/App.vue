<template>
  <div class="container" id="app">
    <div class="jumbotron">

      <!-- <mostrar-formulario >
        <div slot="titulo">
          <h3>Cambiar contraseña</h3>
        </div>
        <div slot="subtitulo">
          <h5>Sub title</h5>
        </div>
      </mostrar-formulario> -->

      <button class="btn btn-primary" 
            @click=" componenteSeleccionado = 'iniciarSesion' ">
        Iniciar sesión
      </button>
      <button class="btn btn-primary" 
            @click=" componenteSeleccionado = 'cambiarClave' ">
        Cambiar clave
      </button>
      
    <keep-alive>
      <component v-bind:is=componenteSeleccionado></component>
    </keep-alive>

    </div>
  </div>
</template>

<script>
  import MostrarFormulario from './MostrarFormulario.vue'
  import IniciarSesion from './IniciarSesion.vue'
  import CambiarClave from './CambiarClave.vue'
  export default {
    components: {
      MostrarFormulario: MostrarFormulario,
      IniciarSesion: IniciarSesion,
      CambiarClave: CambiarClave,
    },
    name: 'app',
    data() {
      return{
        componenteSeleccionado: 'iniciarSesion'
      };
    },
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
