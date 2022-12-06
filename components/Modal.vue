<template>
    <div class="modal" @click.self="$emit('closeModal')">
        <div v-if="!!title" class="modal__title" v-html="title"></div>
        <img v-if="!!image && !video.length" :src="require(`@/assets/images/${image}`)" alt="" class="modal__img">
        <vue-plyr>
  <video
    v-if="video.length"
    controls
    crossorigin
    playsinline
  >
    <source
      size="720"
      :src="require(`@/assets/images/${video}`)"
      type="video/mp4"
    />
    <source
      size="1080"
      :src="require(`@/assets/images/${video}`)"
      type="video/mp4"
    />
  </video>
</vue-plyr>
        <div v-if="!!text" class="modal__text">{{text}}</div>
        <button v-if="needButton" class="button" @click="$emit('openForm')">заказать</button>
    </div>
</template>
<script>
export default {
    name: "Modal",
    props: {
        video: {
            type: String,
            default: ''
        },
        image: {
            type: String,
            default: ''
        },
        title: {
            type: String,
            default: ''
        },
        text: {
            type: String,
            default: ''
        },
        needButton: {
            type: Boolean,
            default: false
        }
    }
}
</script>