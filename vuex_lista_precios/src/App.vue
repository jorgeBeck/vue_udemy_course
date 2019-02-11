<template>
    <div id="app">
        <button @click="sumar()">Boton chido</button>
        <product-list-one></product-list-one>
        <product-list-two></product-list-two>
    </div>
</template>

<script>
    import ProductListOne from './components/ProductListOne.vue';
    import ProductListTwo from './components/ProductListTwo.vue';
    import { mapActions } from 'vuex';

    export default {
        components: {
            'product-list-one':ProductListOne,
            'product-list-two':ProductListTwo
        },
        name: 'app',
        data () {
            return {
                
            }
        },
        methods: {
            ...mapActions([
                'sumar'
            ]),
            // sumar() {
            //     this.$store.state.products.push({ name: 'Bala', price: 100 });
            // }
        }
    }
</script>

<style>

</style>
