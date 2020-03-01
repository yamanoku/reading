<template>
  <main>
    <h1>2018</h1>
    <nav>
      <a href="/archive">/archive</a>
    </nav>
    <form role="search">
      <label>キーワード検索
        <input v-model="filterKey" type="text" name="keywords" autocomplete="on" list="title">
      </label>
    </form>
    <ul v-show="filterListItem.length > 0" class="list">
      <template v-for="list in filterListItem">
        <li :key="list.iid">
          <time :datetime="unix2ymd (list.ts)">{{ unix2ymd (list.ts) }}</time>
          <!-- title not response -->
          <a
            v-if="!list.attachments[0].title"
            :href="urlRender(list.attachments[0].text)"
            target="_blank"
            rel="noopener"
          >
            {{ textRender(emoji(list.attachments[0].text)) }}
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
    <div v-show="filterListItem.length === 0">
      キーワードなし
    </div>
  </main>
</template>

<script>
import emoji from 'node-emoji'
import JSON from '../../static/reading2018.json'

const textRender = (text) => {
  if (text.includes('Reading... ')) {
    const mystr = text.split('Reading... ').join('')
    return mystr.replace(/^<[^>]h>|<[^>]*>$/g, '')
  } else if (text.includes('Reading… ')) {
    const mystr = text.split('Reading… ').join('')
    return mystr.replace(/^<[^>]h>|<[^>]*>$/g, '')
  }
}

export default {
  data () {
    return {
      filterKey: '',
      lists: JSON
    }
  },
  computed: {
    filterListItem () {
      return this.lists.filter((list) => {
        const searchRegex = new RegExp(this.filterKey, 'i')
        return (
          searchRegex.test(list.attachments[0].title) ||
          searchRegex.test(textRender(list.attachments[0].text))
        )
      })
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

<style lang="scss">
@import "yama-normalize";

[role="search"] {
  margin: calc(var(--rhythm) * 3) 0;
}

.list {
  padding: 0;
  margin: calc(var(--rhythm) * 3) 0;
  & > * {
    display: flex;
    flex-wrap: wrap;
  }
  & > * > * {
    flex-grow: 1;
    flex-basis: 100px;
  }
  & > * > :last-child {
    flex-basis: 0;
    flex-grow: 999;
    min-width: calc(50% - 90px);
  }
}

</style>
