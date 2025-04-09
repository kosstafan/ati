<template>
  <section class="section rewiews">
      <div class="about-title">отзывы</div>
      <div class="container">
          <vue-horizontal class="horizontal horisontal-center">
            <div class="news-item" v-for="(item, index) in items" :key="index">
                <img :src="require(`@/assets/images/${item.image}`)" alt="" class="news-image">
                <div class="news-description title">{{ item.name }}</div>
                <div class="news-description">{{ item.description }}</div>
                <button class="news-button" @click="openModal(item)">ПОДРОБНЕЕ</button>
            </div>
          </vue-horizontal>
      </div>
      <Modal v-if="isModalOpened" vertical :video="modalVideo" :image="modalImg" :title="modalTitle" :text="modalDescription" :needButton="true" @closeModal="closeModal" @openForm="openForm" />
  </section>
</template>
<script>
import VueHorizontal from 'vue-horizontal';
export default {
  components: {VueHorizontal},
  name: 'Rewiews',
  data: () => ({
      items: [
          {
              name: 'ООО БашРегионКран',
              image: '1n.jpg',
              description: '«АвтоТракИнфо» подтвердила свой высочайший профессиональный статус, активность и компетентность в выполнение поставленных задач. Все задачи выполняются вовремя в обозначенные сроки и отличным качеством. Компания качественно справляется со своими обязанностями.',
          },
          {
              name: 'ООО РИ-Проект',
              image: '2n.jpg',
              description: 'За время нашего партнерства мы смогли неоднократно убедиться в благонадежности, профессиональности и оперативности в решении рабочих вопросов',
          },
          {
              name: 'ООО ЭТЗ Консталин',
              image: '3n.jpg',
              description: 'Зарекомендовало себя надежным и стабильным партнером, обеспечивая гибкий подход к потребностям Заказчика, высокую оперативность и надежность, ни разу не допустив срывов сроков',
          },
          {
              name: 'ООО РСК  «ЭТМС»',
              image: '4n.jpg',
              description: 'Не разу не были разочарованы в результате работы над совместными перевозками. А так же эта компания смогла неоднократно подтвердить свою профессиональность ',
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
