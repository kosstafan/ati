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
                <div v-for="(item, index) in items" :key="index" class="price-list__item" @click="openModal(item)">
                    <img v-if="item.image.length" :src="require(`@/assets/images/${item.image}`)" alt="" class="price-list__img">
                    <img v-if="!!item.video" class="price-list__play" src="data:image/png;base64,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">
                </div>
            </div>
        </div>
        <Modal v-if="isModalOpened" :video="modalVideo" :image="modalImg" :title="modalTitle" :text="modalDescription" :needButton="true" @closeModal="closeModal" @openForm="openForm" />
    </section>
</template>
<script>
export default {
    name: 'Price',
    data: () => ({
        items: [
            {
                name: '',
                image: '1.jpg',
                description: ''
            },
            {
                image: '2.jpg',
                description: 'some description',
                video: 'video-01.mp4'
            },
            {
                image: '3.jpg',
                description: '',
                
            },
            {
                image: '4.jpg',
                description: '',
                video: 'video-02.mp4'
            },
            {
                image: '5.jpg',
                description: '',
                video: 'video-03.mp4'
            },
            {
                image: '6.jpg',
                description: ''
            },
            {
                image: '7.jpg',
                description: ''
            },
            {
                image: '8.jpg',
                description: ''
            },
        ],
        isModalOpened: false,
        modalTitle: '',
        modalDescription: '',
        modalImg: '',
        modalVideo: ''
    }),
    methods: {
        openModal(item) {
            this.isModalOpened = true
            this.modalTitle = item.name
            this.modalDescription = item.description
            this.modalImg = item.image
            this.modalVideo = item.video
            document.body.classList.add('closed_')
        },
        closeModal() {
            this.isModalOpened = false
            this.modalTitle = ''
            this.modalDescription = ''
            this.modalImg = ''
            this.modalVideo = ''
            document.body.classList.remove('closed_')
        },
        openForm() {
            this.$emit('openForm')
            this.closeModal()
        }
    }
}
</script>