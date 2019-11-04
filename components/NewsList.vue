<template>
  <div>
    <paginate-links for="lists" :show-step-links="false" @change="onPageChange" />
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

<style lang="scss">
.paginate-links {
  text-align: center;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 10;
  width: 100vw;
  height: 10vh;
  background-color: var(--BackNavi);
  border-top: 1px solid var(--BorderPrimary);
  li {
    display: block;
    width: 32px;
    height: 32px;
    line-height: 32px;
    font-weight: 700;
    margin: 0 2px;
    button {
      appearance: none;
      background-color: var(--BtnPrimary);
      border: 1px solid var(--BorderPrimary);
      border-radius: 3px;
      display: block;
      width: 100%;
      height: 100%;
      color: #333;
      font-weight: 700;
      cursor: pointer;
      padding: 0;
      margin: 0;
    }
  }
  li button:hover,
  li button:focus,
  li.active button,
  li.left-arrow button,
  li.right-arrow button {
    color: var(--BackMain);
    border: 1px solid var(--BorderActive);
    background-color: var(--BtnActive);
    opacity: 1;
  }
  li button:focus {
    outline: none;
    box-shadow: inset 0 0 0 2px var(--BackMain);
  }
  li.disabled {
    display: none;
  }
}
.news-list {
  padding: 10px 0;
  margin: 0;
  width: calc(100vw - 10px);
  height: 90vh;
  overflow-y: scroll;
  position: fixed;
  top: 0;
  left: 5px;
  z-index: 0;
  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
    display: grid;
    grid-gap: 10px;
  }
  li {
    display: block;
    padding: 0;
  }
  a {
    display: block;
    background-color: var(--BtnPrimary);
    padding: 8px 10px;
    color: var(--fontPrimary);
    font-weight: 700;
    text-decoration: none;
    border: 1px solid var(--BorderPrimary);
    border-radius: 3px;
  }
  a:hover,
  a:focus {
    background-color: var(--BtnActive);
    border: 1px solid var(--BorderActive);
    color: var(--BackMain);
  }
  a:focus {
    outline: none;
    box-shadow: inset 0 0 0 3px var(--BorderActive);
  }
  a:visited {
    color: var(--FontVisited);
  }
  a:visited:hover,
  a:visited:focus {
    background-color: var(--BtnActive);
    border: 1px solid var(--BorderActive);
    color: var(--FontActive);
  }
}
.off-screen {
  position: absolute;
  left: -10000px;
  top: auto;
  width: 1px;
  height: 1px;
  overflow: hidden;
}
</style>
