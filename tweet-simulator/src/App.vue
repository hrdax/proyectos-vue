<template>
  <Menu :openCloseForm="openCloseForm" :showForm="showForm"/>
  <TweetForm :showForm="showForm" :reloadTweets="reloadTweets" />
  <TweetList :tweets="tweets" />
</template>

<script>
import { ref } from 'vue' 
import Menu from './components/Menu.vue'
import TweetForm from './components/TweetForm.vue'
import useFormTweet from './hooks/useFormTweet'
import TweetList from './components/TweetList.vue'
import { getTweetApi } from './api/tweet'

export default {
  name: 'App',
  components: {
    Menu,
    TweetForm,
    TweetList,
  },
  setup() {
    let tweets = ref(getTweetApi())

    const reloadTweets = () => {
      tweets.value = getTweetApi()
    }

    return {
      ...useFormTweet(),
      tweets,
      reloadTweets,
    }
  }
  
}
</script>

<style lang="scss">

</style>
