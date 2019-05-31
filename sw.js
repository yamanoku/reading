importScripts('/_nuxt/workbox.dev.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/39dfb1756638d30afb82.js",
    "revision": "21b193ee6122931016415c6c8c48cfff"
  },
  {
    "url": "/_nuxt/50ccb1867e4607da0ab2.js",
    "revision": "784975e8d4dade69469ba4815794aba9"
  },
  {
    "url": "/_nuxt/5bd43b24ed51716f3a92.js",
    "revision": "5ba092dd3a6b1a66577e7b82424f1031"
  },
  {
    "url": "/_nuxt/678b1d13678d40d7ccd7.js",
    "revision": "63740d2e2145f9cf6c06b182445a123b"
  },
  {
    "url": "/_nuxt/bda3acc5a621b60ed8c4.js",
    "revision": "6e1b5299d9c4ccfdbd766579cad002f0"
  },
  {
    "url": "/_nuxt/bee1db10ab68c8e559e0.js",
    "revision": "337404c0f192c72dd3ff81c03697dff4"
  },
  {
    "url": "/_nuxt/c91f9ec223f672a8822b.js",
    "revision": "14145daaeff7791e0c4fbda1dd8c6622"
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
