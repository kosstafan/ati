import Vue from 'vue'

Vue.directive('phone', {
  bind(el, binding) {
    if (binding.value) {
      el.oninput = function (e) {
        // проверяем было ли событие вызвано пользователем
        if (!e.isTrusted) {
          return
        }
        let value = this.value.replace(/[^0-9]/g, '')
  
        if (value.length === 1 && e.inputType === 'deleteContentBackward') {
          value = ''
        }

        // обрезаем строку до 11 символов
        if (value.length > 11 ) {
          value = value.substr(0, 11)
        }

        // проверяем первую цифру
        if (value.length && value[0] === '8') value = value.replace('8', '7')
        if (value.length && value[0] !== '7') {
          value = `7${value}`
        }
  
        let match = new RegExp()
        let replaceTo = ''
        // в зависимости от длины введенного номера применяем определенный шаблон для красивой замены
        switch (value.length) {
          case 0:
            match = ''
            replaceTo = ''
            break
          case 1:
            match = /(\d{1})/
            replaceTo = '+$1 ('
            break
          case 2:
          case 3:
          case 4:
            match = /(\d{1})(\d{1,3})/
            replaceTo = '+$1 ($2'
            break
          case 5:
          case 6:
          case 7:
            match = /(\d{1})(\d{3})(\d{1,3})/
            replaceTo = '+$1 ($2) $3'
            break
          case 8:
          case 9:
            match = /(\d{1})(\d{3})(\d{3})(\d{1,2})/
            replaceTo = '+$1 ($2) $3-$4'
            break
          case 10:
          case 11:
            match = /(\d{1})(\d{3})(\d{3})(\d{2})(\d{1,2})/
            replaceTo = '+$1 ($2) $3-$4-$5'
            break
        }
        this.value = value.replace(match, replaceTo)
        el.dispatchEvent(new Event('input'))
      }
    }
  },
})