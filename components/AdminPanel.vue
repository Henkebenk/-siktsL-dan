<template>
    <div class="admin">
        <div class="admin-panel">
            <h2>Adminpanel</h2>
            <div class="button-row">
                <div class="flex-row">
                    <div class="button-large" @click="home"><House/></div>
                    <div class="button-large" @click="logout"><LogOut/></div>
                </div>
                <div class="button-large">
                    <RefreshCcw @click="getPosts" />
                </div>
            </div>
            <div class="posts">
                <div v-for="post in posts" :key="post.id" class="pots">
                    <div class="post-row">
                        <div class="post-info">
                            <div class="time">{{ post.time }}</div>
                            <div v-if="post.message != ''">
                                {{ post.message }}
                            </div>
                            <div v-else class="message-missing">
                                Tomt meddelande
                            </div>
                        </div>
                        <div class="delete">
                            <div class="delete-button" @click="deletePost(post.id)"><Trash2 /></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { RefreshCcw, Trash2, House, LogOut } from "lucide-vue-next";
</script>

<script>
import { getAuth, signOut } from "firebase/auth";
import {
    getFirestore,
    collection,
    getDocs,
    query,
    orderBy,
    deleteDoc,
    doc
} from "firebase/firestore";

export default {
    data() {
        return {
            posts: [],
        };
    },
    methods: {
        home() {
            this.$router.push("/");
        },
        logout() {
            const auth = getAuth();
            signOut(auth)
                .then(() => {
                    console.log("User signed out");
                    this.$router.push("/login");
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        async getPosts() {
            const db = getFirestore();
            const postsCollection = collection(db, "asikter");
            const postsQuery = query(postsCollection, orderBy("time", "desc"));
            const postsSnapshot = await getDocs(postsQuery);

            const currentYear = new Date().getFullYear();

            var new_posts = [];
            postsSnapshot.forEach((doc) => {
                const postData = doc.data();
                const postDate = postData.time.toDate();

                const postYear = postDate.getFullYear();
                const dateOptions =
                    postYear === currentYear
                        ? { day: "numeric", month: "short" }
                        : { day: "numeric", month: "short", year: "numeric" };

                const timeOptions = { hour: "2-digit", minute: "2-digit" };

                const date = new Intl.DateTimeFormat(
                    "sv-SE",
                    dateOptions
                ).format(postDate);
                const time = new Intl.DateTimeFormat(
                    "sv-SE",
                    timeOptions
                ).format(postDate);

                postData.time = `${date}, ${time}`;
                postData.id = doc.id;
                new_posts.push(postData);
            });
            this.posts = new_posts;
        },
        async deletePost(postId) {
            const db = getFirestore();
            await deleteDoc(doc(db, "asikter", postId));
            this.getPosts();
        }
    },
    mounted() {
        this.getPosts();
    },
};
</script>

<style>
.flex-row {
    display: flex;
    gap: 1rem;
}
.message-missing {
    color: #a17e72;
}
.post-row {
    display: flex;
    justify-content: space-between;
    width: 100%;
}
.delete {
    opacity: 0;
    cursor: pointer;
    transition: opacity 0.1s;
}
.post-row:hover .delete {
    opacity: 1;
}
.delete:hover {
    color: #bf7e92;
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
