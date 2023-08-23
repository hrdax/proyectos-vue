<template>
  <p>{{product.attributes.name}}</p>
</template>

<script>
export default {
    name: 'Product',
    props: {
        product: Object,
    },
    components: {
        
    },
    setup() {
        return {
            
        }
    }
}
</script>

<style>

</style>