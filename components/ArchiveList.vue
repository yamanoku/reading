<template>
  <div class="stack flex flex-col justify-start">
    <form class="with-sidebar sticky top-0 bg-white" role="search">
      <label for="keywords">
        <span>Keywords</span>
        <input
          id="keywords"
          v-model="filterKey"
          type="text"
          name="keywords"
          class="border border-solid rounded-sm"
        >
      </label>
    </form>
    <div>
      <ul v-show="filterListItem" role="list" class="m-0 pl-8 pr-0 list-disc">
        <template v-for="list in filterListItem">
          <li :key="list.iid" role="listitem">
            <!-- title not response -->
            <a
              v-if="!list.attachments[0].title"
              :href="urlRender(list.attachments[0].text)"
              target="_blank"
              rel="noopener"
              class="underline"
            >
              {{ textRender(emoji(list.attachments[0].text)) }}
            </a>
            <!-- title response -->
            <a
              v-else
              :href="list.attachments[0].title_link"
              target="_blank"
              rel="noopener"
              class="underline"
            >
              {{ emoji(list.attachments[0].title) }}
            </a>
          </li>
        </template>
      </ul>
    </div>
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
      const listItem = this.lists.filter(
        (list: any) =>
          searchRegex.test(list.attachments[0].title) ||
          searchRegex.test(textRender(list.attachments[0].text) as string)
      )
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

<style lang="postcss" scoped>
form {
  padding: calc(var(--rhythm) * 3) 0;
  border-bottom: 1px solid rgb(170, 184, 194);
}
ul {
  line-height: calc(var(--rhythm) * 3);
}
</style>

<style lang="postcss">
:root {
  --space: 1.5rem;
}
.with-sidebar > * {
  @apply flex flex-wrap items-start;
}
.with-sidebar > * > * {
  flex-grow: 1;
  flex-basis: 80px;
}
.with-sidebar > * > :last-child {
  flex-basis: 0;
  flex-grow: 999;
  min-width: calc(50% - 90px);
}
.stack > * {
  @apply my-0;
}
.stack > * + * {
  margin-top: var(--space);
}
</style>
