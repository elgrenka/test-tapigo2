<template>
    <div>
        <div v-for="review in reviews" :key="review.id" class="review">
            <p>{{ review.text }}</p>
            <p>Дата: {{ review.date }}</p>

            <!-- Рекурсивно вложенные отзывы -->
            <ReviewList :reviews="review.replies" v-if="review.replies && review.replies.length" />

            <!-- Компонент для формы ответа на отзыв -->
            <ReviewForm @submitReview="submitReply(review.id)" />
        </div>
    </div>
</template>

<script>
import ReviewForm from "@/components/ReviewForm";

export default {
    props: {
        reviews: {
            type: Array,
            default: () => []
        }
    },
    components: {
        ReviewForm
    },
    methods: {
        submitReply(parentId) {
            // Обработка отправки ответа на отзыв
            console.log(`Отправка ответа на отзыв ${parentId}`);
            // Возможно, нужно обновить состояние компонента PostDetail
        }
    }
};
</script>

<style scoped>
.review {
    border: 1px solid #ddd;
    padding: 10px;
    margin: 10px;
}
</style>
