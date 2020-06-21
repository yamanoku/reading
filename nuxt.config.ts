import { Configuration } from '@nuxt/types'
import axios from 'axios'
import emoji from 'node-emoji'
import Fiber from 'fibers'
import Sass from 'sass'
import { TOKEN } from './static/config'

const nuxtConfig: Partial<Configuration> = {
  mode: 'universal',
  target: 'static',
  telemetry: false,
  head: {
    title: 'READING...',
    htmlAttrs: {
      lang: 'ja'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: '@yamanoku Reading News List'
      },
      {
        hid: 'og:image',
        name: 'og:image',
        content: 'https://yamanoku.net/reading/icon.png'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  css: ['modern-normalize'],
  build: {
    extend (config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        if (!config.module) {
          return
        }
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    quiet: false,
    loaders: {
      scss: {
        implementation: Sass,
        sassOptions: {
          fiber: Fiber
        }
      }
    }
  },
  buildModules: [
    [
      '@nuxt/typescript-build',
      {
        typeCheck: true,
        ignoreNotFoundWarnings: true
      }
    ]
  ],
  generate: {
    routes () {
      return [
        '/archive/2019',
        '/archive/2018'
      ]
    }
  },
  plugins: ['~/plugins/vue-paginate', '~/plugins/vue-axe'],
  modules: ['@nuxtjs/feed', '@nuxtjs/pwa'],
  feed: [
    {
      path: '/feed.xml',
      async create (feed: any) {
        feed.options = {
          title: 'Reading…',
          link: 'https://reading.yamanoku.net/feed.xml',
          description: "yamanoku's reading feed"
        }
        const posts = await (await axios.get(TOKEN)).data.api
        const urlRender = function (text: string) {
          if (text === null) {
            return
          }
          return text.match(/ <([^\s]+)/)![1].slice(0, -1)
        }
        const emojiRender = function (text: string) {
          return emoji.emojify(text)
        }
        posts.forEach(
          (post: { attachments: { [key: number]: any }; iid: string }) => {
            if (!post.attachments[0].title) {
              feed.addItem({
                title: emojiRender(post.attachments[0].text),
                guid: post.iid,
                link: urlRender(post.attachments[0].text)
              })
            } else {
              feed.addItem({
                title: emojiRender(post.attachments[0].title),
                guid: post.iid,
                link: post.attachments[0].title_link
              })
            }
          }
        )
      },
      cacheTime: 1000 * 60 * 15,
      type: 'rss2'
    }
  ],
  workbox: {
    dev: true
  },
  manifest: {
    name: 'READING...',
    short_name: 'READING...',
    title: 'READING...',
    'og:title': 'READING...',
    description: '@yamanoku Reading News List',
    'og:description': '@yamanoku Reading News List',
    lang: 'en',
    theme_color: '#f9f9f9',
    background_color: '#f9f9f9'
  }
}

module.exports = nuxtConfig
