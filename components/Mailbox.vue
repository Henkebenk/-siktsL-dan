<template>
    <div class="mailbox">
        <div class="upper">
            <div class="post-container">
                <div class="post">
                </div>
            </div>
            <div class="box">
                <img src="../public/mailbox_bottom.svg" alt="mailbox bottom">
                <div class="mailbox-tag">Åsiktslådan</div>
            </div>
            <div class="lid">
                <img src="../public/mailbox_lid.svg" alt="mailbox lid">
            </div>
        </div>

    </div>
</template>

<style>
.mailbox {
    width: 100%;
    height: 100dvh;
    position:absolute;
    display:flex;
    flex-direction: column;
    justify-content: flex-end;
}
.upper{
    position: relative;
    padding-left:2rem;
    padding-right:2rem;
    height:50%;
    width:auto;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.lid{
    position: absolute;
    top:0;
}
.lid img{
    width:100%;
    height: auto;
}
.box{
    max-width:300px;
    width:70%;
    position: absolute;
    top:20px;
    display:flex;
    flex-direction: column;
    align-items: center;
    gap:1rem;
}
.box img{
    width:100%;
    height: auto;
}
.mailbox-tag{
    padding:0.5rem;
    background-color: #e6c4cfff;
    position: absolute;
    border-radius: 1rem;
    top: 20%;
    width:80%;
    text-align: center;
    font-size: 1.5rem;
    color:#50342a;
}
.post-container{
    position:absolute;
    width:100%;
    height:100%;
    display:flex;
    justify-content: center;
    align-items: flex-end;
}
.post {
    background-color:#50342aff;
    width:10%;
    max-width:50px;
    height:90%;
    position:absolute;
    margin:0 auto;
}
</style>