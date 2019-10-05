importScripts('/_nuxt/workbox.dev.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/4f5463717c4e995e84f6.js",
    "revision": "ab58747695cd4d8c5779c47655ce4bee"
  },
  {
    "url": "/_nuxt/5772219956b1863435fb.js",
    "revision": "a3cd843e3f604e8940aa46f4b2e0cdba"
  },
  {
    "url": "/_nuxt/743f8f9be1bcca3848c1.js",
    "revision": "98b78caa19c456e4544ed6a998e2a106"
  },
  {
    "url": "/_nuxt/8222c520eabc4c8707d7.js",
    "revision": "8c2757c0c59de0c5fc95d24ddb3df6b7"
  },
  {
    "url": "/_nuxt/c7b67623875d23fa23a9.js",
    "revision": "c3e8a6b18f6eecf4705117c5d49c58b2"
  },
  {
    "url": "/_nuxt/c7f8d5659a8b3a901dcf.js",
    "revision": "835b3205cf4eb18b5308be7b9346f385"
  },
  {
    "url": "/_nuxt/e5e812e249ee2add6d1a.js",
    "revision": "2bc822662fd6ca4973d63c0e7a2ec65e"
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
