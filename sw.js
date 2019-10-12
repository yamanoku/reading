importScripts('/_nuxt/workbox.dev.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/31cae91e6f73cdafe63c.js",
    "revision": "c1a952354aa65fd28d97c1b12a3ab276"
  },
  {
    "url": "/_nuxt/724622bac0b7b1122078.js",
    "revision": "a3fa0eec8b1a890fbeacb86d13e5980d"
  },
  {
    "url": "/_nuxt/78a820ef207e4a0ec84d.js",
    "revision": "50f5d5d4632a16ffdf953138523fb432"
  },
  {
    "url": "/_nuxt/8354df8884bb1cac7b81.js",
    "revision": "dac909250823fea8039b20d596a96c13"
  },
  {
    "url": "/_nuxt/9063291d4d5f0c0f34f0.js",
    "revision": "458fd7f4a78de5bc5f643f9802532910"
  },
  {
    "url": "/_nuxt/e8f98c6bbfba6c22952a.js",
    "revision": "4abc686b021a8e852b0b99738a55ffe8"
  },
  {
    "url": "/_nuxt/f7c3477166918e8bb03b.js",
    "revision": "ee6659f63e0c2985e94daf46b3292049"
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
