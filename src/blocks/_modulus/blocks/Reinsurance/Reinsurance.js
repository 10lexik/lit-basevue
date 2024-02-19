'use strict'

export default {
    name: 'Reinsurance',
    data: () => ({
    }),
    props: {
        variant: {
            type: String,
            default: 'iconList',
            validator: function(value) {
                return ['iconList', 'horizontalList', 'iconGrid'].indexOf(value) !== -1
            }
        },
        title: {
            type: [ String, Object, Array ]
        },
        list: {
            type: Array
        },
        customClass: {
            type: String,
            default: ''
        }
    },
    methods: {
    }
}
