<template>
<!-- eslint-disable vue/no-multiple-template-root -->
  <div class="cart-dimmer" :class="{ open: showCart}" @click="closeCart"/>
  <div class="cart" :class="{ open: showCart }">
    <div>
        <CartHeader :closeCart="closeCart" />
        <CartBody :products="products" />
    </div>
  </div>
</template>

<script>
import { ref, computed, watchEffect, watch } from 'vue'
import { useStore } from 'vuex'
import CartHeader from './CartHeader.vue'
import { getProductsCartApi } from '../../api/cart'
import CartBody from './CartBody.vue'

export default {
 name: 'cart',
components: {
    CartHeader,
    CartBody,
},

 setup() {
    const store = useStore()
    const showCart = computed(() => store.state.showCart)
    let products = ref(null)

    const getProductsCart = async () => {
        const response = await getProductsCartApi()
        products.value = response
    }

    watchEffect(() => {
        showCart.value
        getProductsCart()
    })

    const closeCart = () => {
        store.commit('setShowCart', false)
    }

    return {
        showCart,
        closeCart,
        products,
    }
 }

}
</script>

<style lang="scss" scoped>
.cart-dimmer {
    opacity: 0;
    transition: opacity 0.5 ease;

    &.open {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #000;
        opacity: 0.7;
    }
}

.cart {
    position: fixed;
    right: 0;
    top: 0;
    width: 300px;
    height: 100vh;
    background-color: #fff;
    box-shadow: 0px 0px 26px 5px rgba(0,0,0,0.75);
    display: felx;
    flex-direction: column;
    justify-content: space-between;
    transition: transform 0.9s ease;
    transform: translateX(150%);

    &.open {
        transform: translateX(0);
    }
}
</style>