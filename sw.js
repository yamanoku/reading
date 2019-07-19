importScripts('/_nuxt/workbox.dev.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/0ca5aeafafa65a67a0b9.js",
    "revision": "d4b57d71915611cf5c7b0a253230f320"
  },
  {
    "url": "/_nuxt/0f83378554cfc221d502.js",
    "revision": "1493f90ef2306a06cb13ea67dd5e2b97"
  },
  {
    "url": "/_nuxt/29f2f55b6d68942cd0bb.js",
    "revision": "5eb53a5f5a86079534584d6ef558bdc1"
  },
  {
    "url": "/_nuxt/2a6723ae607a67826f5e.js",
    "revision": "353f5f99a2e35f748856db4900dee724"
  },
  {
    "url": "/_nuxt/5ec12b01e4233b08671e.js",
    "revision": "b94139aec12205f82e10ce6cf42bd243"
  },
  {
    "url": "/_nuxt/75df32e6ae78a23026fb.js",
    "revision": "a76d07272a2bb027ba0d92e374864afb"
  },
  {
    "url": "/_nuxt/bd7ed51ad1a6c211cffb.js",
    "revision": "28e8eabdcbed85b4186a6e4724246663"
  }
], {
  "cacheId": "reading",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
