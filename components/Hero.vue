<template>
    <section class="section hero">
        <svg class="hero__bg" width="991" height="942" viewBox="0 0 991 942" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0H991V942L352.413 781.5L0 0Z" fill="url(#paint0_linear_10_41)"/>
            <defs>
            <linearGradient id="paint0_linear_10_41" x1="953.787" y1="23.2863" x2="20.9274" y2="1092.69" gradientUnits="userSpaceOnUse">
            <stop offset="0.0260417" stop-color="#3B5DA5" stop-opacity="0.65"/>
            <stop offset="1" stop-color="#4D7141"/>
            </linearGradient>
            </defs>
        </svg>
        <TheHeader />
        <div class="hero__content">
            <div class="container">
                <div class="hero__title">ООО “АвтоТракИнфо”</div>
                <main class="hero__main">
                    <div class="main-text">
                        <div class="main-content">
                            <div class="feachers">
                                <div class="main-title">Грузоперевозки</div>
                                <ul class="feachers-list">
                                <li v-for="item in feachers" :key="item" class="feachers__item">{{item}}</li>
                            </ul>
                            </div>
                            <img src="@/assets/images/daf.png" alt="" srcset="">
                        </div>
                        
                    </div>
                </main>
            </div>
        </div>
        <div class="scroll-btn" @click="scrollToBottom"><IconArrow /></div>
    </section>
</template>
<script>
export default {
    name: "Hero",
    data: () => ({
        feachers: ['по всей России','Белоруссия','Грузия','Казахстан','Китай','Таджикистан','Узбекистан']
    }),
    methods: {
    scrollToBottom() {
      window.scrollTo({
        top: document.querySelector('.hero').offsetHeight,
        behavior: "smooth",
      });
    },
  },

}
</script>