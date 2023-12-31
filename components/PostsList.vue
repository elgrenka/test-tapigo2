<template>
    <div>
        <div v-for="post in posts" :key="post.id" class="post-card">
            <img :src="'/images/' + post.id + '.jpg'" alt="Post Image" class="post-image" />
            <h3>{{ post.title }}</h3>
            <p>{{ post.description }}</p>
            <router-link :to="'/post/' + post.id">Подробнее</router-link>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        posts: {
            type: Array,
            default: () => [],
        },
    },
};
</script>

<style scoped>
    img {
        width: 200px;
    }
</style>
