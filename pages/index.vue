<template>
  <main>
    <news-list />
  </main>
</template>

<script>
import NewsList from '~/components/NewsList.vue'

export default {
  components: {
    NewsList
  }
}
</script>

<style>
main {
  height: 100vh;
}
</style>
