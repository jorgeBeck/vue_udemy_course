<template>
  <div class="container" id="app">
    <div class="jumbotron">

      <mostrar-formulario >
        <div slot="titulo">
          <h3>Cambiar contraseña</h3>
        </div>
        <div slot="subtitulo">
          <h5>Enviaremos su clave al correo</h5>
        </div>
      </mostrar-formulario>

    </div>
  </div>
</template>

<script>
  import MostrarFormulario from './MostrarFormulario.vue'
  export default {
    components: {
      MostrarFormulario: MostrarFormulario
    },
    name: 'app',
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
