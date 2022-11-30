<template>
  <div class="wrapper">
    <Hero />
    <About />
    <Services />
    <Price />
    <section class="section section_flex">
      <Promo />
      <Footer />
    </section>
  </div>
</template>

<script>
export default {
  name: "index",
  data: () => {
    return {
      showModal: false,
      modalTitle: "title",
      modalText: "text",
    };
  },
  methods: {
    closeModal(e) {
      this.modalTitle = "";
      this.modalText = "";
      document.body.classList.remove("closed");
      this.showModal = false;
    },
    processResult(e) {
      this.modalTitle = e.title;
      this.modalText = e.text;
      document.body.classList.add("closed");
      this.showModal = true;
    },
  },
};
</script>
