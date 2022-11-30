import Vue from 'vue'
import YmapPlugin from 'vue-yandex-maps'

const settings = {
    apiKey: '9c878865-a3e8-4e50-9c51-b90893e5c952',
    lang: 'ru_RU',
    coordorder: 'latlong',
    enterprise: false,
    version: '2.1'
  } // настройки плагина

Vue.use(YmapPlugin, settings);