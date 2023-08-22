<template>
    <BasicLayout>
        <div class="register">  
            <h2>Registro de usuario</h2>
            <form class="ui form">
                <div class="field">
                    <input type="text" placeholder="Nombre de usuario" />
                </div>
                <div class="field">
                    <input type="text" placeholder="Correo electrónico" />
                </div>
                <div class="field">
                    <input type="text" placeholder="Contraseña" />
                </div>

                <button type="submit" class="ui button fluid primary">
                    Crear usuario
                </button>
            </form>
        </div>
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