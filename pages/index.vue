<template>
  <main>
    <news-list />
  </main>
</template>

<script>
import HeaderComponent from '~/components/Header.vue'
import NewsList from '~/components/NewsList.vue'

export default {
  components: {
    HeaderComponent,
    NewsList
  }
}
</script>

<style>
main {
  max-width: 1200px;
  margin: auto;
  height: 100vh;
}
</style>
