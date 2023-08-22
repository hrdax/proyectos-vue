<template>
    <BasicLayout>
        <div class="login">
            <h2>Iniciar Sesión</h2>
            <form class="ui form" @submit.prevent="login">
                <div class="field">
                    <input 
                    type="text" 
                    placeholder="Nombre de usuario" 
                    v-model="formData.identifier"
                    :class="{ error: formError.identifier }"
                    />
                </div>
                <div class="field">
                    <input 
                    type="password" 
                    placeholder="Contraseña" 
                    v-model="formData.password"
                    :class="{ error: formError.password }"
                    />
                </div>
                <button type="submit" class="ui button fluid primary" :class="{ loading }">
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
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import * as Yup from 'yup'
import BasicLayout from '../layouts/BasicLayout'
import { setTokenApi } from '../api/token'
import { loginApi } from '../api/user'
import { getTokenApi } from '../api/token'

export default {
    name: 'Login',
    components: {
        BasicLayout,
    },
    setup() {
        let formData = ref({})
        let formError = ref({})
        let loading = ref(false)
        const router = useRouter()
        const token = getTokenApi()

        onMounted(() => {
            if (token) router.push('/')
        })

        const schemaForm = Yup.object().shape({
            identifier: Yup.string().required(true),
            password: Yup.string().required(true),
        })

        const login = async () => {
            formError.value = {}
            loading.value = true
            console.log(formData.value)

            try {
                await schemaForm.validate(formData.value, {abortEarly: false,})
                
                try{
                    const response = await loginApi(formData.value)
                    if (!response?.jwt) throw 'Credenciales incorrectas'
                    setTokenApi(response.jwt)
                    router.push('/')
                } catch (error) {
                    console.log(error)
                }
            } catch (error) {
                error.inner.forEach((err) => {
                    formError.value[err.path] = err.message
                })
                loading.value = false
            }

            loading.value = false
        }

        return {
            formData,
            formError,
            loading,
            login,
        }
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