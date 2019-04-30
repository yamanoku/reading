<template>
  <main>
    <news-list
      :data="lists"
      :success="shown"
      :error="modal" />
  </main>
</template>

<script>
import axios from "axios";
import { TOKEN } from "~/static/config.js";
import NewsList from '~/components/NewsList.vue'

export default {
  asyncData() {
    return axios
      .get(TOKEN)
      .then(res => {
        return {
          lists: res.data.api,
          shown: true,
          modal: false,
        }
      })
      .catch(() => {
        return {
          lists: [],
          shown: false,
          modal: true,
        }
      });
  },
  components: {
    NewsList
  }
}
</script>

<style>
main {
  height: 100vh;
}
</style>
