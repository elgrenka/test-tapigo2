<template>
    <div>
        <img :src="'/images/' + post.id + '.jpg'" alt="Post Image" />
        <h1>{{ post.title }}</h1>
        <p>{{ post.description }}</p>
        <p>Дата публикации: {{ post.date }}</p>
        <ReviewForm />
        <!-- Добавьте остальные данные о посте -->
    </div>
</template>

<script>
import post from "../Post.vue";
import ReviewForm from "~/components/ReviewForm.vue";

export default {
    comments: {
        ReviewForm,
    },
    computed: {
        post() {
            return post
        }
    },
    async asyncData({ params }) {
        // Здесь вы можете использовать параметр из URL, чтобы загрузить данные о посте
        const postId = params.id;

        // Вместо заглушки вам нужно получить реальные данные о посте, например, из API
        const post = {
            id: postId,
            title: `Заголовок поста ${postId}`,
            description: `Подробное описание поста ${postId}`,
            date: "2024-01-01",
            reviews: [
                {
                    id: 1,
                    text: "Отзыв к посту",
                    date: "2023-01-02",
                    replies: [
                        {
                            id: 2,
                            text: "Ответ на отзыв",
                            date: "2023-01-03"
                        }
                    ]
                }
            ],
        };

        return { post };
    },
};
</script>
