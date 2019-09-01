declare module 'sentry' {
  import { default as _Vue } from 'vue'

  import * as Sentry from '@sentry/browser'

  module 'vue/types/vue' {
    interface Vue {
      $sentry: typeof Sentry
    }
  }
}
