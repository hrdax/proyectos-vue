<template>
  <div class="ui card product">
    <div class="image">
        <img :src="API_URL + product.attributes.image.data.attributes.url" :alt="product.attributes.name">
    </div>
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

<style>

</style>