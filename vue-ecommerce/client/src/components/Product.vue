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
    <div class="ui button primary">Comprar</div>
  </div>
</template>

<script>
import { API_URL } from '../utils/constants'

export default {
    name: 'Product',
    props: {
        product: Object,
    },
    setup(props) {
        console.log(props)
        return {
            API_URL,
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