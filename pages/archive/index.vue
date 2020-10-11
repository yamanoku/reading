
<template>
  <main class="archive-main">
    <h1 class="text-3xl font-bold mt-6 mb-3">Archive Page</h1>
    <p class="my-3">The archive page I've been reading</p>
    <ul class="my-3 pl-8 pr-0 list-disc" role="list">
      <li role="listitem">
        <nuxt-link class="underline" to="/archive/2019">
          2019
        </nuxt-link>
      </li>
      <li role="listitem">
        <nuxt-link class="underline" to="/archive/2018">
          2018
        </nuxt-link>
      </li>
    </ul>
    <nuxt-link class="underline" to="/">
      Back Top Page
    </nuxt-link>
  </main>
</template>

<style lang="postcss">
:root {
  --rhythm: .5rem;
  --space: 1.5rem;
}
.archive-main {
  max-width: 48rem;
  margin: 0 var(--rhythm) 0 calc(var(--rhythm) * 3);
}
</style>
