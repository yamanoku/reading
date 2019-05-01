<template>
  <main>
    <news-list :data="lists"/>
  </main>
</template>

<script>
import axios from "axios";
import { TOKEN } from "~/static/config.js";
import NewsList from "~/components/NewsList.vue";

export default {
  async asyncData({ params, error }) {
    try {
      const { data } = await axios.get(TOKEN);
      return {
        lists: data.api
      };
    } catch {
      error({ statusCode: 404, message: "Connection Error" });
    }
  },
  components: {
    NewsList
  }
};
</script>

<style>
main {
  height: 100vh;
}
</style>
