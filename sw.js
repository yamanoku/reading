importScripts('/_nuxt/workbox.dev.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/0a757c941901e2e7e4f3.js",
    "revision": "52c8ce16b1a7d2923ab7cdaa2218899c"
  },
  {
    "url": "/_nuxt/2d4b92b51849e88f6683.js",
    "revision": "f1b2bc62cf4f3cfe134eb04674e1651c"
  },
  {
    "url": "/_nuxt/4a12e9866b168fd341bc.js",
    "revision": "6d28afcbd07a02a2fb691701c600f8fa"
  },
  {
    "url": "/_nuxt/4b846c11185b36a55c68.js",
    "revision": "712ec0965a9351641f840f2fc1d8b687"
  },
  {
    "url": "/_nuxt/a9db7273c64e0c77b435.js",
    "revision": "8b8d5f1384e11c56e29d234e59a50073"
  },
  {
    "url": "/_nuxt/b128aeb6a59c3964f18e.js",
    "revision": "9e2a2f188cc5183d58c042c0b44a37cc"
  },
  {
    "url": "/_nuxt/ea63d40c578ae630f308.js",
    "revision": "976055f275307280a14e9b242d3505d2"
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
