"use strict";

var data = {
    tareas: [
        {
            texto: 'Aprender Vue.js',
            terminada: false
        },
        {
            texto: 'Aprender Angular 2',
            terminada: true
        },
        {
            texto: 'Aprender Ionic 2',
            terminada: false
        },
    ],
    nuevaTarea: ''
};

Vue.component('titulo', {
    template: '<h2>{{ titulo }}</h2>',
    data: function() {
        return { titulo: 'Lista de tareas' };
    }
});

Vue.component('nueva-tarea', {
    template: `<div class="input-group">
                    <input type="text" 
                        placeholder="Escribe una nueva tarea" 
                        v-model="nuevaTarea" 
                        @keyup.enter="agregarTarea()"
                        class="form-control">
                    <span class="input-group-btn">
                        <button v-on:click="agregarTarea()" class="btn btn-primary">Guardar tarea</button>
                    </span>
                </div>`,
    data: function() {
        return data;
    },
    methods: {
        agregarTarea: function () {
            var texto = this.nuevaTarea.trim();
            if (texto) {
                this.tareas.push({
                    texto: texto,
                    terminada: false
                });
                this.nuevaTarea = '';
            }
        },
        
    }
});

Vue.component('lista-de-tareas', {
    template: `<ul class="list-group">
                    <li v-for="(tarea, i) of tareas" class="list-group-item" v-bind:class="{terminada: tarea.terminada}">
                            {{ tarea.texto }}
                            <span class="pull-right-ese">
                                <button type="button" 
                                    class="btn btn-success"
                                    @click="tarea.terminada = !tarea.terminada">Ok</button>
                                <button type="button" 
                                    class="btn btn-danger"
                                    @click="borrarAlv(i)">Borrar alv</button>
                            </span>
                    </li>
                </ul>`,
    data: function() {
        return data;
    },
    methods: {
        borrarAlv: function (index) {
            this.tareas.splice(index, 1);
        }
    }
});

var app = new Vue({
    el: '#vm',
    data: data,
    methods: {
        //
    }
})