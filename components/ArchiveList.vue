<template>
  <div>
    <form role="search">
      <label>
        <span>キーワード検索</span>
        <input v-model="filterKey" type="text" name="keywords">
      </label>
    </form>
    <ul v-show="filterListItem.length > 0" role="list" class="list">
      <template v-for="list in filterListItem">
        <li :key="list.iid" role="listitem">
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
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import emoji from 'node-emoji'

const textRender = (text: string) => {
  if (text?.includes('Reading... ')) {
    const mystr = text?.split('Reading... ').join('')
    return mystr.replace(/^<[^>]h>|<[^>]*>$/g, '')
  } else if (text?.includes('Reading… ')) {
    const mystr = text?.split('Reading… ').join('')
    return mystr.replace(/^<[^>]h>|<[^>]*>$/g, '')
  }
}

export default Vue.extend({
  props: {
    data: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      filterKey: '',
      lists: this.data
    }
  },
  computed: {
    filterListItem (): any {
      const searchRegex = new RegExp(this.filterKey, 'i')
      const listItem = this.lists.filter((list: any) => (searchRegex.test(list.attachments[0].title) ||
        searchRegex.test(textRender(list.attachments[0].text) as string)))
      return listItem
    }
  },
  methods: {
    textRender (text: string) {
      if (text?.includes('Reading... ')) {
        const mystr = text?.split('Reading... ').join('')
        return mystr.replace(/^<[^>]h>|<[^>]*>$/g, '')
      } else if (text?.includes('Reading… ')) {
        const mystr = text?.split('Reading… ').join('')
        return mystr.replace(/^<[^>]h>|<[^>]*>$/g, '')
      }
    },
    emoji (text: string) {
      return emoji.emojify(text)
    },
    urlRender (text: string | null) {
      return text?.match(/ <([^\s]+)/)?.[1]?.slice(0, -1) ?? null
    },
    unix2ymd (intTime: number) {
      const d = new Date(intTime * 1000)
      const year = d.getFullYear()
      const month = ('0' + (d.getMonth() + 1)).slice(-2)
      const day = ('0' + d.getDate()).slice(-2)
      return year + '-' + month + '-' + day
    }
  }
})
</script>

<style lang="scss" scoped>
[role="search"] {
  margin: calc(.5rem * 3) 0;
  & > * {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
  }
  & > * > * {
    flex-grow: 1;
    flex-basis: 120px;
  }
  & > * > :last-child {
    flex-basis: 0;
    flex-grow: 999;
    min-width: calc(50% - 90px);
  }
}

.list {
  padding: 0;
  margin: calc(.5rem * 3) 0;
  & > * {
    display: flex;
    flex-wrap: wrap;
  }
  & > * > * {
    flex-grow: 1;
    flex-basis: 120px;
  }
  & > * > :last-child {
    flex-basis: 0;
    flex-grow: 999;
    min-width: calc(50% - 90px);
  }
}
</style>
