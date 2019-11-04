<template>
  <div>
    <nuxt />
  </div>
</template>

<style>
:root {
  --Primay: rgb(249, 249, 249);
  --Active: rgb(3, 47, 99);
  --BtnPrimary: var(--Primay);
  --BtnActive: var(--Active);
  --FontPrimary: var(--Primay);
  --FontActive: rgb(255, 255, 255);
  --FontVisited: rgb(153, 153, 153);
  --BackMain: rgb(255, 255, 255);
  --BackNavi: rgb(255, 255, 255);
  --BorderPrimary: rgb(206, 206, 206);
  --BorderActive: var(--Active);
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
