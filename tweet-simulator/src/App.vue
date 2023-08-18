<template>
  <Menu :openCloseForm="openCloseForm" :showForm="showForm"/>
  <TweetForm :showForm="showForm" />
  <TweetList :tweets="tweets" />
</template>

<script>
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
    let tweets = getTweetApi()

    return {
      ...useFormTweet(),
      tweets,
    }
  }
  
}
</script>

<style lang="scss">

</style>
