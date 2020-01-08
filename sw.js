importScripts('/_nuxt/workbox.dev.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/05117de538c3784d21f8.js",
    "revision": "7244a17ac275e4ea427a1442219af250"
  },
  {
    "url": "/_nuxt/06a5369e182b0547d1a0.js",
    "revision": "26cd7b37d5e474c97a0caa874e1b4910"
  },
  {
    "url": "/_nuxt/154810f0c4982d63a207.js",
    "revision": "4d345c7125aa5c63813ec3aa3c0058d5"
  },
  {
    "url": "/_nuxt/6a33b27046c8127ded30.js",
    "revision": "d60ed66431b7e2f1561eb625f2cd5533"
  },
  {
    "url": "/_nuxt/78355be58f944fd3796f.js",
    "revision": "079c49070adf0ac2c01417feffd84d18"
  },
  {
    "url": "/_nuxt/7fe7327ab6db89212f09.js",
    "revision": "573764dd52038e7227266763ad09eef8"
  },
  {
    "url": "/_nuxt/abb2ada493c85bdadbe9.js",
    "revision": "cfdf07875096593d9b8712289b989f12"
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
