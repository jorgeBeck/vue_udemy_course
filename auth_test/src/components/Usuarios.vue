<template>
    <div>
        <h4>Usuarios</h4>
        <div style="width: 10%; margin: 0 auto;">
            <table border="1">
                <tr>
                    <th>Nombre</th>
                    <th>Edad</th>
                </tr>
                <tr v-for="(usuario, i) in usuarios" :key="i">
                    <td> {{ usuario.nombre }} </td>
                    <td> {{ usuario.edad }} </td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
export default {
  data() {
      return {
          usuarios: [
              {
                  nombre: "Julia",
                  edad: 35
              },
              {
                  nombre: "Alexa",
                  edad: 25
              }
          ]
      }
  }
}
</script>
