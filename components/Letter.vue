<template>
    <div class="letter">
        <div class="content">
            <div class="letter-left">
                <h2>Detta har jag på hjärtat...</h2>
                <textarea ref="letterTextarea" rows="5"></textarea>
            </div>
            <div class="letter-right">
                <img src="../public/stamp.svg" alt="stamp" class="stamp">
                <div class="adress">
                    <div class="adress-row"></div>
                    <div class="adress-row"></div>
                    <div class="adress-row"></div>
                    <div class="adress-row"></div>
                </div>
                <div class="send">
                    <div class="send-button" @click="sendLetter">
                        <label v-if="showFullSendButton == true">Skicka</label>
                        <svg v-else xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-send-horizontal"><path d="M3.714 3.048a.498.498 0 0 0-.683.627l2.843 7.627a2 2 0 0 1 0 1.396l-2.842 7.627a.498.498 0 0 0 .682.627l18-8.5a.5.5 0 0 0 0-.904z"/><path d="M6 12h16"/></svg>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    mounted() {
        this.adjustTextareaRows();
        window.addEventListener('resize', this.adjustTextareaRows);
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.adjustTextareaRows);
    },
    data: () => ({
        showFullSendButton: true,
    }),
    methods: {
        adjustTextareaRows() {
            const textarea = this.$refs.letterTextarea;
            if (window.innerWidth > 500) {
                textarea.rows = 7;
                this.showFullSendButton = true;   
            } else {
                this.showFullSendButton = false;
                textarea.rows = 5;
            }
        },
        sendLetter() {
            this.openLid();
            const letterElement = this.$el;
            letterElement.style.animation = 'none';
            void letterElement.offsetWidth;
            letterElement.style.animation = 'insertLetter 1.5s ease-in-out';
        },
        openLid() {
            const lidElement = document.getElementById('lid');
            lidElement.style.animation = 'none';
            void lidElement.offsetWidth;
            lidElement.style.animation = 'openLid 1.5s ease-in-out';
        }
    }
}

</script>

<style>
.letter {
    max-width:600px;
    z-index: 100;
    color:#50342a;
    width:100%;
    background-color: #e6c4cf;
    border-radius: 1rem;
}
.letter h2 {
    margin:0;
    margin-bottom:0.5rem;
}
.content {
    padding:2rem;
    display:flex;
    flex-direction: row;
    gap:1rem;
    justify-content: space-between;

}
.letter-left{
    display:flex;
    flex-direction: column;
    flex-grow:2;
    height:100%;
    overflow: hidden;
}
.letter-left textarea{
    color:#50342a;
    display:block;
    height:100%;
    line-height: 28px;
    font-family: inherit;
    font-size: 1rem;
    border:none;
    background-color: #f2eeeb;
    padding:1rem;
    outline:none;
    resize: none;
    border-radius: 1rem;
    min-height:1.5rem;
}
.input{
    position:relative;
}
.info{
    position: absolute;
    bottom:1rem;
    right:1rem;
}
.letter-right{
    overflow: hidden;
    /* width:100%; */
    flex-grow:1;
    display: flex;
    flex-direction: column;
    align-items: end;
    justify-content: space-between;
    gap:1rem;
}
.stamp{
    width: 40%;
    height: auto;
    min-width: 48px;
}
.adress{
    margin-top:1rem;
    width:100%;
    display:flex;
    flex-direction: column;
    align-items: center;
    gap:1.5rem;
}
.adress-row{
    height:0.3rem;
    width:100%;
    background-color: #bf7e92;
    border-radius: 0.15rem;
}
.send-button{
    background-color: #f2eeeb;
    padding:1rem 2rem;
    border-radius: 2rem;
    cursor: pointer;
}
.send-button:hover {
    background-color: #bf7e92;
    color: white;
}
.send-button label, .send-button svg{
    cursor: pointer;
}
@media screen and (max-width: 800px){
    .letter h2 {
        font-size: 1.2rem;
    }
    .content {
        padding: 1rem;
    }
    .letter textarea{
        padding:0.5rem;
    }
    .send-button{
        padding:1rem 1rem;
    }
    .adress{
        gap:1rem;
    }
}
@media screen and (max-width: 500px){
    .send-button{
        padding:0.5rem;
        display:flex;
        align-items: center;
        justify-content: center;
    }
    
}
@keyframes insertLetter {
    0% {
        transform: scale(1) translateY(0);
    }
    50% {
        transform: scale(0.5) translateY(20dvh);
        z-index: 15;
    }
    100% {
        transform: scale(0.4) translateY(150dvh);
        z-index: 15;
    }
}
</style>