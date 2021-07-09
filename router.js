import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export function createRouter() {
  const router = new Router({
    prefetchLinks: false,
    mode: 'history',
    routes: [
      {
        path: '/',
        name: 'index',
        component: require('@/pages').default
      },
      {
        path: '/quote',
        name: 'quote',
        component: require('@/pages/my-account/quote').default
      }
    ]
  })

  return router
}
