"use strict";

var app = new Vue({
    el: '#vm',
    data: {
        mensaje: 'Que rollo Beck',
        texto: '<b>Bienvenido al texto</b>',
        src: 'https://vuejs.org/images/logo.png',
        primero: 0,
        segundo: 0,
        tercero: 0,
        cuarto: 0,
        mostrar: false,
        // -----
        paises: [
            {nombre: "México"},
            {nombre: "España"},
            {nombre: "Colombia"}
        ],
        empleado: {
            nombre: 'Forge',
            edad: '210 años',
            nacionalidad: 'Mexicano',
        },
        // -----
        contador: 0,
        // -----
        x: 0,
        y: 0,
    },
    computed: {
        suma: function() {
            return this.primero + this.segundo + this.tercero + this.cuarto;
        }
    },
    methods: {
        mostrarMensaje: function() {
            return this.mensaje;
        },
        destruir: function() {
            this.$destroy();
        },
        // -----
        sumarUno: function() {
            this.contador += 1;
        },
        restarUno: function() {
            this.contador -= 1;
        },
        alerta: function(mensaje) {
            alert(mensaje);
        },
        ubicacion: function(event) {
            this.x = event.clientX;
            this.y = event.clientY;
            this.contador++;
        },
        sumar: function() {
            this.contador++;
        }
    },
    // Eventos nativos de componentes
    beforeCreate: function() {
        console.log('FN beforeCreate');
    },
    created: function() {
        console.log('FN created');
    },
    beforeMount: function() {
        console.log('FN beforeMount');
    },
    mounted: function() {
        console.log('FN mounted');
    },
    beforeUpdate: function() {
        console.log('FN beforeUpdate');
    },
    updated: function() {
        console.log('FN updated');
    },
    beforeDestroy: function() {
        console.log('FN beforeDestroy');
    },
    destroyed: function() {
        console.log('FN destroyed');
    },
});