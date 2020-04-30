<template>
  <main>
    <h1>{{ $route.params.id }}</h1>
    <nav>
      <nuxt-link to="/archive">
        /archive
      </nuxt-link>
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
  max-width: 48rem;
  margin: 0 var(--rhythm) 0 calc(var(--rhythm) * 3);
}
</style>
