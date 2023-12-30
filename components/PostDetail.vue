<template>
    <div>
        <img :src="post.image" alt="Post Image" />
        <h1>{{ post.title }}</h1>
        <p>{{ post.description }}</p>
        <p>Дата публикации: {{ post.date }}</p>

        <!-- Добавьте компонент для отзывов -->
        <ReviewForm />
        <ReviewList :reviews="post.reviews" />
    </div>
</template>

<script>
import ReviewForm from "@/components/ReviewForm";
import ReviewList from "@/components/ReviewList";

export default {
    data() {
        return {
            post: {
                id: 1,
                title: "Заголовок поста 1",
                description: "Подробное описание поста 1",
                image: "/images/1.jpg",
                date: "2023-01-01",
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
                ]
            }
        };
    },
    components: {
        ReviewForm,
        ReviewList
    }
};
</script>
