importScripts('/_nuxt/workbox.dev.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/154810f0c4982d63a207.js",
    "revision": "4d345c7125aa5c63813ec3aa3c0058d5"
  },
  {
    "url": "/_nuxt/226cdc0e717b173548c2.js",
    "revision": "14cbf7a40fc6494f90bd12f0af0bd0a3"
  },
  {
    "url": "/_nuxt/24da8b0e6cd7ea4732e6.js",
    "revision": "701e46f20bf6d543c358b88c66f6a0d8"
  },
  {
    "url": "/_nuxt/34e7dbcdcf543e54c634.js",
    "revision": "90741b259791d91ee2e87b99fb2c6222"
  },
  {
    "url": "/_nuxt/78355be58f944fd3796f.js",
    "revision": "079c49070adf0ac2c01417feffd84d18"
  },
  {
    "url": "/_nuxt/b2ec796d55c6fd8a6feb.js",
    "revision": "22252cd234589219fbef3d4e5fc476d3"
  },
  {
    "url": "/_nuxt/d9d078e09f398241de49.js",
    "revision": "2c657dad943ffec23d4607146884a80c"
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
