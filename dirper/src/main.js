import Vue from 'vue'
import App from './App.vue'

// Crear filtros globales
Vue.filter('suspensivos', function(texto) {
  return texto.substring(0, 10) + ' ...';
});

// Como crear directivas
Vue.directive('decorar', {
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
});

new Vue({
  el: '#app',
  render: h => h(App)
})
