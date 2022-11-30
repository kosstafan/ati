<template>
    <section class="section price">
        <div class="about-title">цены</div>
        <div class="container">
            <div class="price__description">
                Внимание!!! Цены на услуги рассчитываются индивидуально, исходя из размеров груза и дальности расстояния. По вопросам стоимости обращайтесь к нашим менеджерам<br/>8 932 012 20 65<br/>Мы всегда на связи!
            </div>
        </div>
        <div class="services-title">наша работа</div>
        <div class="container">
            <div class="price-list">
                <div v-for="(item, index) in items" :key="index" class="price-list__item">
                    <img v-if="item.image.length" :src="require(`${item.image}`)" alt="">
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    name: 'Price',
    data: () => ({
        items: [
            {
                image: '',
                description: 'some description'
            },
            {
                image: '',
                description: 'some description'
            },
            {
                image: '',
                description: 'some description'
            },
            {
                image: '',
                description: 'some description'
            },
            {
                image: '',
                description: 'some description'
            },
            {
                image: '',
                description: 'some description'
            },
            {
                image: '',
                description: 'some description'
            },
            {
                image: '',
                description: 'some description'
            },
            {
                image: '',
                description: 'some description'
            },
            {
                image: '',
                description: 'some description'
            },
            {
                image: '',
                description: 'some description'
            },
            {
                image: '',
                description: 'some description'
            }
        ]
    })
}
</script>