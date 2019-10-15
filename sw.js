importScripts('/_nuxt/workbox.dev.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/17384bbb5154f164955c.js",
    "revision": "20d9b6eb2fbf535fbd34b6976f612118"
  },
  {
    "url": "/_nuxt/4dc56c5890098deabc34.js",
    "revision": "67cf1e26a4882f4251fa82eac57f597b"
  },
  {
    "url": "/_nuxt/56c3718a563ac5dcd28d.js",
    "revision": "fe7f456124007e0a6e819c5f6745e631"
  },
  {
    "url": "/_nuxt/58022796f3ae90d654be.js",
    "revision": "85813f0f1969952da8e40802297be75b"
  },
  {
    "url": "/_nuxt/982acac7d97df8d16e20.js",
    "revision": "4e0b65a24f4403675e5bcb3d6ee31b9f"
  },
  {
    "url": "/_nuxt/aebd921457346cbe803e.js",
    "revision": "ac180d6c754c2991863a71ca9bd4d2e7"
  },
  {
    "url": "/_nuxt/d9246b5ac560528f3943.js",
    "revision": "eb3c83d6acc451824c7a5d49cdca175a"
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
