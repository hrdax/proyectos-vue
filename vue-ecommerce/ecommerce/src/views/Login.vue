<template>
    <BasicLayout>
        <h1>Iniciar Sesión</h1>
        <div class="login">
            <form class="ui form">
                <div class="field">
                    <input type="text" placeholder="Nombre de usuario" />
                </div>
                <div class="field">
                    <input type="password" placeholder="Contraseña" />
                </div>
                <button type="submit" class="ui button fluid primary">
                    Iniciar Sesión
                </button>
            </form>
            <router-link to="/register">
                Crear Usuario
            </router-link>
        </div>

    </BasicLayout>
</template>

<script>
import BasicLayout from '../layouts/BasicLayout'

export default {
    name: 'Login',
    components: {
        BasicLayout,
    }
}
</script>

<style>

</style>