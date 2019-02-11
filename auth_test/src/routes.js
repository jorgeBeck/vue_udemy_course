"use strict";

import IndexComponent from './components/Index.vue'
import UsuariosComponent from './components/Usuarios.vue'
import LoginComponent from './components/Login.vue'

// Lazy loading
// const UsuariosComponent = resolve => {
//     require.ensure(['./components/Usuarios.vue'], () => {
//         resolve(require('./components/Usuarios.vue'));
//     })
// }
export const routes = [
    {
        path: "",
        component: IndexComponent
    }, {
        path: "/usuarios",
        component: UsuariosComponent,
        meta: { auth: true }
    }, {
        path: "/login",
        component: LoginComponent,
        meta: { auth: false }
    },
];