<template>
  <BasicLayout>
    <h1>Carrito</h1>
    <table class="ui celled table" v-if="products">
        <thead>
            <tr>
                <th>Producto</th>
                <th>Cantidad</th>
                <th>Precio</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="product in products" :key="product.data.id">
                <td>{{product.data.attributes.name}}</td>
                <td>{{product.quantity}}</td>
                <td>${{product.data.attributes.price}}</td>
                <td style="text-align:center">
                    <i class="close icon"></i>
                </td>
            </tr>
            <tr>
                <td></td>
                <td>Total:</td>
                <td colspan="2">...</td>
            </tr>
        </tbody>
    </table>

    <button class="ui button primary fluid" v-if="products">Pagar con Webpay</button>
    <h3 v-if="!products">No hay productos en el carrito</h3>
  </BasicLayout>
</template>

<script>
import { ref, onMounted } from 'vue'
import BasicLayout from '../layouts/BasicLayout.vue'
import { getProductsCartApi } from '../api/cart.js'

export default {
 name: 'Cart',
 components: {
    BasicLayout,
 },
 setup() {
    let products = ref(null)

    onMounted(async () => {
        const response = await getProductsCartApi()
        products.value = response
    })

    return {
        products,
    }
 }
}
</script>

<style>

</style>