<template>
    <div class="nav-mobile" @click.self="$emit('closeNav')">
        <div v-for="link in links" :key="link.name" class="nav-mobile__link" @click.stop="goToLink(link.to)">{{link.name}}</div>
    </div>
</template>
<script>
export default {
    name: "Nav",
    data: () => ({
        links: [
            {
                name: "главная",
                to: "hero"
            },
            {
                name: "о нас",
                to: "about"
            },
            {
                name: "цены",
                to: "servicess"
            },
            {
                name: "наша работа",
                to: "price"
            },
            {
                name: "контакты",
                to: "promo"
            }
        ],
    }),
    methods: {
        goToLink(e) {
            this.$emit('goToLink', e);
            this.$emit('closeNav')
        }
    }
}
</script>