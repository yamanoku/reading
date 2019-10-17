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
    "url": "/_nuxt/912734e5e4ea2061cb33.js",
    "revision": "bf88358b4ad27e61db00d5082fc1804b"
  },
  {
    "url": "/_nuxt/9e6bdb7758c99108e774.js",
    "revision": "0cd6404e35ebc59f7a599cd591382cab"
  },
  {
    "url": "/_nuxt/c9954532f99abec79e46.js",
    "revision": "57c33797f345eb0c2896490e0cbac943"
  },
  {
    "url": "/_nuxt/d8a731ae66a43c8f8288.js",
    "revision": "3294781265dd7c9cb67388f2272d8886"
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
