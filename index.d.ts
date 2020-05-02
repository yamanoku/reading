declare module 'sentry' {
  import { default as _Vue } from 'vue' // eslint-disable-line

  import * as Sentry from '@sentry/browser'

  module 'vue/types/vue' {
    interface Vue {
      $sentry: typeof Sentry
    }
  }
}
