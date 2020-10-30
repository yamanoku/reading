<template>
  <div class="stack flex flex-col justify-start">
    <div>
      <ul role="list" class="m-0 pl-8 pr-0 list-disc">
        <template v-for="list in lists">
          <li :key="list.iid" role="listitem">
            <list-link :list-data="list" />
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
    data: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      filterKey: '',
      lists: this.data
    }
  }
})
</script>

<style lang="postcss" scoped>
ul {
  line-height: calc(var(--rhythm) * 3);
}
</style>

<style lang="postcss">
:root {
  --space: 1.5rem;
}
.stack > * {
  @apply my-0;
}
.stack > * + * {
  margin-top: var(--space);
}
</style>
