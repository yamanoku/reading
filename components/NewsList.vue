<template>
  <div v-if="shown">
    <paginate-links
      for="lists"
      @change="onPageChange"
      :show-step-links="true"
      :limit="2">
    </paginate-links>
    <paginate
      tag="ul"
      name="lists"
      class="news-list"
      :list="lists"
      :per="20">
      <li v-for="list in paginated('lists')" :key="list.iid">
        <!-- title not response -->
        <a
          v-if="!list.attachments[0].title"
          :href="urlRender(list.attachments[0].text)"
          :title="'Read More: ' + list.attachments[0].text"
          target="_blank"
          rel="noopener">
            <span class="off-screen">{{ unix2ymd (list.attachments[0].ts) }}</span>
            {{ textRender(list.attachments[0].text) }}
        </a>
        <!-- title response -->
        <a
          v-else
          :href="list.attachments[0].title_link"
          :title="'Read More: ' + list.attachments[0].title"
          target="_blank"
          rel="noopener">
            <span class="off-screen">{{ unix2ymd (list.attachments[0].ts) }}</span>
            {{ list.attachments[0].title }}
        </a>
      </li>
    </paginate>
  </div>
  <div v-else>
    <ul class="loading">
      <li v-for="i in 20" :key="i"></li>
    </ul>
  </div>
</template>

<script>
  import axios from 'axios';
  import {TOKEN} from '~/static/config.js';
  export default {
    data() {
      return {
        lists: [],
        paginate: ['lists'],
        shown: false
      }
    },
    mounted() {
      axios.get(TOKEN)
        .then((res) => {
          this.lists = res.data.messages.matches;
          setTimeout(() => {
            this.shown = true;
          }, 150);
        });
    },
    methods: {
      textRender (text) {
        if (text.indexOf('Reading... ') != -1) {
          const mystr = text.split("Reading... ").join("");
          return mystr.replace(/^<[^>]h>|<[^>]*>$/g, "");
        } else if (text.indexOf('Reading… ') != -1) {
          const mystr = text.split("Reading… ").join("");
          return mystr.replace(/^<[^>]h>|<[^>]*>$/g, "");
        }
      },
      urlRender (text) {
        return text.match(/ <([^\s]+)/)[1].slice(0, -1);
      },
      onPageChange() {
        document.getElementsByClassName('news-list')[0].scrollTop = 0;
      },
      unix2ymd (intTime) {
        const d = new Date( intTime * 1000 );
        const year  = d.getFullYear();
        const month = ("0" + (d.getMonth() + 1)).slice(-2);
        const day  = ("0" + d.getDate()).slice(-2);
        return( year + '-' + month + '-' + day);
      },
    }
  }
</script>

<style lang="scss">
.loading {
  margin: 0;
  padding: 10px;
  display: grid;
  grid-gap: 10px;
  overflow: hidden;
  width: 100vw;
  height: 100vh;
  position: absolute;
  left: 0;
  top: 0;
  z-index: -1;
  li {
    background-color: #f9f9f9;
    border: 1px solid #ddd;
    height: 50px;
    line-height: 50px;
    padding: 0 20px;
    display: block;
    border-radius: 3px;
  }
}
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
  background-color: #fff;
  border-top: 1px solid #ddd;
  li {
    display: block;
    width: 32px;
    height: 32px;
    line-height: 32px;
    font-weight: 700;
    color: #3a2c09;
    margin-right: 2px;
  }
  li a {
    display: block;
    width: 100%;
    height: 100%;
    color: #3a2c09;
    cursor: pointer;
  }
  li a:hover,
  li.active a,
  li.left-arrow a,
  li.right-arrow a {
    color: #fff;
    background-color: #37455d;
    opacity: 1;
  }
  li.right-arrow {
    margin-right: 0;
  }
  li.disabled {
    display: none;
  }
}
.news-list {
  padding: 10px 0;
  margin: 0;
  list-style-type: none;
  display: grid;
  grid-gap: 10px;
  width: calc(100vw - 10px);
  height: 90vh;
  overflow-y: scroll;
  position: fixed;
  top: 0;
  left: 5px;
  z-index: 0;
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
    border: 1px solid #ddd;
  }
  a:hover {
    background-color: #37455d;
    border: 1px solid #37455d;
    color: #fff;
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
