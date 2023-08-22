<template>
    <BasicLayout>
        <div class="login">
            <h2>Iniciar Sesión</h2>
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

<style lang="scss" scoped>
.login {
    text-align: center;
    > h2 {
        margin: 50px 0 30px 0;
    }

    .ui.form {
        max-width: 300px !important;
        margin: 0 auto;
        margin-bottom: 10px;

        input.error {
            border-color: #faa;
            background-color: #ffeded;
        }
    }
}
</style>