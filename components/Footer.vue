<template>
    <footer class="footer">
        <div class="contacts">
            <div class="contacts__content">
                <div class="contacts__title">ООО “АвтоТракИнфо”</div>
                <a href="tel:+9320122065" class="contact-link"><IconPhone key="footer1" class="footer-link__icon"/>8 932 012 20 65</a>
                <a href="#" class="contact-link"><IconLocation class="footer-link__icon"/>г. Челябинск,<br/>ул. Молодогвардейцев,<br/>д.60 В</a>
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
        coords: [55.184572, 61.332018],
    })
}
</script>