<template>
  <main class="archive-main">
    <h1 class="text-3xl font-bold mt-6 mb-3">{{ $route.params.id }}</h1>
    <nav class="my-3">
      <nuxt-link class="underline" to="/archive">
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
