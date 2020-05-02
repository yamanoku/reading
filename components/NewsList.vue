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

<style lang="scss">
.pagination {
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 10;
  padding: 0 5px;
  width: 100vw;
  height: 10vh;
  background-color: #fff;
  border-top: 1px solid #cecece;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.btn {
  background-color: #fff;
  border: 1px solid #cecece;
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  color: #333;
  font-weight: 700;
  padding: 0;
  margin: 0;
  svg {
    display: block;
    width: 16px;
    height: 16px;
    path {
      fill: #032f63;
    }
  }
  &:hover,
  &:focus {
    color: #fff;
    border: 1px solid #032f63;
    background-color: #032f63;
    opacity: 1;
    svg {
      path {
        fill: #fff;
      }
    }
  }
  &:focus {
    outline: none;
    box-shadow: inset 0 0 0 2px #fff;
  }
}

.black {
  display: block;
  width: 32px;
  height: 32px;
}

.paginate-links {
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0;
  margin: 0;
  li {
    display: block;
    width: 32px;
    height: 32px;
    line-height: 32px;
    font-weight: 700;
    color: #3a2c09;
    margin: 0 2px;
    button {
      appearance: none;
      background-color: #fff;
      border: 1px solid #cecece;
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
    color: #fff;
    border: 1px solid #032f63;
    background-color: #032f63;
    opacity: 1;
  }
  li button:focus {
    outline: none;
    box-shadow: inset 0 0 0 2px #fff;
  }
  li.disabled {
    display: none;
  }
}
</style>

<style lang="scss">
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
    background-color: #f9f9f9;
    padding: 8px 10px;
    color: #333;
    font-weight: 700;
    text-decoration: none;
    border: 1px solid #cecece;
    border-radius: 3px;
  }
  a:hover,
  a:focus {
    background-color: #032f63;
    border: 1px solid #032f63;
    color: #fff;
  }
  a:focus {
    outline: none;
    box-shadow: inset 0 0 0 3px #fff;
  }
  a:visited {
    color: #999;
  }
  a:visited:hover,
  a:visited:focus {
    background-color: #032f63;
    border: 1px solid #032f63;
    color: #fff;
  }
}
</style>

<style>
.off-screen {
  position: absolute;
  left: -10000px;
  top: auto;
  width: 1px;
  height: 1px;
  overflow: hidden;
}
</style>
