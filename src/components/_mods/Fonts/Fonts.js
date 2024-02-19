'use strict'

export default {
    name: 'Fonts',
    props: {
        type: {
            type: String,
            default: 'bigBody'
        },
        text: {
            type: [ Object, Array, String ],
            require: true
        }
    },
    computed: {
        datas() {
            let newTab
            if (Array.isArray(this.text)) {
                newTab = this.text
            } else if (this.text instanceof Object) {
                newTab = [this.text]
            } else {
                newTab = [{ type: this.type, text: this.text }]
            }

            for (let i = 0; i < newTab.length; i++) {
                if (this.checkTypeValue(newTab[i].type)) {
                    newTab[i].type = 'bigBody'
                }

                if (newTab[i].type === 'bigBody' || newTab[i].type === 'smallBody' || newTab[i].type === 'ml') {
                    newTab[i].fontClass = newTab[i].fontClass ? `${newTab[i].type} ${newTab[i].fontClass}` : newTab[i].type
                    newTab[i].type = 'p'
                }

                // Ajout de la propriété `appearProps` avec la valeur `appear` à chaque élément de datas
                newTab[i].appearProps = { appear: newTab[i].appear }
            }

            return newTab
        }
    },
    methods: {
        checkTypeValue(type) {
            let result
            switch (type) {
            case 'h1':
                result = false
                break
            case 'h2':
                result = false
                break
            case 'h3':
                result = false
                break
            case 'h4':
                result = false
                break
            case 'bigBody':
                result = false
                break
            case 'smallBody':
                result = false
                break
            case 'ml':
                result = false
                break
            default:
                result = true
            }
            return result
        }
    }
}
