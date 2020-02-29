<template>
  <main>
    <h1>2018</h1>
    <nav>
      <a href="/archive">/archive</a>
    </nav>
    <ul>
      <template v-for="list in lists">
        <li v-if="list.attachments" :key="list.iid">
          <span
            v-if="list.attachments[0].ts"
            class="off-screen"
          >{{ unix2ymd (list.attachments[0].ts) }}</span>
          <!-- title not response -->
          <a
            v-if="!list.attachments[0].title"
            :href="urlRender(list.attachments[0].text)"
            target="_blank"
            rel="noopener"
          >
            {{ textRender(list.attachments[0].text) }}
          </a>
          <!-- title response -->
          <a
            v-else
            :href="list.attachments[0].title_link"
            target="_blank"
            rel="noopener"
          >
            {{ list.attachments[0].title }}
          </a>
        </li>
      </template>
    </ul>
  </main>
</template>

<script>
import JSON from '../../static/reading2018.json'

export default {
  data () {
    return {
      lists: JSON
    }
  },
  methods: {
    textRender (text) {
      if (text.includes('Reading... ')) {
        const mystr = text.split('Reading... ').join('')
        return mystr.replace(/^<[^>]h>|<[^>]*>$/g, '')
      } else if (text.includes('Reading… ')) {
        const mystr = text.split('Reading… ').join('')
        return mystr.replace(/^<[^>]h>|<[^>]*>$/g, '')
      }
    },
    urlRender (text) {
      if (text === null) {
        return
      }
      return text.match(/ <([^\s]+)/)[1].slice(0, -1)
    },
    unix2ymd (intTime) {
      const d = new Date(intTime * 1000)
      const year = d.getFullYear()
      const month = ('0' + (d.getMonth() + 1)).slice(-2)
      const day = ('0' + d.getDate()).slice(-2)
      return year + '-' + month + '-' + day
    }
  }
}
</script>

<style>
@import "yama-normalize";
</style>
