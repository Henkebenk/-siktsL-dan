import { defineNuxtRouteMiddleware, navigateTo } from 'nuxt/app'
import { useNuxtApp } from '#app'

export default defineNuxtRouteMiddleware(async (to, from) => {
  if (process.server) return

  const { $auth } = useNuxtApp();
  const user = $auth?.currentUser;

  if (to.path === '/admin' && !user) {
    return navigateTo('/login')
  } else if (to.path === '/login' && user) {
    return navigateTo('/admin')
  }
});
