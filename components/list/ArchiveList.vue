<template>
  <div class="stack flex flex-col justify-start">
    <div>
      <ul v-show="filterListItem" role="list" class="m-0 pl-8 pr-0 list-disc">
        <template v-for="list in filterListItem">
          <li :key="list.iid" role="listitem">
            <list-link :list-data="list" />
          </li>
        </template>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ListLink from '@/components/link/ListLink.vue'

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
  components: {
    ListLink
  },
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
  }
})
</script>

<style lang="postcss" scoped>
ul {
  line-height: calc(var(--rhythm) * 3);
}
</style>

<style lang="postcss">
:root {
  --space: 1.5rem;
}
.stack > * {
  @apply my-0;
}
.stack > * + * {
  margin-top: var(--space);
}
</style>
