<template>
  <main class="bg-white h-screen">
    <h1 class="sr-only">
      NewsList
    </h1>
    <news-list :lists="lists" />
  </main>
</template>

<script lang="ts">
import Vue from 'vue'
import axios from 'axios'
import { WebClient } from '@slack/web-api'
import { Context } from '@nuxt/types'
import NewsList from '@/components/list/NewsList.vue'

export interface AsyncData {
  [lists: string]: any
}

export default Vue.extend({
  components: {
    NewsList
  },
  async asyncData (context: Context): Promise<AsyncData | undefined> {
    try {
      if (process.env.NODE_ENV === 'development') {
        const { data } = await axios.get<AsyncData>('/api')
        return {
          lists: data.api
        }
      } else {
        const token = process.env.SLACK_TOKEN
        const web = new WebClient(token)
        const messages = await web.search.messages({
          query: 'Reading',
          sort: 'timestamp',
          sort_dir: 'desc',
          count: 100
        }).then((res) => {
          return res.messages
        })
        return {
          lists: messages?.matches
        }
      }
    } catch (e) {
      const { error } = context
      error({ statusCode: 404, message: 'Connection Error' })
    }
  }
})
</script>
