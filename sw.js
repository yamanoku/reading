importScripts('/_nuxt/workbox.dev.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/060b7f970d8428605a85.js",
    "revision": "b3230aee62bc3be2546876d981fd57af"
  },
  {
    "url": "/_nuxt/16d0b92d3d87cececed3.js",
    "revision": "fadfc761baf3451d02c022b1924f1583"
  },
  {
    "url": "/_nuxt/2715cded3f7163a2fde7.js",
    "revision": "5e4f7c3dcd3b1dc678cab41897247738"
  },
  {
    "url": "/_nuxt/7cd049c1fd836ded465e.js",
    "revision": "4e156fe8570afd4555b08bfe80655596"
  },
  {
    "url": "/_nuxt/9f7f97058c4c6f5512da.js",
    "revision": "085bf57ab1729e1e38127d048c2dcd0d"
  },
  {
    "url": "/_nuxt/e5c5c8da2b236e7fe1aa.js",
    "revision": "a86a07b72b8c38b40fbbf8bf8cb3a1e9"
  },
  {
    "url": "/_nuxt/fec262e98be5c73415ac.js",
    "revision": "32adefebc81e607997d3724c4a4ed561"
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
