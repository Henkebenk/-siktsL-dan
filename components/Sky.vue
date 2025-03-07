<template>
    <div class="sky">
        <div class="clouds"></div>
    </div>
</template>

<script>
export default {
    mounted() {
        this.startAnimation();
    },
    methods: {
        startAnimation() {
            const cloudsElement = this.$el.querySelector('.clouds');
            cloudsElement.style.animation = 'scrollBackground 720s linear infinite';
        }
    }
};
</script>

<style>
.sky {
    position: absolute;
    z-index: -4;
    width: 100%;
    height: 100dvh;
    background-image: linear-gradient(#759bf8, #a3eaf1);
    overflow: hidden;
}

.clouds {
    position: absolute;
    top: 0;
    width: 100%;
    height: 50%;
    background-image: url('@/public/clouds.svg');
    background-repeat: repeat-x;
    background-size: cover;
    overflow: hidden;
    animation: scrollBackground 60s linear infinite;
}

@media screen and (max-width: 800px){
    .clouds {
        height: 80%;
    }
}

@keyframes scrollBackground {
    0% {
        background-position: 0 0;
    }
    100% {
        background-position: -30000px 0;
    }
}
</style>