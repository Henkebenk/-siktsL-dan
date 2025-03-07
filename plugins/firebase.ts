// plugins/firebase.ts
import { defineNuxtPlugin } from '#app';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

export default defineNuxtPlugin(nuxtApp => {
    const config = useRuntimeConfig();

    const firebaseConfig = {
        apiKey: config.public.firebaseApiKey,
        authDomain: "asiktsladan-b349f.firebaseapp.com",
        projectId: "asiktsladan-b349f",
        storageBucket: "asiktsladan-b349f.firebasestorage.app",
        messagingSenderId: "1072587709437",
        appId: "1:1072587709437:web:8ef408be5231e62af8d794",
        measurementId: "G-57D9TSXES9"
    };

    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);

    return {
        provide: {
            firebaseApp: app,
            auth
        }
    };
});
