importScripts('/_nuxt/workbox.dev.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/297cb639b19dff67d3b2.js",
    "revision": "9fba50e4b622d0db912cf5be1e65f67f"
  },
  {
    "url": "/_nuxt/48291cc1029784212692.js",
    "revision": "314f44079cae4b997d4ceb85142ead6b"
  },
  {
    "url": "/_nuxt/983b274b36571f518e5d.js",
    "revision": "ba734392d2ed721742fc2c832170418b"
  },
  {
    "url": "/_nuxt/a14aaece437ff2489865.js",
    "revision": "eef6dba6fdcce50491346567b2418075"
  },
  {
    "url": "/_nuxt/d41a3155fde1ba3cbf2a.js",
    "revision": "a7420980169c6e291be7641b0c1f1782"
  },
  {
    "url": "/_nuxt/e53f521ba7fada9568ec.js",
    "revision": "9cce6e141ce6082ebaa662cd556ee61e"
  },
  {
    "url": "/_nuxt/f5fa6434eb78f5d3115c.js",
    "revision": "bcc61c6fe9276bd0bdf60b900f0ed31f"
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
