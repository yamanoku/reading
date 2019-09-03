importScripts('/_nuxt/workbox.dev.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/54cb06e0c3e63009c1fb.js",
    "revision": "b9c935b85c2edccd7881d5bf03f2f35b"
  },
  {
    "url": "/_nuxt/610121ce533d45f2be1c.js",
    "revision": "cde4f38612ee97c2a7c4fd5827a16c41"
  },
  {
    "url": "/_nuxt/6379aef1a7b8f74bf5f8.js",
    "revision": "7b700260fce0a3e6d935eb5c937da29f"
  },
  {
    "url": "/_nuxt/8069e6bd84d7f856e248.js",
    "revision": "f71c3d6e5509d4d00dd29ea9c086405d"
  },
  {
    "url": "/_nuxt/889072a80c3dea677af7.js",
    "revision": "bfc6c741f31d05b57968fb6cedc76166"
  },
  {
    "url": "/_nuxt/bb8a1820ef7b3c52182a.js",
    "revision": "bdff4063d1d863875be9b1463b228249"
  },
  {
    "url": "/_nuxt/e251c0c83f4bc3ad1d88.js",
    "revision": "737dbc6dca615ca0acc590cec017def0"
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
