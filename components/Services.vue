<template>
    <section class="section services">
        <div class="services-title">наши услуги</div>
        <div class="container">
            <div class="services-list">
                <div v-for="item in services" :key="item.name" class="services-list__item">
                    <img :src="require(`@/assets/images/${item.image}.png`)" alt="" class="services-list__img">
                    <div class="services-list__text" v-html="item.name"></div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    name: 'Services',
    data: () => ({
        services: [
            {
                image: "truck",
                name: "перевозка<br/>негабаритных<br/>грузов"
            },
            {
                image: "liebherr",
                name: "аренда<br/>автокранов"
            },
            {
                image: "manic",
                name: "манипулятор"
            },
            {
                image: "collect",
                name: "перевозка<br/>сборных<br/>грузов"
            },
            {
                image: "strahovanie",
                name: "страхование<br/>грузов"
            },
            {
                image: "tyazh",
                name: "перевозка<br/>негабаритных<br/>грузов"
            },
            {
                image: "zhd",
                name: "перевозка<br/>ж/д"
            },
            {
                image: "escort",
                name: "сопровождение<br/>грузов"
            },
            {
                image: "order",
                name: "изготовление<br/>спецразрешения для<br/>перевозки<br/>негабаритных грузов"
            },
        ]
    })
}
</script>