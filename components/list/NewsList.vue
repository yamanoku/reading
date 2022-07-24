<template>
  <div>
    <div class="news-list m-auto">
      <ul class="m-0 p-0 list-none grid gap-2">
        <template v-for="list in lists">
          <li v-if="list.attachments" :key="list.iid" class="block p-0">
            <list-link :list-data="list" :news-btn-style="true" />
          </li>
        </template>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ListLink from '@/components/link/ListLink.vue'

export default Vue.extend({
  components: {
    ListLink
  },
  props: {
    lists: {
      type: Array,
      required: true
    }
  }
})
</script>

<style lang="postcss">
.news-list {
  padding: 10px;
}
.news-list a {
  padding: 8px 10px;
}
.news-list a:focus {
  box-shadow: inset 0 0 0 2px #fff;
}
</style>
