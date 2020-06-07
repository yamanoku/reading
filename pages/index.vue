<template>
  <main>
    <news-list :data="lists" />
  </main>
</template>

<script lang="ts">
import Vue from 'vue'
import axios from 'axios'
import { TOKEN } from '../static/config'
import NewsList from '../components/NewsList.vue'

interface AsyncData {
  [lists: string]: { data: { api: Array<Object> } }
}
export default Vue.extend({
  components: {
    NewsList
  },
  async asyncData (error: any): Promise<AsyncData | undefined> {
    try {
      const { data } = await axios.get<AsyncData>(TOKEN)
      return {
        lists: data.api
      }
    } catch (e) {
      error({ statusCode: 404, message: 'Connection Error' })
    }
  }
})
</script>

<style>
main {
  height: 100vh;
}
</style>
