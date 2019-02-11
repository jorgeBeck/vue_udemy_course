<template>
  <form class="form">

      <slot name="titulo"></slot>
      <slot name="subtitulo"></slot>
      <!-- <slot name="elementos"></slot>
      <slot name="boton"></slot> -->

      <div class="form-group">
          <label for="correo">Correo electrónico</label>
          <input autocomplete="new-password" type="email" class="form-control" 
                id="correo" placeholder="correo@sitio.com">
      </div>
      
        <slot name="clave"></slot>

      <button class="btn btn-primary">Iniciar sesión</button>
  </form>
</template>

<script>
    
    export default {
        // props:['titulo']
    }
</script>
