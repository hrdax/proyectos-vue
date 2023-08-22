<template>
    <BasicLayout>
        <h1>Register</h1>

        <router-link to="/login">
            Iniciar Sesión
        </router-link>
    </BasicLayout>
</template>

<script>
import BasicLayout from '../layouts/BasicLayout'

export default {
    name: 'Register',
    components: {
        BasicLayout,
    }
}
</script>

<style>

</style>