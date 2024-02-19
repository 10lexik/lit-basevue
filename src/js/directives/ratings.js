import Vue from 'vue'

// Définir la directive personnalisée "rating" avec la logique pour obtenir les valeurs "rating"
Vue.directive('rating', {
    inserted: function(el, binding) {
        const cards = binding.value
        if (Array.isArray(cards)) {
            const ratings = cards.map((card) => card.rating)
            el.innerHTML = ratings.join(', ')
        }
    }
})
