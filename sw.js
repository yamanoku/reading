importScripts('/_nuxt/workbox.dev.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/3783df213d1c45eab0ad.js",
    "revision": "4885b35c77d491e3ba97ca8fb59941f6"
  },
  {
    "url": "/_nuxt/3c40f708bb4f8750106f.js",
    "revision": "8bc06b876ce5068ca9a0ffd2cf5f90e0"
  },
  {
    "url": "/_nuxt/4dbfc1f38458e600fddc.js",
    "revision": "7a854cd79cdd952bdfc7982410676c48"
  },
  {
    "url": "/_nuxt/4e7a63b2f77000965c90.js",
    "revision": "d67551bb8014771df8ccabf406d6b790"
  },
  {
    "url": "/_nuxt/71652220799434a02281.js",
    "revision": "9470c44909f80d4eb16f384d1e49d46e"
  },
  {
    "url": "/_nuxt/9192a741807a53dea893.js",
    "revision": "a15a79055e3b37f4be635e6ee8f08f9e"
  },
  {
    "url": "/_nuxt/a8ce1ef8eeb33ff21f3a.js",
    "revision": "09a808b92b968dc965fc5fd24cfdbddf"
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
