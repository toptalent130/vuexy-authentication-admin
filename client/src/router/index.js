import Vue from 'vue'
import VueRouter from 'vue-router'

// Routes
import { canNavigate } from '@/libs/acl/routeProtection'
import { isUserLoggedIn, getUserData, getHomeRouteForLoggedInUser } from '@/auth/utils'
import pages from './routes/pages'
import dashboard from './routes/dashboard'
import users from './routes/users'
import store from '@/store'
Vue.use(VueRouter)

const trigger = ['auth-login', 'auth-login-v1', 'auth-login-v2', 'auth-register', 'auth-register-v1', 'auth-register-v2', 'auth-forgot-password', 'auth-forgot-password-v1', 'auth-forgot-password-v2', 'auth-reset-password-v1', 'auth-reset-password-v2']
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior() {
    return { x: 0, y: 0 }
  },
  routes: [
    { path: '/', redirect: { name: 'home' } },
    ...pages,
    ...dashboard,
    ...users,
    {
      path: '*',
      redirect: 'error-404',
    },
  ],
})

router.beforeEach((to, from, next) => {
  if (localStorage.getItem('token')) {
    if (trigger.indexOf(to.name) >= 0)
      return next({ name: 'home'})
    return next()
  } else {
    if (trigger.indexOf(to.name) >= 0)
      return next()
    return next({ name: 'auth-login' })
  }
})

router.afterEach(() => {
  // Remove initial loading
  const appLoading = document.getElementById('loading-bg')
  if (appLoading) {
    appLoading.style.display = 'none'
  }
})

export default router
