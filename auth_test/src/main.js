import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import { routes } from './routes.js'
import { Bus } from './bus.js'

Bus.is_logged = false;

// Iniciando las routes
Vue.use(VueRouter);
Vue.use(VueResource);

// Configurando el resource
Vue.http.options.root = 'https://release.skynet.lol/test';
Vue.http.options.emulateJSON = true;

const router = new VueRouter({
    routes: routes,
    mode: 'history'
})

router.afterEach((to, from, next) => { });

router.beforeEach((to, from, next) => {
    // Checando si la ruta tiene auth en metadata
    if (to.meta.auth) {
        // Checando si hay token para enviarlo a revision
        if (localStorage._token) {
            // Ajax para checarlo
            Vue.http.post('decode_jwt.php', { token: localStorage._token })
                .then(res => {
                    return res.json();
                }).then(res => {
                    if (res.decoded === false) {
                        Bus.$emit('is_logged_event', false);
                        return next('/login');
                    } else {
                        Bus.$emit('is_logged_event', true);
                        return next();
                    }
                }).catch(e => {
                    console.warn(e);
                });
        } else {
            return next('/login');
        }
    } else {
        return next();
    }
});

export var vue = new Vue({
    el: '#app',
    router: router,
    render: h => h(App)
})

vue.david = 'e';
