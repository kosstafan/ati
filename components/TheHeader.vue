<template>
    <header class="header">
        <Nav v-if="isNavOpened" @closeNav="closeNav" @goToLink="goToLink($event)" @openForm="$emit('openForm')" />
        <div class="container">
            <div class="header__content">
                <a href="#">
                    <Logo />
                </a>
                <div class="header__nav">
                    <div class="header__contacts header__contacts_top">
                        <a href="tel:+9320122065" class="contact-link"><IconPhone class="contact-link__icon"/>8 932 012 20 65</a>
                        <a href="mailto:avtotrakinfo74@yandex.ru" class="contact-link"><IconMail class="contact-link__icon"/>avtotrakinfo74@yandex.ru</a>
                    </div>
                    <div class="header__links">
                        <a v-for="link in links" :key="link.name" :href="link.to" class="nav-link" @click.prevent="goToLink(link.to)">{{link.name}}</a>
                        <div class="burger" @click="openNav"><IconBurger /></div>
                        
                    </div> 
                    <div class="hero__title_xs">ООО “АвтоТракИнфо”</div>
                </div>
            </div>
            
        </div>
    </header>
</template>
<script>
export default {
    name: "TheHeader",
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
                to: "services"
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
        isNavOpened: false
    }),
    methods: {
        openNav() {
            console.log('open')
            this.isNavOpened = true,
            document.body.classList.add('closed_')
        },
        closeNav() {
            console.log('close')
            this.isNavOpened = false
            document.body.classList.remove('closed_')
        },
        goToLink(e, dist) {
            console.log(document.querySelector(`.${e}`).offsetTop)
            window.scrollTo({
            top: document.querySelector(`.${e}`).offsetTop,
            behavior: "smooth",
        });
        }
    }
}
</script>