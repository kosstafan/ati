<template>
    <header class="header">
        <div class="container">
            <div class="header__content">
                <a href="#">
                    <Logo />
                </a>
                <div class="header__nav">
                    <div class="header__contacts">
                        <a href="tel:+9320122065" class="contact-link"><IconPhone class="contact-link__icon"/>8 932 012 20 65</a>
                        <a href="mailto:avtotrakinfo74@yandex.ru" class="contact-link"><IconMail class="contact-link__icon"/>avtotrakinfo74@yandex.ru</a>
                    </div>
                    <div class="header__links">
                        <a v-for="link in links" :key="link.name" :href="link.to" class="nav-link">{{link.name}}</a>
                        <div class="burger"><IconBurger /></div>
                        
                    </div> 
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
                to: "#"
            },
            {
                name: "о нас",
                to: "#"
            },
            {
                name: "цены",
                to: "#"
            },
            {
                name: "наша работа",
                to: "#"
            },
            {
                name: "контакты",
                to: "#"
            }
        ]
    })
}
</script>