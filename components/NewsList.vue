<template>
  <div>
    <paginate-links for="lists" @change="onPageChange" :show-step-links="false"></paginate-links>
    <paginate tag="nav" name="lists" class="news-list" :list="lists" :per="20">
      <ul>
        <template v-for="list in paginated('lists')">
          <li v-if="list.attachments" :key="list.iid">
            <!-- title not response -->
            <a
              v-if="!list.attachments[0].title"
              :href="list.attachments[0].text"
              :title="'Read More: ' + emoji(list.attachments[0].text)"
              target="_blank"
              rel="noopener"
            >
              <span v-if="list.attachments[0].ts" class="off-screen">
                {{ unix2ymd (list.attachments[0].ts) }}
              </span>
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
              <span v-if="list.attachments[0].ts" class="off-screen">
                {{ unix2ymd (list.attachments[0].ts) }}
              </span>
              {{ emoji(list.attachments[0].title) }}
            </a>
          </li>
        </template>
      </ul>
    </paginate>
  </div>
</template>

<script>
import axios from "axios";
import emoji from "node-emoji";
import { TOKEN } from "~/static/config.js";
export default {
  props: {
    data: Array,
  },
  data() {
    return {
      lists: this.data,
      paginate: ["lists"],
    };
  },
  methods: {
    textRender(text) {
      if (text.indexOf("Reading... ") != -1) {
        const mystr = text.split("Reading... ").join("");
        return mystr.replace(/^<[^>]h>|<[^>]*>$/g, "");
      } else if (text.indexOf("Reading… ") != -1) {
        const mystr = text.split("Reading… ").join("");
        return mystr.replace(/^<[^>]h>|<[^>]*>$/g, "");
      }
    },
    emoji(text) {
      return emoji.emojify(text);
    },
    onPageChange() {
      document.getElementsByClassName("news-list")[0].scrollTop = 0;
    },
    unix2ymd(intTime) {
      const d = new Date(intTime * 1000);
      const year = d.getFullYear();
      const month = ("0" + (d.getMonth() + 1)).slice(-2);
      const day = ("0" + d.getDate()).slice(-2);
      return year + "-" + month + "-" + day;
    },
  }
};
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
  background-color: #fff;
  border-top: 1px solid #cecece;
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
    border: 1px solid #032F63;
    background-color: #032F63;
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
    background-color: #032F63;
    border: 1px solid #032F63;
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
    background-color: #032F63;
    border: 1px solid #032F63;
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
