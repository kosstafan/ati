<template>
    <div class="form">
        <div class="form__title">Заказать звонок</div>
            <form class="form__element">
                <div class="form__row">
                    <label class="form__label">
                        <div>Ваше имя</div>
                        <input v-model="fields.name.value" type="text" :class="{'error': fields.name.error}" class="form__input">
                    </label>
                    <label class="form__label">
                        <div>Телефон</div>
                        <input v-model="fields.phone.value" type="text" v-phone="true" :class="{'error': fields.phone.error}" class="form__input">
                    </label>
                </div>
                <div class="form__row">
                    <label class="form__label">
                        <div>Комментарий</div>
                        <textarea v-model="fields.comment.value" name="" id="" cols="30" rows="5" class="form__input"></textarea>
                    </label>
                </div>
                <div class="form__row">
                    <button class="button form__button" @click.prevent="submit">Отправить</button>
                    <button class="button form__button form__button_reset" @click.self="$emit('closeForm')">Отмена</button>
                </div>
            </form>
        
    </div>
</template>
<script>
export default {
    name: 'Form',
    data: () => ({
        fields: {
            name: {
                value: '',
                error: false
            },
            phone: {
                value: '',
                error: false
            },
            comment: {
                value: '',
                error: false
            },
        }
    }),
    methods: {
        async submit() {
            if (!this.fields.name.value.length || this.fields.name.value.length < 2) {
                this.fields.name.error = true
            } else {
                this.fields.name.error = false
            }
            if (!this.fields.phone.value.length || this.fields.phone.value.length < 17) {
                this.fields.phone.error = true
            } else {
                this.fields.phone.error = false
            }

            if (this.fields.name.error || this.fields.phone.error) return

            const data = {
                name: this.fields.name.value,
                phone: this.fields.phone.value
            }
            if (this.fields.comment.value.length) data.comment = this.fields.comment.value

            const res = await this.$axios.$post("/email", data);
            this.$emit('sended')
        }
    }
}
</script>