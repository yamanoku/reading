importScripts('/_nuxt/workbox.dev.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/067bbd08b58b0edc9b6e.js",
    "revision": "0d698f7b9b2e40c042b4c9bdb1c1271c"
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
    "url": "/_nuxt/a9db7273c64e0c77b435.js",
    "revision": "8b8d5f1384e11c56e29d234e59a50073"
  },
  {
    "url": "/_nuxt/b128aeb6a59c3964f18e.js",
    "revision": "9e2a2f188cc5183d58c042c0b44a37cc"
  },
  {
    "url": "/_nuxt/e9646cd269da0706c534.js",
    "revision": "fb463a6f93cbe596ef8c6e2a482b6bda"
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
