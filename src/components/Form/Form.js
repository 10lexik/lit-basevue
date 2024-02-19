'use strict'

import axios from 'axios'
import config from '@/js/conf/common.js'

export default {
    name: 'Form',
    data: () => ({
        status: '',
        errorMessage: '',
        fields: {
            email: '',
            optin: false
        }
    }),
    props: {
        /**
         * Name of the email to send when the form is submitted. The name must be specified in the mail-api project.<br />
         * For more information, check the <a href="#">wiki</a>.
         */
        sendEmail: {
            type: String,
            default: ''
        },

        /**
         * The input type of the form.<br />
         * All values available :
         * <ul>
         *     <li>`Email` <i>(default value)</i></li>
         *     <li>`Phone Number`</li>
         * </ul>
         */
        inputType: {
            type: String,
            default: 'Email',
            validator(value) {
                return ['Email', 'Phone Number'].indexOf(value) !== -1
            }
        },

        /**
         * The optin type of the form.<br />
         * All values available :
         * <ul>
         *     <li>`Newsletter` <i>(default value)</i></li>
         *     <li>`Get more information`</li>
         *     <li>`Call me back`</li>
         * </ul>
         */
        optinType: {
            type: String,
            default: 'Newsletter',
            validator(value) {
                return ['Newsletter', 'Get more information', 'Call me back'].indexOf(value) !== -1
            }
        }
    },
    methods: {
        handleForm() {
            // Prevents the form to be submitted multiple times
            if (this.status === 'loading') return

            // Set API url
            let apiUrl = process.env.NODE_ENV === 'production' ? config.api.prod.mail : config.api.preprod.mail
            apiUrl += this.sendEmail !== '' ? `?mail=${this.sendEmail}` : ''

            // Clear error message, if any
            this.errorMessage = ''

            // Put the form into "loading" state
            this.status = 'loading'

            // Post data to API
            axios.post(apiUrl, this.fields)
                .then(() => {
                    this.status = 'submitted'
                    this.$tracking.form(this.inputType, this.optinType)
                })
                .catch(error => {
                    let data = (error.response) ? error.response.data : null
                    if (data) {
                        this.errorMessage = data.details.message ? data.details.message : data.details
                        let err = `${data.status} : ${this.errorMessage}`
                        console.error(err)
                        this.$tracking.error('form', err, apiUrl)
                    } else {
                        this.$tracking.error('form', error, apiUrl)
                        console.error(error)
                    }
                    this.status = ''
                })
        }
    }
}
