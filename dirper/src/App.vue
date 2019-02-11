<template>
  <div id="app" class="container">
    <div class="jumbotron">
      <span v-decorar.italico.negrilla=" {familia: letra, color:'red'} ">
        {{ mensaje | mayusculas }}
      </span>
      <hr>
      <span v-decorar.italico.negrilla=" {familia: letra, color:'red'} ">
        {{ mensaje }}
      </span>
      <hr>
      <span v-decorar.italico.negrilla=" {familia: letra, color:'red'} ">
        <!-- {{ mensaje | suspensivos}} -->
        {{ mensaje | suspensivos | mayusculas}}
      </span>
      <hr>
      <span v-decorar.italico.negrilla=" {familia: letra, color:'red'} ">
        <!-- {{ mensaje | suspensivos}} -->
        {{ temperatura | aFahrenheit }}
      </span>
    </div>
    <!-- <input type="text" v-model="mensaje"> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      letra: 'helvetica',
      mensaje: 'Que onda Beck :D',
      temperatura: 30
    };
  },
  filters: {
    mayusculas(txt) {
      return txt.toUpperCase();
    },
    aFahrenheit(temp) {
      return (9/5 * temp) + 32 + '° F';
    }
  },
  // Directivas locales
  directives: {
    'decorar-local': {
      bind(el, binding, vnode) {
        el.style.fontFamily = binding.value.familia;
        el.style.color = binding.value.color;

        // Argumentos :
        if (binding.arg == 'grande') {
          el.style.fontSize = '40px';
        }
        if (binding.arg == 'peque') {
          el.style.fontSize = '10px';
        }

        // Modificadores .
        if (binding.modifiers['negrilla']) {
          el.style.fontWeight = 'bold';
        }
        if (binding.modifiers['italico']) {
          el.style.fontStyle = 'italic';
        }

      }
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
