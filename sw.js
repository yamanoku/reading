importScripts('/_nuxt/workbox.dev.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/16224a9ffa11f8596bb8.js",
    "revision": "8bc5b3386d5a80a3bd0e1c30a5994a3d"
  },
  {
    "url": "/_nuxt/17384bbb5154f164955c.js",
    "revision": "20d9b6eb2fbf535fbd34b6976f612118"
  },
  {
    "url": "/_nuxt/4ef4f470e9a45348cbca.js",
    "revision": "85813f0f1969952da8e40802297be75b"
  },
  {
    "url": "/_nuxt/56c3718a563ac5dcd28d.js",
    "revision": "fe7f456124007e0a6e819c5f6745e631"
  },
  {
    "url": "/_nuxt/9bdcabf647531853c443.js",
    "revision": "eb3c83d6acc451824c7a5d49cdca175a"
  },
  {
    "url": "/_nuxt/ae59720fc54d5197e718.js",
    "revision": "b13c7b3d69b0e34accda53eb4feab16d"
  },
  {
    "url": "/_nuxt/c6255aecd06579092994.js",
    "revision": "7bd8366e740616fcc8e8499666b4ac12"
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
