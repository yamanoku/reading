importScripts('/_nuxt/workbox.dev.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/23ff12187650a7dbb228.js",
    "revision": "e2b4f19d98799f19622e113f294e30cf"
  },
  {
    "url": "/_nuxt/250a6b888b614144b68d.js",
    "revision": "4c5c044823d8d4e8de7ab267ec719529"
  },
  {
    "url": "/_nuxt/29ea04cb76344e920f02.js",
    "revision": "254dc6b66fb7c90a7841b981a5b43131"
  },
  {
    "url": "/_nuxt/6eeb8058b175d7c61270.js",
    "revision": "258f31d2b5e6027e953d045ff5b4724c"
  },
  {
    "url": "/_nuxt/99a4f4eff6911c804d55.js",
    "revision": "07a217df67632d67d2e9d235adfd98c5"
  },
  {
    "url": "/_nuxt/9f28e438f495f46e1750.js",
    "revision": "ba9edd8b54c68d7b8e1942fcaec8f5fb"
  },
  {
    "url": "/_nuxt/d1f354f9e1f234ea695f.js",
    "revision": "b51deac7fa98e00a2cffa085d8852573"
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
