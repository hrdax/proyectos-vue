<template>
<!-- eslint-disable vue/no-v-for-template-key -->
    <div class="ui secondary menu">
        <div class="ui container">
            <div class="left menu">
                <router-link class="item" to="/">
                    <img 
                    class="ui small image" 
                    src="../assets/logo.png" 
                    alt="Ecommerce" 
                    />
                    <template v-for="category in categories" :key="category.id">
                        <router-link class="item" :to="category.attributes.slug">
                            {{ category.attributes.title}}
                        </router-link>
                    </template>
                </router-link>
            </div>
            <div class="right menu">
                <router-link class="item" to="/login" v-if="!token">
                    Iniciar sesión
                </router-link>
                <template v-if="token">
                    <router-link class="item" to="/orders">
                        Mis pedidos
                    </router-link>
                    <span class="ui item cart" @click="openCart">
                        <i class="uil uil-shopping-cart-alt"></i>
                    </span>
                    <span class="ui item logout" @click="logout">
                        <i class="uil uil-signout"></i>
                    </span>
                </template>
            </div>
        </div>
    </div>
</template>

<script>
import { getTokenApi } from '../api/token';
import { deleteTokenApi } from '../api/token';
import { ref, onMounted } from 'vue';
import { getCategoriesApi } from '../api/category';
import { useStore } from 'vuex';

export default {
    name: 'Menu',
    
    setup() {
        const store = useStore()
        let categories = ref(null)
        const token = getTokenApi()

        onMounted (async () => {
            const response = await getCategoriesApi()
            categories.value = response.data

        })

        const logout = () => {
            deleteTokenApi();
            location.replace('/');
        }

        const openCart = () => {
            store.commit('setShowCart', true)
        }

        return { 
            token,
            logout,
            categories,
            openCart,
        }
    }
}

</script>

<style lang="scss" scoped>
.ui.menu.secondary {
    background-color: #16202b;

    .item {
        color: #fff;
        &:hover {
            color: #1fa1f1;
        }
    }
    
    .menu.left {
        width: 50%;
        .ui.image {
            width: 40px;
        }
    }

    .menu.right {
        width: 50%;
        justify-content: flex-end;

        .layout,
        .cart {
            &:hover {
                cursor: pointer;
            }
        }
        .logout {
            &:hover {
                cursor: pointer;
            }
        }
    }
    
}
</style>