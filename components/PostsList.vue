<template>
    <div>
        <div v-for="post in posts" :key="post.id" class="post-card">
            <img :src="post.image" alt="Post Image" class="post-image" />
            <h3>{{ post.title }}</h3>
            <p>{{ post.description }}</p>
            <router-link :to="'/post/' + post.id">Подробнее</router-link>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            posts: [
                {
                    id: 1,
                    title: "Заголовок поста 1",
                    description: "Мини описание поста 1",
                    image: "/images/1.jpg"
                },
                {
                    id: 2,
                    title: "Заголовок поста 2",
                    description: "Мини описание поста 2",
                    image: "/images/2.jpg"
                },
                {
                    id: 3,
                    title: "Заголовок поста 3",
                    description: "Мини описание поста 3",
                    image: "/images/3.jpg"
                },
            ]
        };
    }
};
</script>

<style scoped>
.post-card {
    border: 1px solid #ccc;
    padding: 10px;
    margin: 10px;
}

.post-image {
    max-width: 100%;
}
</style>
