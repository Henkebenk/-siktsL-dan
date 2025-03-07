<template>
    <NuxtPage />
</template>

<script setup>
const auth = useNuxtApp().$auth;

// onMounted(() => {
//     auth.onAuthStateChanged(user => {
//         if (user) {
//             console.log('User is signed in:', user);
//         } else {
//             console.log('No user is signed in');
//         }
//     });
// });
</script>
