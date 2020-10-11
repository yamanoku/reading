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
  font-family: system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif,"Segoe UI",Helvetica,Arial,"Apple Color Emoji","Segoe UI Emoji";
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
