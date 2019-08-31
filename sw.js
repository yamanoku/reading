importScripts('/_nuxt/workbox.dev.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/487d132c6fc7115b97be.js",
    "revision": "038ac47df358a421d332f3693689215e"
  },
  {
    "url": "/_nuxt/983b274b36571f518e5d.js",
    "revision": "ba734392d2ed721742fc2c832170418b"
  },
  {
    "url": "/_nuxt/9bf9c72d17b5c4409f29.js",
    "revision": "16dd3d0f7649befe76551b86d2e97e0a"
  },
  {
    "url": "/_nuxt/a14aaece437ff2489865.js",
    "revision": "eef6dba6fdcce50491346567b2418075"
  },
  {
    "url": "/_nuxt/c23bf68be16c01d83e09.js",
    "revision": "4f7e0400c5ed8f09ec3b2bfa101468af"
  },
  {
    "url": "/_nuxt/d82801239fcc5026b2f8.js",
    "revision": "1aeb1a812f554b92e70ef9d528dbe239"
  },
  {
    "url": "/_nuxt/f25c73328894c48d9858.js",
    "revision": "5f197fa9ca0d13e548791104c67aa566"
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
