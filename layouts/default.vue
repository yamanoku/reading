<template>
  <div>
    <nuxt />
  </div>
</template>

<style>
:root {
  --Primary: rgb(249, 249, 249);
  --Active: rgb(3, 47, 99);
  --BtnPrimary: var(--Primary);
  --BtnActive: var(--Active);
  --FontPrimary: rgb(0, 0, 0);
  --FontActive: rgb(255, 255, 255);
  --FontVisited: rgb(153, 153, 153);
  --BackMain: rgb(255, 255, 255);
  --BackNavi: rgb(255, 255, 255);
  --BorderPrimary: rgb(206, 206, 206);
  --BorderActive: var(--Active);
  --BorderFocus: rgb(255, 255, 255);
}
@media (prefers-color-scheme: dark) {
  :root {
    --Primary: rgb(30, 30, 30);
    --Active: rgb(187, 134, 252);
    --BtnPrimary: var(--Primary);
    --BtnActive: var(--Active);
    --FontPrimary: rgb(255, 255, 255);
    --FontActive: var(--Primary);
    --FontVisited: rgb(180, 180, 180);
    --BackMain: rgb(0, 0, 0);
    --BackNavi: rgb(64, 64, 64);
    --BorderPrimary: var(--Primary);
    --BorderActive: var(--Active);
    --BorderFocus: var(--Primary);
  }
}
html {
  font: inherit;
  font-family: sans-serif;
  font-size: 100%;
  line-height: 1.4;
  -webkit-font-smoothing: antialiased;
  background-color: var(--BackMain);
}
html,
body {
  height: 100vh;
}
*,
*:before,
*:after {
  box-sizing: border-box;
}
</style>
