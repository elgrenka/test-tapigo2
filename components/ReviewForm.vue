<template>
    <form @submit.prevent="submitReview">
        <textarea v-model="reviewText" placeholder="Оставьте отзыв"></textarea>
        <button type="submit">Отправить отзыв</button>
    </form>
</template>

<script>
export default {
    data() {
        return {
            reviewText: ""
        };
    },
    methods: {
        submitReview() {
            // Обработка отправки отзыва (можно отправить на сервер или обновить состояние компонента PostDetail)
            console.log("Отправка отзыва:", this.reviewText);
            // Очистка поля отзыва после отправки
            this.reviewText = "";
        }
    }
};
</script>
