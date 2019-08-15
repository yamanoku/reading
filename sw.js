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
    "url": "/_nuxt/5ec12b01e4233b08671e.js",
    "revision": "b94139aec12205f82e10ce6cf42bd243"
  },
  {
    "url": "/_nuxt/6391c3ebc9ba32a21577.js",
    "revision": "1377f92f285a3467b92c5859cc2c1804"
  },
  {
    "url": "/_nuxt/a989c8ba40ca93d61994.js",
    "revision": "b3ff9afdeda8305defc178d196ec62bc"
  },
  {
    "url": "/_nuxt/bd7ed51ad1a6c211cffb.js",
    "revision": "28e8eabdcbed85b4186a6e4724246663"
  },
  {
    "url": "/_nuxt/e103ae562a23f00eb5b6.js",
    "revision": "5b0fdb1506a5ad048a7bd7cfa664cca0"
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
