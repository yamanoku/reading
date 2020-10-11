<template>
  <div>
    <paginate tag="nav" name="lists" class="news-list" :list="lists" :per="20">
      <ul>
        <template v-for="list in paginated('lists')">
          <li v-if="list.attachments" :key="list.iid">
            <!-- title not response -->
            <a
              v-if="!list.attachments[0].title"
              :href="urlRender(list.attachments[0].text)"
              :title="'Read More: ' + emoji(list.attachments[0].text)"
              target="_blank"
              rel="noopener"
            >
              <span
                v-if="list.attachments[0].ts"
                class="off-screen"
              >{{ unix2ymd (list.attachments[0].ts) }}</span>
              {{ emoji(textRender(list.attachments[0].text)) }}
            </a>
            <!-- title response -->
            <a
              v-else
              :href="list.attachments[0].title_link"
              :title="'Read More: ' + emoji(list.attachments[0].title)"
              target="_blank"
              rel="noopener"
            >
              <span
                v-if="list.attachments[0].ts"
                class="off-screen"
              >{{ unix2ymd (list.attachments[0].ts) }}</span>
              {{ emoji(list.attachments[0].title) }}
            </a>
          </li>
        </template>
      </ul>
    </paginate>
    <div class="pagination">
      <span class="blank" />
      <paginate-links for="lists" :show-step-links="false" @change="onPageChange" />
      <nuxt-link to="/archive" class="btn">
        <svg
          aria-hidden="true"
          class="svg-inline--fa fa-archive fa-w-16"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path d="M32 448c0 17.7 14.3 32 32 32h384c17.7 0 32-14.3 32-32V160H32v288zm160-212c0-6.6 5.4-12 12-12h104c6.6 0 12 5.4 12 12v8c0 6.6-5.4 12-12 12H204c-6.6 0-12-5.4-12-12v-8zM480 32H32C14.3 32 0 46.3 0 64v48c0 8.8 7.2 16 16 16h480c8.8 0 16-7.2 16-16V64c0-17.7-14.3-32-32-32z" />
        </svg>
        <span class="off-screen">Archive page</span>
      </nuxt-link>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import emoji from 'node-emoji'

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
      lists: this.data,
      paginate: ['lists']
    }
  },
  methods: {
    textRender (text: string) {
      if (text.includes('Reading... ')) {
        const mystr = text.split('Reading... ').join('')
        return mystr.replace(/^<[^>]h>|<[^>]*>$/g, '')
      } else if (text.includes('Reading… ')) {
        const mystr = text.split('Reading… ').join('')
        return mystr.replace(/^<[^>]h>|<[^>]*>$/g, '')
      }
    },
    urlRender (text: string) {
      if (text === null) {
        return
      }
      return text.match(/ <([^\s]+)/)![1].slice(0, -1)
    },
    emoji (text: string) {
      return emoji.emojify(text)
    },
    onPageChange ():void {
      document.getElementsByClassName('news-list')[0].scrollTop = 0
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

<style lang="postcss">
.pagination {
  @apply fixed bottom-0 left-0 z-10 px-1 w-screen bg-white border-solid border-t border-r-0 border-b-0 border-l-0 flex items-center justify-between;
  height: 10vh;
}
.btn {
  @apply bg-white border border-solid rounded-sm flex items-center justify-center w-8 h-8 font-bold text-gray p-0 m-0;
}
.btn:hover,
.btn:focus {
  @apply text-white border border-solid border-primary bg-primary;
}
.btn:focus {
  @apply outline-none;
  box-shadow: inset 0 0 0 2px #fff;
}
.btn svg {
  @apply block w-4 h-4;
}
.btn svg path {
  @apply fill-primary;
}
.btn:hover svg path,
.btn:focus svg path {
  @apply fill-white;
}
.paginate-links {
  @apply flex items-center content-center text-center p-0 m-0;
}
.paginate-links li {
  @apply block w-8 h-8 leading-8 font-bold text-primary mx-1
}
.paginate-links button {
  @apply appearance-none block bg-white border border-solid cursor-pointer rounded-sm flex items-center justify-center w-full h-full font-bold text-black p-0 m-0;
}
.paginate-links li button:hover,
.paginate-links li button:focus,
.paginate-links li.active button,
.paginate-links li.left-arrow button,
.paginate-links li.right-arrow button {
  @apply text-white border border-solid border-primary bg-primary
}
.paginate-links li button:focus {
  @apply outline-none;
  box-shadow: inset 0 0 0 2px #fff;
}
.paginate-links li.disabled {
  @apply hidden;
}
</style>

<style lang="postcss">
.news-list {
  @apply m-auto overflow-y-scroll fixed top-0 left-0 right-0 z-0;
  padding: 10px 0;
  width: calc(100vw - 10px);
  height: 90vh;
}
.news-list ul {
  @apply m-0 p-0 list-none grid gap-2;
}
.news-list li {
  @apply block p-0;
}
.news-list a {
  @apply block bg-gray text-black font-bold no-underline rounded-sm border border-solid;
  padding: 8px 10px;
}
.news-list a:hover,
.news-list a:focus {
  @apply bg-primary border border-solid text-white;
}
.news-list a:focus {
  @apply outline-none;
  box-shadow: inset 0 0 0 2px #fff;
}
.news-list a:visited {
  @apply text-gray;
}
.news-list a:visited:hover,
.news-list a:visited:focus {
  @apply bg-primary border border-solid text-white;
}
</style>

<style lang="postcss">
.off-screen {
  @apply sr-only;
}
</style>
