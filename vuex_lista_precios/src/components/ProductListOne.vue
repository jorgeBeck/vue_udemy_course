<template>
    <div id="product-list-one">
        <h2>Product list one</h2>
        <button @click="reducePrice(2)">Bajar los precios</button>
        <ul>
            <li v-for="(product, i) in saleProducts" :key="i">
                <span class="name">{{product.name}}</span>
                <span class="price">${{product.price}}</span>
            </li>
        </ul>
        {{ popo }}
    </div>
</template>

<script>
    import { mapActions } from 'vuex';
    import { mapGetters } from 'vuex';

    export default {
        computed: {
            products() {
                // return this.$store.state.products;
            },
            popo() {
                return 'caca';
            },
            // saleProducts() {
            //     return this.$store.getters.saleProducts;
            // },
            // Llamar al map getters es lo mismo que registrar el metodo con el mismo
            // nombre y llamar al getter que tambien tiene el mismo nombre
            ...mapGetters([
                'saleProducts'
            ])
        },
        methods: {
            // reducePrice(amount) {
            //     // Hablarle directamente a la mutacion (SYNC)
            //     // this.$store.commit('reducePrice');

            //     // Hablarle a las acciones (ASYNC)
            //     this.$store.dispatch('reducePrice', amount);
            // }
            // Llamar al map actions es lo mismo que registrar el metodo con el mismo
            // nombre y llamar al action que tambien tiene el mismo nombre
            ...mapActions([
                'reducePrice'
            ]),
        }
    }
</script>

<style>

</style>
