importScripts('/_nuxt/workbox.dev.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/0a7c44523e3165f6ddca.js",
    "revision": "5426603b5c51b3b8c2d5f143f8ab10af"
  },
  {
    "url": "/_nuxt/336b95daba4cda06cf4e.js",
    "revision": "17b4a9e5a104649e5f60cf4a4f4a2a96"
  },
  {
    "url": "/_nuxt/4deefb424b3daaa7171c.js",
    "revision": "73add28a2b8f082f539c72a3269ee015"
  },
  {
    "url": "/_nuxt/5c9691ae1c4a976476d2.js",
    "revision": "6099d1cc1f86b4c7bbdf869df1e7b985"
  },
  {
    "url": "/_nuxt/63d5c6917136016674c2.js",
    "revision": "c6cac76633d80355123f8c9befaf0de7"
  },
  {
    "url": "/_nuxt/9ba7368a132dd574c305.js",
    "revision": "ecf0df324f28cb264bd6a6d7f7555ae0"
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
