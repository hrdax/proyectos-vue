<template>
  <Menu :openCloseForm="openCloseForm" :showForm="showForm"/>
  <TweetForm :showForm="showForm" :openCloseForm="openCloseForm" :reloadTweets="reloadTweets" />
  <TweetList :tweets="tweets" :reloadTweets="reloadTweets" />
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
    let tweets = ref(getTweetApi().reverse())

    const reloadTweets = () => {
      tweets.value = getTweetApi().reverse()
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
