<template>
    <footer class="footer">
        <div class="contacts">
            <div class="contacts__content">
                <div class="contacts__title">ООО “АвтоТракИнфо”</div>
                <a href="tel:+79320122065" class="contact-link"><IconPhone key="footer1" class="footer-link__icon"/>8 932 012 20 65</a>
                <a href="https://wa.me/79320122065?text=Здравствуйте! Мне нужна перевозка . Город отправки:___. Город доставки :____. Вес : __тонн" target="_blank" class="contact-link"><IconWatsapp class="footer-link__icon"/>8 932 012 20 65</a>
                <a href="#" class="contact-link"><IconLocation class="footer-link__icon"/>г. Челябинск,<br/>ул. Гостевая,<br/>д.1, офис 308</a>
                <a href="mailto:avtotrakinfo74@yandex.ru" class="contact-link"><IconMail key="footer2" class="footer-link__icon"/>avtotrakinfo74@yandex.ru</a>
            </div>
        </div>
        <div class="map" id="map">
            <client-only>
            <yandex-map :coords="coords">
                <ymap-marker
                :coords="coords"
                marker-id="123"
                hint-content="some hint"
                />
               </yandex-map>
            </client-only>

        </div>
    </footer>
</template>

<script>
export default {
    name: 'Footer',
    data: () => ({
        coords: [55.154378, 61.303038],
    })
}
</script>
