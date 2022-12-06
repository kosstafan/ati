<template>
    <div class="promo">
        <div class="container">
            <div class="promo__title">
                грузоперевозки<br/>любой сложности
            </div>
        </div>
        <div class="container">
            <button class="button button_big" @click="$emit('openForm')">заказать грузоперевозку</button>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Promo'
}
</script>