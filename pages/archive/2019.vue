<template>
  <main>
    <h1>2019</h1>
    <nav>
      <a href="/archive">/archive</a>
    </nav>
    <archive-list :data="lists" />
  </main>
</template>

<script>
import JSON from '../../static/reading2019.json'
import ArchiveList from '../../components/ArchiveList.vue'

export default {
  components: {
    ArchiveList
  },
  data () {
    return {
      lists: JSON
    }
  }
}
</script>

<style lang="scss">
@import "yama-normalize";
</style>
