importScripts('/_nuxt/workbox.dev.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/16e54a40093198d167f9.js",
    "revision": "0788ee532d3f537c8ab5972748509a1c"
  },
  {
    "url": "/_nuxt/273a76409f7c181ae32d.js",
    "revision": "7befb830d1446e04f92f1b6891a3a1ec"
  },
  {
    "url": "/_nuxt/39d9b3f4b0fe93479faf.js",
    "revision": "d279dda6a4d3d69d024a6ed2f64af232"
  },
  {
    "url": "/_nuxt/4594e5057772211acedb.js",
    "revision": "fd36c45c9d3a91afd2c592be12a7e479"
  },
  {
    "url": "/_nuxt/593d93f89257de3d7162.js",
    "revision": "8cb48fa6463a6e7b5b0fb1d7f2725a31"
  },
  {
    "url": "/_nuxt/796fe32d1339764ce1ed.js",
    "revision": "601d7e13ea0ee88fc8268d6993c43955"
  },
  {
    "url": "/_nuxt/ce2da9d5615d1824301e.js",
    "revision": "9f06528fc7b2c08a2e4816542c01aec5"
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
