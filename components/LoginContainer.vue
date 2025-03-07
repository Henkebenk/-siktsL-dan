<template>
    <div class="login">
        <div class="login-container">
            <h1>Admin | Logga in</h1>
            <input type="text" placeholder="E-post" v-model="email" @keyup.enter="login">
            <input type="password" placeholder="Lösenord" v-model="password" @keyup.enter="login">
            <label v-if="errorMsg !=''">{{errorMsg}}</label>
            <div class="button-large button-wide" @click="login">Logga in</div>
        </div>
    </div>
</template>

<script>
import { getAuth, signInWithEmailAndPassword, setPersistence, browserLocalPersistence } from 'firebase/auth';
import { useRouter } from 'vue-router';

export default {
    data: () => ({
        email: '',
        password: '',
        errorMsg: '',
    }),
    methods: {
        async login() {
            const auth = getAuth();
            setPersistence(auth, browserLocalPersistence)
                .then(() => {
                    return signInWithEmailAndPassword(auth, this.email, this.password);
                })
                .then((userCredential) => {
                    const user = userCredential.user;
                    console.log(user);
                    this.$router.push('/admin');
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorCode, errorMessage);
                    switch(errorCode) {
                        case 'auth/invalid-email':
                            this.errorMsg = 'Ogiltig e-postadress';
                            break;
                        case 'auth/user-not-found':
                            this.errorMsg = 'Användaren hittades inte';
                            break;
                        case 'auth/missing-password':
                            this.errorMsg = 'Lösenord saknas';
                            break;
                        case 'auth/invalid-credential':
                            this.errorMsg = 'Fel e-postadress eller lösenord';
                            break;
                        default:
                            this.errorMsg = errorMessage;
                    }
                });
        }
    }
}
</script>
<style>
.login {
    width:100%;
    width:100%;
    height:100dvh;
    position:absolute;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.login-container {
    color:#50342a;
    background-color: #e6c4cf;
    padding:2rem;
    display:flex;
    flex-direction: column;
    gap:1rem;
    align-items: center;
    border-radius: 1rem;
}
input{
    font-family: inherit;
    padding:0.5rem;
    border-radius: 1rem;
    border:none;
    background-color: #f2eeeb;
    outline:none;
    color:#50342a;
    width:100%;
}
.login-container h1 {
    margin:0;
}

</style>