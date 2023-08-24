<template>
  <BasicLayout>
    <h1>Mis pedidos</h1>
  </BasicLayout>
</template>

<script>
import BasicLayout from '../layouts/BasicLayout.vue'
import jwtDecode from 'jwt-decode'
import { ref, onMounted } from 'vue'
import { getOrdersApi } from '../api/order'
import { getTokenApi } from '../api/token'
import jwtDecode from 'jwt-decode'

export default {
 name: 'Orders',
    components: {
        BasicLayout,
    },
  setup() {
    let orders = ref(null)
    
    onMounted(async () => {
        const token = getTokenApi()
        const { id } = jwtDecode(token)
        const response = await getOrdersApi(id)
        orders.value = response
    })



    return {
        orders,
    }
  }
}
</script>

<style>

</style>