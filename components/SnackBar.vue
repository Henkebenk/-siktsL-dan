<template>
    <div v-if="visible" class="snackbar" ref="snackbar">
        <div class="snackbar-message">
            {{ localMessage }}
        </div>
        <div class="snackbar-icon">
            <Check />
        </div>
    </div>
</template>

<script setup>
import { ref, defineExpose } from 'vue';
import { Check } from "lucide-vue-next";

const visible = ref(false);
const localMessage = ref('');

function show(snackbarMessage) {
    localMessage.value = snackbarMessage;
    visible.value = true;
    setTimeout(() => {
        visible.value = false;
    }, 3000);
}

defineExpose({ show });
</script>

<style scoped>
.snackbar-message, .snackbar-icon {
    padding:0.5rem;
    background-color: #f2eeeb;
    color:#50342a;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 1rem;
}
.snackbar {
    display: flex;
    gap:1rem;
    position: fixed;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    background-color: #e6c4cf;
    padding: 1rem;
    border-radius: 2rem;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
    z-index: 1000;
    animation: appear 3.1s;
}
@keyframes appear {
    0%{ transform: translateY(-50px) translateX(-50%); }
    10%, 90% { transform: translateY(20px) translateX(-50%); }
    100% { transform: translateY(-70px) translateX(-50%); }
}
</style>