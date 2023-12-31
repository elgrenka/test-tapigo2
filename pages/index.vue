<template>
    <div>
        <h1>Список постов</h1>
        <PostsList :posts="posts" />
    </div>
</template>

<script>
import PostsList from "@/components/PostsList";

export default {
    components: {
        PostsList,
    },
    data() {
        return {
            posts: [
                {id: 1, title: "Заголовок поста 1", description: "Мини описание поста 1"},
                {id: 2, title: "Заголовок поста 2", description: "Мини описание поста 2"},
                {id: 3, title: "Заголовок поста 3", description: "Мини описание поста 3"},
            ],
        };
    },
};
</script>


