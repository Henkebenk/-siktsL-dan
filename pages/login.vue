<template>
    <main>
        <Sky/>
        <Ground/>
        <Mountains/>
        <Trees/>
        <LoginContainer/>
    </main>
</template>
<script setup>
definePageMeta({
  middleware: 'admin-guard'
})
</script>