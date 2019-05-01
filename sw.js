importScripts('/_nuxt/workbox.dev.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/3783df213d1c45eab0ad.js",
    "revision": "4885b35c77d491e3ba97ca8fb59941f6"
  },
  {
    "url": "/_nuxt/71652220799434a02281.js",
    "revision": "9470c44909f80d4eb16f384d1e49d46e"
  },
  {
    "url": "/_nuxt/8da24b56f5e68480f814.js",
    "revision": "209ff254c624f1313d1417d75a52014e"
  },
  {
    "url": "/_nuxt/9192a741807a53dea893.js",
    "revision": "a15a79055e3b37f4be635e6ee8f08f9e"
  },
  {
    "url": "/_nuxt/998c6eb57a35ddcbdb9d.js",
    "revision": "0dc97e31c401b6593688a3e82590fc4e"
  },
  {
    "url": "/_nuxt/aa79fb2650828575b3da.js",
    "revision": "89cd13bae65cdc8559b7b185731614d4"
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
