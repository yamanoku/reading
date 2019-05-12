importScripts('/_nuxt/workbox.dev.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/3783df213d1c45eab0ad.js",
    "revision": "4885b35c77d491e3ba97ca8fb59941f6"
  },
  {
    "url": "/_nuxt/64c61649727a60471d8b.js",
    "revision": "6b2808e7d7761f506714c9751fc66934"
  },
  {
    "url": "/_nuxt/71652220799434a02281.js",
    "revision": "9470c44909f80d4eb16f384d1e49d46e"
  },
  {
    "url": "/_nuxt/857a69f534a0f1870059.js",
    "revision": "283b7ad991e2ed8d66d20ff8f77d93fb"
  },
  {
    "url": "/_nuxt/9192a741807a53dea893.js",
    "revision": "a15a79055e3b37f4be635e6ee8f08f9e"
  },
  {
    "url": "/_nuxt/ee555d7fcace6cb0e22c.js",
    "revision": "a1b7dc255669d9b6529bb4668c32cca0"
  },
  {
    "url": "/_nuxt/f0adf376a3418f684625.js",
    "revision": "f2ebeea317796fec47ee2d848a553195"
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
