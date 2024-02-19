'use strict'
import lang from '@/js/conf/lang'

const allowedZipCodes = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '80', '81', '82', '83', '84', '85', '86', '87', '88', '89', '90', '91', '92', '93', '94', '95']

export default {
    name: 'PostalCode',
    props: {
        value: {
            type: String,
            required: true
        },
        field: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            zipCode: '',
            msg: '',
            hidden: false,
            country: lang.locale
        }
    },
    computed: {
        zipLimit() {
            let zipLimit = ''
            switch (this.country) {
            case 'fr':
            case 'es':
            case 'espr':
            case 'it':
            case 'itpr':
            case 'de':
                zipLimit = 5
                break
            case 'at':
            case 'be':
            case 'benl':
            case 'befr':
            case 'lu':
            case 'nl':
                zipLimit = 4
                break
            }
            return zipLimit
        }
    },
    watch: {
        zipCode() {
            this.$emit('input', this.zipCode)
        }
    },
    methods: {
        handleZipCodeBlur() {
            if (this.zipCode !== '') {
                while (this.zipCode.length < this.zipLimit) {
                    this.zipCode = `0${this.zipCode}`
                    this.msg = ''
                }
                this.zipCode = this.zipCode.substring(0, this.zipLimit)
            }
            const isValid = this.validateZipCode()
            this.$emit('validate', { isValid, fieldName: this.field.name })
            this.msg = isValid ? '' : this.$t('cp.invalidZip')
        },
        validateZipCode() {
            if (!this.field.required && !this.zipCode) return true

            if (this.country === 'fr') {
                const input = this.zipCode.substr(0, 2)
                return allowedZipCodes.findIndex(allowedZipCode => input === allowedZipCode) > -1
            } return true
        }
    },
    mounted() {
        this.zipCode = this.value
    }
}
