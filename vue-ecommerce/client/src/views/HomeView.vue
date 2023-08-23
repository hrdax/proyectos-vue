<template>
  <BasicLayout>
      <h1>Productos</h1>
      <div class="ui grid">
        <div 
        class="sixten wide mobile eight wide tablet four wide computer column"
        v-for="product in products"
        :key="product.id"
        >
          <Product :product="product" />
        </div>
      </div>
  </BasicLayout>
</template>

<script>
import {ref, onMounted} from 'vue'
import BasicLayout from '../layouts/BasicLayout'
import { getProductsApi} from '../api/product'
import Product from '../components/Product.vue'

export default {
  name: 'Home',
  components: {
    BasicLayout,
    Product,
  },
  setup() {
    let products = ref(null)

    onMounted (async () => {
      const response = await getProductsApi()
      products.value = response.data
    })

    return {
      products,
    }
  }
}
</script>
