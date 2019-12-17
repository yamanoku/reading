importScripts('/_nuxt/workbox.dev.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/24f609a79195c5196c3d.js",
    "revision": "306beadb7e49f9dc22a0562e57b958fa"
  },
  {
    "url": "/_nuxt/26870a6feedeb4ebfc57.js",
    "revision": "c1dacc11dbbd9bd3cb5f542ec1e682dd"
  },
  {
    "url": "/_nuxt/45b0141e5e41760f4085.js",
    "revision": "a4eef9bda05841a5cd2b4f940147835d"
  },
  {
    "url": "/_nuxt/4e5fbb120cb7499b39f4.js",
    "revision": "952d5f07758114be07e74a4a6ff70ca4"
  },
  {
    "url": "/_nuxt/6be6a013b5b8e1df2d60.js",
    "revision": "7db6c74645070ee03b824499fca2d85b"
  },
  {
    "url": "/_nuxt/81575f269f2ceb2deece.js",
    "revision": "22252cd234589219fbef3d4e5fc476d3"
  },
  {
    "url": "/_nuxt/c830d39faa270096d654.js",
    "revision": "5bc81998ed5f4944bab61b714e31caf0"
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
