import { ViteSSG } from 'vite-ssg'
import App from './App.vue'
import { routes } from './routes'
import { registerComponents } from './components'

import './styles/tokens.css'
import './styles/base.css'
import './styles/layout.css'

export const createApp = ViteSSG(
  App,
  {
    routes,
    scrollBehavior(to, from, saved) {
      if (saved) return saved
      if (to.hash) return { el: to.hash }
      return { top: 0 }
    },
  },
  ({ app }) => {
    registerComponents(app)
  },
)
