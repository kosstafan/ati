<template>
  <div class="wrapper">
    <Hero />
    <About @openForm="openForm" />
    <Services @openForm="openForm" />
    <Price @openForm="openForm" />
    <section class="section section_flex">
      <Promo @openForm="openForm" />
      <Footer />
    </section>
    <Form v-if="isFormOpened" @closeForm="isFormOpened = false" @sended="isFormOpened = false,successModal = true" />
    <Modal v-if="successModal" :title="result" @closeModal="successModal = false" />
  </div>
</template>

<script>
export default {
  name: "index",
  data: () => {
    return {
      isFormOpened: false,
      result: "Заявка успешно отправлена",
      successModal: false,
    };
  },
  methods: {
    openForm() {
      console.log('openForm')
      this.isFormOpened = true
    }
  },
};
</script>
