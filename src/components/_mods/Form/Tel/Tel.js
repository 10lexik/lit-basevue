'use strict'
import { VueTelInput } from 'vue-tel-input'

export default {
    name: 'Tel',
    components: {
        VueTelInput
    },
    props: {
        value: {
            type: String,
            required: true
        },
        label: {
            type: String
        }
    },
    data() {
        return {
            placeholder: '',
            phone: '',
            hidden: false,
            options: {
                preferredCountries: ['FR', 'ES', 'IT'],
                mode: 'international',
                validCharactersOnly: true,
                disabledFormatting: false,
                wrapperClasses: 'country-phone-input',
                inputId: 'telId'
            }
        }
    },
    watch: {
        phone() {
            this.$emit('input', this.phone)
        }
    },
    mounted() {
        this.$refs.inputTel.maxLength = 16
        this.$refs.inputTel.parsedPlaceholder = this.label
        this.phone = this.value
    }
}
