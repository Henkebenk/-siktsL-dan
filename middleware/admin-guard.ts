import { defineNuxtRouteMiddleware, navigateTo } from 'nuxt/app'
import { useNuxtApp } from '#app'
import { getAuth, onAuthStateChanged } from 'firebase/auth'

export default defineNuxtRouteMiddleware(async (to, from) => {
  if (process.server) return

  const { $auth } = useNuxtApp();
  const auth = getAuth();
  
  return new Promise((resolve) => {
    onAuthStateChanged(auth, (user) => {
      if (to.path === '/admin' && !user) {
        resolve(navigateTo('/login'));
      } else if (to.path === '/login' && user) {
        resolve(navigateTo('/admin'));
      } else {
        resolve();
      }
    });
  });
});