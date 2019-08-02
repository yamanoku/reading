importScripts('/_nuxt/workbox.dev.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/0ca5aeafafa65a67a0b9.js",
    "revision": "d4b57d71915611cf5c7b0a253230f320"
  },
  {
    "url": "/_nuxt/1407dc885a221d290731.js",
    "revision": "d13cb5b9f4bdb0803b4075301ec0d93e"
  },
  {
    "url": "/_nuxt/1f8658c6ce1e04a4050b.js",
    "revision": "418a5998f626c3c8391d291db6e44ac6"
  },
  {
    "url": "/_nuxt/5238fa78d6ad83009a6b.js",
    "revision": "2f53ab0804f92d023491a1b070e43a55"
  },
  {
    "url": "/_nuxt/bd7ed51ad1a6c211cffb.js",
    "revision": "28e8eabdcbed85b4186a6e4724246663"
  },
  {
    "url": "/_nuxt/c5dcd6915ed243a1a78e.js",
    "revision": "5d2fea27c7602933b32b012c8043c2ba"
  },
  {
    "url": "/_nuxt/fab092eaa5d855dc862c.js",
    "revision": "41152dd5e6e83d44ed6e3606d28a393d"
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
