importScripts('/_nuxt/workbox.dev.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/16d0b92d3d87cececed3.js",
    "revision": "fadfc761baf3451d02c022b1924f1583"
  },
  {
    "url": "/_nuxt/233f29254282fa4925f2.js",
    "revision": "a86a07b72b8c38b40fbbf8bf8cb3a1e9"
  },
  {
    "url": "/_nuxt/4897210ce49174149b5f.js",
    "revision": "8cb646fb0f804b8a6edb4252b6d376a2"
  },
  {
    "url": "/_nuxt/9f7f97058c4c6f5512da.js",
    "revision": "085bf57ab1729e1e38127d048c2dcd0d"
  },
  {
    "url": "/_nuxt/ab44b61688601193fd56.js",
    "revision": "fcd61c1e717c509542e0721637c7cf36"
  },
  {
    "url": "/_nuxt/d4603c8215128ff28045.js",
    "revision": "69aac973abb7cf03d2809715a78f2ec4"
  },
  {
    "url": "/_nuxt/fec262e98be5c73415ac.js",
    "revision": "32adefebc81e607997d3724c4a4ed561"
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
