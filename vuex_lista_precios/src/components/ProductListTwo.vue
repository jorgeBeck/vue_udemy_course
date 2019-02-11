<template>
    <div id="product-list-two">
        <h2>Product list two</h2>
        <ul>
            <li v-for="(product, i) in products" :key="i">
                <span class="name">{{product.name}}</span>
                <span class="price">${{product.price}}</span>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        computed: {
            // products() {
            //     return this.$store.state.products;
            // }
        },
        data() {
            return {
                products: this.$store.state.products
            }
        }
    }
</script>

<style scoped>

</style>
