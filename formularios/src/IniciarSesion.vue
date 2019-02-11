<template>
  <div class="container" id="app">
    <div class="jumbotron">

      <mostrar-formulario >
        <div slot="titulo">
          <h3>* Iniciar sesión *</h3>
        </div>
        <div slot="subtitulo">
          <h5>Escriba sus datos</h5>
        </div>

        <div slot="clave">
            <div class="form-group">
                <label for="clave">Contraseña</label>
                <input autocomplete="new-password" type="password" class="form-control" 
                        id="clave" placeholder="Escribe tu contraseña">
            </div>
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
    destroyed(){
        console.log('destruido');
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
