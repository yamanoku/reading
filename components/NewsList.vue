<template>
  <div>
    <paginate
      tag="nav"
      name="lists"
      class="news-list m-auto overflow-y-scroll fixed top-0 left-0 right-0 z-0"
      :list="lists"
      :per="20"
    >
      <ul class="m-0 p-0 list-none grid gap-2">
        <template v-for="list in paginated('lists')">
          <li v-if="list.attachments" :key="list.iid" class="block p-0">
            <list-link :list-data="list" :news-btn-style="true" />
          </li>
        </template>
      </ul>
    </paginate>
    <div
      class="pagination fixed bottom-0 left-0 z-10 px-1 w-screen bg-white border-solid border-t border-r-0 border-b-0 border-l-0 flex items-center justify-between"
    >
      <span class="blank" />
      <paginate-links
        for="lists"
        :show-step-links="false"
        @change="onPageChange"
      />
      <nuxt-link
        to="/archive"
        class="btn bg-white border border-solid rounded-sm flex items-center justify-center w-8 h-8 font-bold text-gray p-0 m-0 group hover:text-white hover:bg-primary focus:text-white focus:bg-primary focus:outline-none hover:border hover:border-solid hover:border-primary focus:border focus:border-solid focus:border-primary"
      >
        <svg
          class="svg-inline--fa fa-archive fa-w-16 block w-4 h-4"
          role="img"
          viewBox="0 0 512 512"
        >
          <title>Archive Icon</title>
          <path
            class="fill-primary group-hover:fill-white group-focus:fill-white"
            d="M32 448c0 17.7 14.3 32 32 32h384c17.7 0 32-14.3 32-32V160H32v288zm160-212c0-6.6 5.4-12 12-12h104c6.6 0 12 5.4 12 12v8c0 6.6-5.4 12-12 12H204c-6.6 0-12-5.4-12-12v-8zM480 32H32C14.3 32 0 46.3 0 64v48c0 8.8 7.2 16 16 16h480c8.8 0 16-7.2 16-16V64c0-17.7-14.3-32-32-32z"
          />
        </svg>
        <span class="sr-only">Archive page</span>
      </nuxt-link>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ListLink from './ListLink.vue'

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
      lists: this.data,
      paginate: ['lists']
    }
  },
  methods: {
    onPageChange (): void {
      document.getElementsByClassName('news-list')[0].scrollTop = 0
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
