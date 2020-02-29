<template>
  <main>
    <h1>2019</h1>
    <nav>
      <a href="/archive">/archive</a>
    </nav>
    <ul>
      <template v-for="list in lists">
        <li v-if="list.attachments" :key="list.iid">
          <span
            class="off-screen"
          >{{ unix2ymd (list.ts) }}</span>
          <!-- title not response -->
          <a
            v-if="!list.attachments[0].title"
            :href="urlRender(list.attachments[0].text)"
            target="_blank"
            rel="noopener"
          >
            {{ emoji(textRender(list.attachments[0].text)) }}
          </a>
          <!-- title response -->
          <a
            v-else
            :href="list.attachments[0].title_link"
            target="_blank"
            rel="noopener"
          >
            {{ emoji(list.attachments[0].title) }}
          </a>
        </li>
      </template>
    </ul>
  </main>
</template>

<script>
import emoji from 'node-emoji'
import JSON from '../../static/reading2019.json'

export default {
  data () {
    return {
      lists: JSON
    }
  },
  computed: {
    limitCount () {
      return this.lists.slice(0, 1000)
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
    emoji (text) {
      return emoji.emojify(text)
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
