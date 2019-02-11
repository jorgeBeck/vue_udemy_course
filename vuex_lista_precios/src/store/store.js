import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    //
    state: {
        products: [
            { name: 'Plátano', price: 4 },
            { name: 'Estrellita', price: 35 },
            { name: 'Tortuga roja', price: 16 },
            { name: 'Tortuga verde', price: 7 }
        ],
        sdf: 123321
    },
    getters: {
        // El state es el mismo de arriba
        saleProducts: state => {
            var sale_products = state.products.map(product => {
                return {
                    name: '**' + product.name + '**',
                    price: product.price / 2
                }
            });
            return sale_products;
        }
    },
    // Llamado por COMMIT
    mutations: {
        reducePrice: (state, x_payload) => {
            state.products.forEach(product => {
                product.price -= x_payload;
            });
        }
    },
    // Llamado por DISPATCH
    actions: {
        reducePrice: (context_x, payload) => {
            setTimeout(() => {
                context_x.commit('reducePrice', payload);
            }, 500);
        },
        sumar: state => {
            //
            state.state.products.push({ name: 'Bala', price: 100 });
        }
    }
});