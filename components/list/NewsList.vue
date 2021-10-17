<template>
  <div>
    <div class="news-list m-auto overflow-y-scroll fixed top-0 left-0 right-0 z-0">
      <ul class="m-0 p-0 list-none grid gap-2">
        <template v-for="list in filterItems">
          <li v-if="list.attachments" :key="list.iid" class="block p-0">
            <list-link :list-data="list" :news-btn-style="true" />
          </li>
        </template>
      </ul>
    </div>
    <div
      class="pagination fixed bottom-0 left-0 z-10 px-1 w-screen bg-white border-solid border-t border-r-0 border-b-0 border-l-0 flex items-center justify-between"
    >
      <span class="blank" />
      <ul class="paginate-links lists">
        <li v-for="pageItem in totalPage" :key="pageItem" :class="activeClass(pageItem)">
          <button type="button" @click="onPageChange(pageItem)">
            {{ pageItem }}
          </button>
        </li>
      </ul>
      <archive-link />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ListLink from '@/components/link/ListLink.vue'
import ArchiveLink from '@/components/link/ArchiveLink.vue'

export default Vue.extend({
  components: {
    ListLink,
    ArchiveLink
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
    const perPage = 20
    return {
      lists: this.data,
      page: 1,
      perPage,
      totalPage: this.data.length / perPage
    }
  },
  computed: {
    filterItems () {
      return this.$data.lists.filter(
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        (item: any, index: number) =>
          index >= (this.$data.page - 1) * this.$data.perPage && index < this.$data.page * this.$data.perPage
      )
    }
  },
  methods: {
    onPageChange (page: number): void {
      document.getElementsByClassName('news-list')[0].scrollTop = 0
      this.$data.page = page
    },
    activeClass (page: number): string {
      return page === this.$data.page ? 'active' : ''
    }
  }
})
</script>

<style lang="postcss">
.pagination {
  height: 10vh;
}
.btn:focus {
  box-shadow: inset 0 0 0 2px #fff;
}
</style>

<style lang="postcss">
.news-list {
  padding: 10px 0;
  width: calc(100vw - 10px);
  height: 90vh;
}
.news-list a {
  padding: 8px 10px;
}
.news-list a:focus {
  box-shadow: inset 0 0 0 2px #fff;
}
</style>

<style lang="postcss">
.paginate-links {
  @apply flex items-center content-center text-center p-0 m-0;
}
.paginate-links li {
  @apply block w-8 h-8 leading-8 font-bold text-primary mx-1;
}
.paginate-links button {
  @apply appearance-none block bg-white border border-solid cursor-pointer rounded-sm flex items-center justify-center w-full h-full font-bold text-black p-0 m-0;
}
.paginate-links li button:hover,
.paginate-links li button:focus,
.paginate-links li.active button,
.paginate-links li.left-arrow button,
.paginate-links li.right-arrow button {
  @apply text-white border border-solid border-primary bg-primary;
}
.paginate-links li button:focus {
  @apply outline-none;
  box-shadow: inset 0 0 0 2px #fff;
}
.paginate-links li.disabled {
  @apply hidden;
}
</style>
