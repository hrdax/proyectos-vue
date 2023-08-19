<template>
    <div class="container">
        <h1 class="text-center mb-4">Lista de Tweets</h1>
        <div class="tweet" v-for="tweet in tweets" :key="tweet.id">
            <p class="tweet__title">{{ tweet.username }}</p>
            <p class="tweet__text">{{ tweet.tweet }}</p>
            <span>{{ formatDate(tweet.createdAt) }}</span>
        </div>
    </div>

    
</template>

<script>
import moment from 'moment'
import 'moment/locale/es'

export default {
    props: {
        tweets: Array,
    },
    setup() {
        const formatDate = (date) => {
            return moment(date).fromNow()
        }
        return {
            formatDate,
        }
    }
}
</script>

<style lang="scss" scoped>
.tweet {
    position: relative;
    border: 1px solid #ccc;
    padding: 20px;
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
        margin: 0;
    }

    &__title {
        position: absolute;
        top: -12px;
        left: 10px;
        background-color: #fff;
        padding: 0 10px;
        font-weight: bold;
    }

    &__text {
        color: grey;
    }

    span {
        position: absolute;
        right: 10px;
        bottom: -9px;
        font-size: 12px;
        color: grey;
        background-color: #fff;
        padding: 0 20px;
        border: 1px solid #ccc;
    }
}

</style>