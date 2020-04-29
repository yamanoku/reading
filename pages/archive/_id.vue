<template>
  <main>
    <h1>{{ $route.params.id }}</h1>
    <nav>
      <a href="/archive">/archive</a>
    </nav>
    <archive-list :data="lists" />
  </main>
</template>

<script>
import ArchiveList from '../../components/ArchiveList.vue'

export default {
  components: {
    ArchiveList
  },
  data () {
    return {
      lists: require(`../../static/reading${this.$route.params.id}.json`)
    }
  }
}
</script>

<style scoped>
main {
  width: calc(100% - 2rem);
  margin: 0 2.5rem 0 6.5rem;
}
</style>
