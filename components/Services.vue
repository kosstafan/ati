<template>
    <section class="section services">
        <div class="services-title">наши услуги</div>
        <div class="container">
            <div class="services-list">
                <div v-for="item in services" :key="item.image" class="services-list__item" @click="openModal(item)">
                    <img :src="require(`@/assets/images/${item.image}.png`)" alt="" class="services-list__img">
                    <div class="services-list__text" v-html="item.name"></div>
                </div>
            </div>
        </div>
        <Modal v-if="isModalOpened" :title="modalTitle" :text="modalDescription" :needButton="true" @closeModal="closeModal" @openForm="openForm" />
    </section>
</template>
<script>
export default {
    name: 'Services',
    data: () => ({
        services: [
            {
                image: "truck",
                name: "перевозка<br/>негабаритных<br/>грузов",
                description: 'большое описание услуги'
            },
            {
                image: "liebherr",
                name: "аренда<br/>автокранов",
                description: 'большое описание услуги'
            },
            {
                image: "manic",
                name: "манипулятор",
                description: 'большое описание услуги'
            },
            {
                image: "collect",
                name: "перевозка<br/>сборных<br/>грузов",
                description: 'большое описание услуги'
            },
            {
                image: "strahovanie",
                name: "страхование<br/>грузов",
                description: 'большое описание услуги'
            },
            {
                image: "tyazh",
                name: "перевозка<br/>негабаритных<br/>грузов",
                description: 'большое описание услуги'
            },
            {
                image: "zhd",
                name: "перевозка<br/>ж/д",
                description: 'большое описание услуги'
            },
            {
                image: "escort",
                name: "сопровождение<br/>грузов",
                description: 'большое описание услуги'
            },
            {
                image: "order",
                name: "изготовление<br/>спецразрешения для<br/>перевозки<br/>негабаритных грузов",
                description: 'большое описание услуги'
            },
        ],
        isModalOpened: false,
        modalTitle: '',
        modalDescription: '',
    }),
    methods: {
        openModal(item) {
            this.isModalOpened = true
            this.modalTitle = item.name
            this.modalDescription = item.description
            document.body.classList.add('closed_')
        },
        closeModal() {
            this.isModalOpened = false
            this.modalTitle = ''
            this.modalDescription = ''
            document.body.classList.remove('closed_')
        },
        openForm() {
            this.$emit('openForm')
            this.closeModal()
        }
    }
}
</script>