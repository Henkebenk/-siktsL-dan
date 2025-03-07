<template>
    <div class="mailbox">
        <div class="post-container">
            <div class="post"></div>
        </div>
        <div class="upper">
            <div class="box">
                <div class="box-frame">
                    <img
                        src="../public/mailbox_inside.svg"
                        alt="mailbox inside"
                        class="box-inside"
                    />
                    <div class="box-outside"></div>
                </div>
                <div class="mailbox-label">Åsiktslådan</div>
            </div>
            <div class="lid" id="lid">
                <img src="../public/mailbox_lid.svg" alt="mailbox lid" />
            </div>
        </div>
    </div>
</template>

<style>
.mailbox {
    width: 100%;
    height: 100dvh;
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
}
.upper {
    position: relative;
    padding-left: 2rem;
    padding-right: 2rem;
    height: 50%;
    width: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
}
.lid {
    z-index: 30;
    position: absolute;
    top: 0;
    transform-origin: top;
}
.lid img {
    width: 100%;
    height: auto;
}
.box {
    max-width: 310px;
    width: 75%;
    position: absolute;
    top: 0.5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
}
.box img {
    width: 100%;
    height: auto;
}
.box-frame {
    display: flex;
    flex-direction: column;
}
.box-inside {
    z-index: 10;
}
.box-outside {
    z-index: 20;
    background-color: #bf7e92ff;
    border-radius: 0 0 1rem 1rem;
    aspect-ratio: 3/3;
}
.mailbox-label {
    z-index: 40;
    padding: 0.5rem;
    background-color: #e6c4cfff;
    position: absolute;
    border-radius: 1rem;
    top: 30%;
    width: 80%;
    text-align: center;
    font-size: 1.5rem;
    color: #50342a;
}
.post-container {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
}
.post {
    background-color: #50342aff;
    width: 10%;
    max-width: 50px;
    height: 45%;
    position: absolute;
    margin: 0 auto;
}
@keyframes openLid {
    0% {
        transform: scaleY(1);
    }
    40% {
        transform: scaleY(-1.5);
    }
    50% {
        z-index: 10;
    }
    60% {
        transform: scaleY(-1.5);
        z-index: 10;
    }
    100% {
        transform: scaleY(1);
    }
}
/* @media screen and (max-height: 800px) {
    .upper {
        transform: scale(0.65);
    }
    .post{
        height: 30%;
    }
} */

</style>
