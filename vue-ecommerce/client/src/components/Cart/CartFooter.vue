<template>
  <div class="cart-footer">
    <p>Total: ${{ total }} CLP</p>

    <router-link to="/cart">
        <button class="ui button primary fluid btn-buy" @click="closeCart">Finalizar Compra</button>
    </router-link>
  </div>
</template>

<script>
import {ref, watchEffect} from 'vue'

export default {
 name: 'CartFooter',
 props: {
    products: Array,
    closeCart: Function,
 },
 setup(props) {
    let total = ref(0)

    watchEffect(() => {
        props.products

        let totalTemp = 0
        props.products.forEach((product) => {
            totalTemp += product.data.attributes.price * product.quantity
        })
        total.value = totalTemp
    })

    return {
        total,
    }
 }
}
</script>

<style lang="scss" scoped>
.cart-footer {
    padding: 10px;
}
</style>