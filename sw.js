importScripts('/_nuxt/workbox.dev.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/0ca5aeafafa65a67a0b9.js",
    "revision": "d4b57d71915611cf5c7b0a253230f320"
  },
  {
    "url": "/_nuxt/29f2f55b6d68942cd0bb.js",
    "revision": "5eb53a5f5a86079534584d6ef558bdc1"
  },
  {
    "url": "/_nuxt/59ed56982a69b9ea65ac.js",
    "revision": "c918572df83d6fd9fbfd5f06bfe72f1d"
  },
  {
    "url": "/_nuxt/5ac530dc4a131eee1079.js",
    "revision": "7bbffe8fb13116a78141c1b4a1fde429"
  },
  {
    "url": "/_nuxt/5ec12b01e4233b08671e.js",
    "revision": "b94139aec12205f82e10ce6cf42bd243"
  },
  {
    "url": "/_nuxt/bd7ed51ad1a6c211cffb.js",
    "revision": "28e8eabdcbed85b4186a6e4724246663"
  },
  {
    "url": "/_nuxt/cf8b9982c8c679048b7c.js",
    "revision": "a5a0387892e29b1ae3aad7f5676c26a0"
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
