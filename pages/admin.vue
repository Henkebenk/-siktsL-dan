<template>
    <main>
        <Sky/>
        <Ground/>
        <Mountains/>
        <Trees/>
        <AdminPanel/>
    </main>
</template>
<script setup>
definePageMeta({
  middleware: 'admin-guard'
})
</script>
