<template>
  <div class="loader">
    <div class="loader_circle-01 loader_circle"></div>
    <div class="loader_circle-02 loader_circle"></div>
    <div class="loader_circle-03 loader_circle"></div>
    <div class="loader_circle-04 loader_circle"></div>
    <div class="loader_circle-05 loader_circle"></div>
    <div class="loader_circle-06 loader_circle"></div>
    <div class="loader_circle-07 loader_circle"></div>
    <div class="loader_circle-08 loader_circle"></div>
    <div class="loader_circle-09 loader_circle"></div>
    <div class="loader_circle-10 loader_circle"></div>
    <div class="loader_circle-11 loader_circle"></div>
    <div class="loader_circle-12 loader_circle"></div>
  </div>
</template>

<style lang="scss" scoped>
.loader {
  margin: auto;
  width: 30vw;
  height: 30vw;
  max-width: 240px;
  max-height: 240px;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  &_circle {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    &:before {
      content: "";
      display: block;
      margin: 0 auto;
      width: 15%;
      height: 15%;
      background-color: #0c9bf3;
      border-radius: 100%;
      animation: circleDelay 1.2s infinite ease-in-out both;
    }
    &-02 {
      transform: rotate(30deg);
      &::before {
        animation-delay: -1.1s;
      }
    }
    &-03 {
      transform: rotate(60deg);
      &::before {
        animation-delay: -1s;
      }
    }
    &-04 {
      transform: rotate(90deg);
      &::before {
        animation-delay: -0.9s;
      }
    }
    &-05 {
      transform: rotate(120deg);
      &::before {
        animation-delay: -0.8s;
      }
    }
    &-06 {
      transform: rotate(150deg);
      &::before {
        animation-delay: -0.7s;
      }
    }
    &-07 {
      transform: rotate(180deg);
      &::before {
        animation-delay: -0.6s;
      }
    }
    &-08 {
      transform: rotate(210deg);
      &::before {
        animation-delay: -0.5s;
      }
    }
    &-09 {
      transform: rotate(240deg);
      &::before {
        animation-delay: -0.4s;
      }
    }
    &-10 {
      transform: rotate(270deg);
      &::before {
        animation-delay: -0.3s;
      }
    }
    &-11 {
      transform: rotate(300deg);
      &::before {
        animation-delay: -0.2s;
      }
    }
    &-12 {
      transform: rotate(330deg);
      &::before {
        animation-delay: -0.1s;
      }
    }
  }
}
@keyframes circleDelay {
  0%,
  39%,
  100% {
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
}
</style>
