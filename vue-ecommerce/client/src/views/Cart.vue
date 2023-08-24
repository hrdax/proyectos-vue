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
                    <i style="cursor: pointer" class="close icon" @click="deleteAllProductCart(product.data.id)"></i>
                </td>
            </tr>
            <tr>
                <td></td>
                <td>Total:</td>
                <td colspan="2">${{ getTotal() }}</td>
            </tr>
        </tbody>
    </table>

    <button class="ui button primary fluid" v-if="products" @click="createOrder">Pagar con Webpay</button>
    <h3 v-if="!products">No hay productos en el carrito</h3>
  </BasicLayout>
</template>

<script>
import { ref, watchEffect } from 'vue'
import jwtDecode from 'jwt-decode'
import BasicLayout from '../layouts/BasicLayout.vue'
import { getProductsCartApi, deleteAllProductCartApi } from '../api/cart.js'
import { createOrderApi } from '../api/order'
import { getTokenApi } from '../api/token'

export default {
 name: 'Cart',
 components: {
    BasicLayout,
 },
 setup() {
    let products = ref(null)
    let reloadCart = ref (false)

    watchEffect(async () => {
        reloadCart.value
        const response = await getProductsCartApi()
        products.value = response
    })

    const getTotal = () => {
        let totalTemp = 0

        products.value.forEach((product) => {
            totalTemp += product.data.attributes.price * product.quantity
        })

        return totalTemp
    }

    const deleteAllProductCart = async (idProduct) => {
        deleteAllProductCartApi(idProduct)
        reloadCart.value = !reloadCart.value
    }

    const createOrder = async () => {
        const token = getTokenApi()
        const { id } = jwtDecode(token)

        const data = {
            user: id,
            totalPayment: getTotal(),
            // data: products.value,
        }
        try {
            const response = await createOrderApi(data)
            
        } catch (error) {
            console.log(error)
        }
    }

    return {
        products,
        getTotal,
        deleteAllProductCart,
        createOrder,
    }
 }
}
</script>

<style>

</style>