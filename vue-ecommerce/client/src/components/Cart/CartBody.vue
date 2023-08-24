<template>
  <div class="cart-body">
    <h2>Productos</h2>
    <p>{{ products }}</p>
  </div>
</template>

<script>
export default {
 name: 'CartBody',
 props: {
    products: Array,
 },
 setup() {

    return {
    }
 }

}
</script>

<style>

</style>