<template>
    <div class="admin">
            <div class="admin-panel">
                <h2>Adminpanel</h2>
                <div class="button-row">
                    <button @click="logout">Logga ut</button>
                    <div class="refresh-button">
                        <RefreshCcw @click="getPosts" />
                    </div>
                </div>
                <div class="posts">
                    <div v-for="post in posts" :key="post.id" class="pots">
                        <div class="time">{{ post.time }}</div>
                        <div>{{ post.message }}</div>
                    </div>
                </div>
            </div>
    </div>
</template>

<script setup>
import { RefreshCcw } from 'lucide-vue-next';
</script>

<script>
import { getAuth, signOut } from 'firebase/auth';
import { getFirestore, collection, getDocs, query, orderBy } from 'firebase/firestore';

export default {
    data() {
        return {
            posts: []
        };
    },
    methods: {
        logout() {
            const auth = getAuth();
            signOut(auth)
                .then(() => {
                    console.log('User signed out');
                    this.$router.push('/');
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        async getPosts() {
            this.posts = [];
            const db = getFirestore();
            const postsCollection = collection(db, 'asikter');
            const postsQuery = query(postsCollection, orderBy('time', 'desc'));
            const postsSnapshot = await getDocs(postsQuery);

            const currentYear = new Date().getFullYear();

            postsSnapshot.forEach(doc => {
                const postData = doc.data();
                const postDate = postData.time.toDate();

                const postYear = postDate.getFullYear();
                const dateOptions = postYear === currentYear 
                    ? { day: 'numeric', month: 'short' }
                    : { day: 'numeric', month: 'short', year: 'numeric' };

                const timeOptions = { hour: '2-digit', minute: '2-digit' };

                const date = new Intl.DateTimeFormat('sv-SE', dateOptions).format(postDate);
                const time = new Intl.DateTimeFormat('sv-SE', timeOptions).format(postDate);

                postData.time = `${date}, ${time}`;
                this.posts.push(postData);
            });
        }

    },
    mounted() {
        this.getPosts();
    }
}
</script>

<style>
.refresh-button {
    background-color: #f2eeeb;
    padding:1rem 1rem;
    border-radius: 2rem;
    aspect-ratio: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    cursor: pointer;
}
.refresh-button img:hover {
    background-color: #bf7e92;
    color: white;
}
.refresh-button:hover {
    background-color: #bf7e92;
    color: white;
}
.refresh-button svg {
    width: 1.5rem;
    height: 1.5rem;
}
.button-row {
    display: flex;
    justify-content: space-between;
    width: 100%;
}
.time {
    font-size: 0.75rem;
    color: #bf7e92;
}
.admin {
    width: 100%;
    height: 100dvh;
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;
}
.admin h2 {
    margin: 0;
}
.admin-panel { 
    overflow-y: scroll; 
    padding: 2rem; 
    margin: 2rem; 
    max-width: 600px; 
    color: #50342a; 
    background-color: #e6c4cf; 
    display: flex; 
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    border-radius: 1rem;
    width: calc(100% - 6rem);
    scrollbar-width: none;
}

.admin-panel::-webkit-scrollbar { 
    display: none;
} 
.wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
}
.admin-container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 2rem;
}
.posts {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    height: auto;
}
.pots {
    background-color: #f2eeeb;
    color: #50342a;
    padding: 1rem;
    width: 100%;
    border-radius: 1rem;
}
</style>