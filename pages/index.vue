<template>
  <main class="bg-white h-screen">
    <h1 class="sr-only">
      NewsList
    </h1>
    <news-list :data="lists" />
  </main>
</template>

<script lang="ts">
import Vue from 'vue'
import axios from 'axios'
import { Context } from '@nuxt/types'
import { TOKEN } from '@/static/config'
import NewsList from '@/components/list/NewsList.vue'

interface AsyncData {
  [lists: string]: { data: { api: Array<Object> } }
}
export default Vue.extend({
  components: {
    NewsList
  },
  async asyncData (context: Context): Promise<AsyncData | undefined> {
    try {
      const { data } = await axios.get<AsyncData>(TOKEN)
      return {
        lists: data.api
      }
    } catch (e) {
      const { error } = context
      error({ statusCode: 404, message: 'Connection Error' })
    }
  }
})
</script>
