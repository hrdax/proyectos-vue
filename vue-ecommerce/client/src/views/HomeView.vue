<template>
  <div class="home">
    <BasicLayout> <h1>Home</h1> </BasicLayout>
  </div>
</template>

<script>
import {ref, onMounted} from 'vue'
import BasicLayout from '../layouts/BasicLayout'
import { getProductsApi} from '../api/product'

export default {
  name: 'Home',
  components: {
    BasicLayout,

  },
  setup() {
    let products = ref(null)

    onMounted (async () => {
      const response = await getProductsApi(3)
      products.value = response.data
      console.log(response.data)
    })

    return {
      products,
    }
  }
}
</script>
