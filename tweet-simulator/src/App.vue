<template>
  <Menu :openCloseForm="openCloseForm" :showForm="showForm"/>
  <TweetForm :showForm="showForm" />
</template>

<script>
import Menu from './components/Menu.vue'
import TweetForm from './components/TweetForm.vue'
import useFormTweet from './hooks/useFormTweet'

export default {
  name: 'App',
  components: {
    Menu,
    TweetForm,
  },
  setup() {
    return {
      ...useFormTweet(),
    }
  }
  
}
</script>

<style lang="scss">

</style>
