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
        <div v-if="products === null " class="container">
          <span>Encendiendo servidor Por Favor Espere<ClipLoader></ClipLoader></span>
        </div>
      </div>
  </BasicLayout>
</template>

<script>
import {ref, onMounted, watch} from 'vue'
import BasicLayout from '../layouts/BasicLayout'
import { getProductsApi} from '../api/product'
import Product from '../components/Product.vue'
import ClipLoader from '../components/ClipLoader.vue'

export default {
  name: 'Home',
  components: {
    BasicLayout,
    Product,
    ClipLoader
  },
  setup() {
    let products = ref(null)

    onMounted (async () => {
      try {
        let response = await getProductsApi();
        products.value = response.data;
        
      } catch (e) {
        const intervalData = setInterval(async () => {
          let response = await getProductsApi();
          products.value = response.data;
          if (products.value != null){
            clearInterval(intervalData);
          }
        }, 15000);
      }
    })
    
    return {
      products,
    }
  }
}
</script>
