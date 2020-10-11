<template>
  <div>
    <nuxt />
  </div>
</template>

<style lang="postcss">
html {
  @apply bg-white leading-normal antialiased;
  font: inherit;
  font-size: 100%;
}
html,
body {
  @apply h-full;
}
body {
  @apply font-serif;
}
*,
*:before,
*:after {
  @apply box-border;
}
:root {
  --rhythm: 0.5rem;
}
.archive-main {
  margin: 0 var(--rhythm) 0 calc(var(--rhythm) * 3);
}
</style>
