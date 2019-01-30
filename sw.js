importScripts('/_nuxt/workbox.dev.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/626abee6ee65fcaae4b4.js",
    "revision": "768006f68b1b66ab3a918847c7deb9b7"
  },
  {
    "url": "/_nuxt/626fbb5a828981418729.js",
    "revision": "edb5c184aaea7abda52ed017180dd701"
  },
  {
    "url": "/_nuxt/67c4630d5ec671565112.js",
    "revision": "70058e83fbcd20578d7ce4609b34c35e"
  },
  {
    "url": "/_nuxt/7a918a59ecd9ba29fe4f.js",
    "revision": "d901716c2167e2140ed036dac1b97c47"
  },
  {
    "url": "/_nuxt/d9a523fc24863f177b49.js",
    "revision": "cb6aa68375e9adade687b821e86ef0e6"
  },
  {
    "url": "/_nuxt/d9d3f75d56211285785c.js",
    "revision": "383e095346afbf56857fcc74059f0ccb"
  },
  {
    "url": "/_nuxt/ecbd0b82812964a6246e.js",
    "revision": "ddc32ecd3328c70a30c66fc41dab9753"
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
