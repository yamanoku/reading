<template>
  <div>
    <nuxt/>
  </div>
</template>

<script>
export default {
  mounted() {
    if((new Date()).getHours() >= 21 || (new Date()).getHours() < 6 ) {
      document.body.className += "night-mode";
    }
  },
}
</script>

<style>
html {
  font : inherit;
  font-family : sans-serif;
  font-size : 100%;
  line-height: 1.4;
  -webkit-font-smoothing : antialiased;
  background-color: #fff;
}
html, body {
  height: 100vh;
}
*, *:before, *:after {
  box-sizing: border-box;
}
/* .night-mode {
  background-color: #fff;
  animation: night 2s ease 0s 1 normal;
  animation-fill-mode: forwards;
}
@keyframes night {
  0% {filter:invert(0);}
  100% {filter:invert(100);}
} */
</style>
