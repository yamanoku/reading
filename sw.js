importScripts('/_nuxt/workbox.dev.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/3783df213d1c45eab0ad.js",
    "revision": "4885b35c77d491e3ba97ca8fb59941f6"
  },
  {
    "url": "/_nuxt/3887b3d35ba39939aa24.js",
    "revision": "9577175ee23f617a3e59f17e01d3f80d"
  },
  {
    "url": "/_nuxt/71652220799434a02281.js",
    "revision": "9470c44909f80d4eb16f384d1e49d46e"
  },
  {
    "url": "/_nuxt/87a6a2b0a5738ef853b1.js",
    "revision": "4f65247589c0e65915f16acb24f7b2b4"
  },
  {
    "url": "/_nuxt/9192a741807a53dea893.js",
    "revision": "a15a79055e3b37f4be635e6ee8f08f9e"
  },
  {
    "url": "/_nuxt/a1ada8f9a6266498bb21.js",
    "revision": "0dc97e31c401b6593688a3e82590fc4e"
  },
  {
    "url": "/_nuxt/ee555d7fcace6cb0e22c.js",
    "revision": "a1b7dc255669d9b6529bb4668c32cca0"
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
