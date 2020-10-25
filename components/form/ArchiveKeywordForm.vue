<template>
  <form class="with-sidebar sticky top-0 bg-white" role="search">
    <label for="keywords">
      <span>Keywords</span>
      <input
        id="keywords"
        type="text"
        name="keywords"
        class="border border-solid rounded-sm"
        :value="value"
        @input="innerSearchText"
      >
    </label>
  </form>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    value: {
      type: String,
      required: true
    }
  },
  methods: {
    innerSearchText (e: any): void {
      this.$emit('input', e.target.value)
      this.$emit('change', e.target.value)
    }
  }
})
</script>

<style lang="postcss" scoped>
form {
  padding: calc(var(--rhythm) * 3) 0;
  border-bottom: 1px solid rgb(170, 184, 194);
}
.with-sidebar > * {
  @apply flex flex-wrap items-start;
}
.with-sidebar > * > * {
  flex-grow: 1;
  flex-basis: 80px;
}
.with-sidebar > * > :last-child {
  flex-basis: 0;
  flex-grow: 999;
  min-width: calc(50% - 90px);
}
</style>
