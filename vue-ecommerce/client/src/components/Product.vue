<template>
  <div class="ui card product">
    <div class="image">
        <img 
        :src="API_URL + product.attributes.image.data.attributes.url" 
        :alt="product.attributes.name" 
        >
    </div>
    <div class="content">
        <div class="header">{{ product.attributes.name }}</div>
        <div class="description"> ${{ product.attributes.price }}</div>
    </div>
    <div class="ui button primary" @click="addProductCart(product.id)" v-if="token">Añadir al Carrito</div>
    <div class="ui button primary" @click="iniciarsesion()" v-if="!token">Iniciar Sesión Para Comprar</div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
import { API_URL } from '../utils/constants'
import { addProductCartApi } from '../api/cart'
import { getTokenApi } from '../api/token'

export default {
    name: 'Product',
    props: {
        product: Object,
    },
    setup(props) {
        const token = getTokenApi()
        const router = useRouter()

        const addProductCart = (idProduct) => {
            addProductCartApi(idProduct)
        }

        const iniciarsesion = () => {
            router.push('/login')
        }

        return {
            API_URL,
            addProductCart,
            token,
            iniciarsesion,
        }
    }
}
</script>

<style lang="scss" scoped>
.product {
    &:hover {
        .ui.button {
            min-height: 36px;
        }
    }
    
    .ui.button {
        max-height: 0px;
        min-height: 0px;
        overflow: hidden;
        padding: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: min-height 0.3s ease;
    }
}

</style>