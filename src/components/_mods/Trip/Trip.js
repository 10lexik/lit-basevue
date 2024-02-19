'use strict'

import Rating from '@/components/Rating/Rating.vue'

/**
 * Creates blocks of trips.<br />
 * Contains Frow and FrowCols blocks, inside the Trip.vue
 */
export default {
    name: 'Trip',
    data: () => ({
        expandedFilterList: false,
        destinationsList: []
    }),
    components: {
        Rating
    },
    props: {
        /**
         * Specifies the list of destinations.<br />
         * Required props, inside the destinations list of objects : `img`, `country` and `city`.
         * Available settings:<br />
         * <ul>
         *   <li>`img` (string) <span style='color: #e54444; font-weight: bold'>required</span></li>
         *   <li>`country` (string) <span style='color: #e54444; font-weight: bold'>required</span></li>
         *   <li>`city` (string) <span style='color: #e54444; font-weight: bold'>required</span></li>
         *   <li>`offer` (string)</li>
         *   <li>`location` (string)</li>
         *   <li>`rating` (int)</li>
         *   <li>`price` (int)</li>
         *   <li>`specialities` (array)</li>
         *   <li>`button` (object) :
         *      <ul>
         *          <li>`label` (string) <span style='font-weight: bold'>required</span></li>
         *          <li>`href` (string) <span style='font-weight: bold'>required</span></li>
         *      </ul>
         *   </li>
         * </ul>
         */
        destinations: {
            type: Array,
            required: true,
            validator(array) {
                for (let i = 0; i < array.length; i++) {
                    if (!array[i].img || !array[i].country || !array[i].city) {
                        return false
                    }
                }
                return true
            }
        }
    },
    beforeMount() {
        this.destinationsList = this.destinations
    },
    computed: {
        getCountries() {
            let countries = new Set()
            for (let i = 0; i < this.destinations.length; i++) {
                countries.add(this.destinations[i].country)
            }
            return countries
        }
    },
    methods: {
        showHideFilterList() {
            this.expandedFilterList = !this.expandedFilterList
            return this.expandedFilterList
        },
        sortDestinationsList(country) {
            if (country === 'all') {
                this.destinationsList = this.destinations
            } else {
                let newDestinationsList = []
                for (let i = 0; i < this.destinations.length; i++) {
                    if (country === this.destinations[i].country) {
                        newDestinationsList.push(this.destinations[i])
                    }
                }
                this.destinationsList = newDestinationsList
            }
            this.showHideFilterList()
        }
    }
}
