"use strict";

import InicioComponent from './components/Inicio.vue'
// import UsuariosComponent from './components/Usuarios.vue'
import UsuarioComponent from './components/Usuario.vue'

// Lazy loading
const UsuariosComponent = resolve => {
    require.ensure(['./components/Usuarios.vue'], () => {
        resolve(require('./components/Usuarios.vue'));
    })
}

export const routes = [
    {
        path: "",
        component: InicioComponent
    },
    {
        path: "/usuarios",
        component: UsuariosComponent,
        name: "usuarios"
        // children: [
        //     {
        //         path: ':id',
        //         name: 'usuario',
        //         component: UsuarioComponent
        //     }
        // ]
    },
    {
        path: '/usuarios/:id',
        name: 'usuario',
        component: UsuarioComponent
    },
    {
        path: '/users',
        redirect: '/usuarios'
    },
    // Default
    {
        path: '*',
        redirect: '/'
    }
];