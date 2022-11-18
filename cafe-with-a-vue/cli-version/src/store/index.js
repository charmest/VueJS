import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  
  // DataStore unique, utilisé pour stocker les données accéssibles depuis plusieurs composants
  // de manière à ne pas dupliquer les states --> ...mapState(["month", "year", "day"]) dans autre composant
  state: {
    shoppingCart: 0,
    restaurantName: "La boulangerie",
    simpleMenu: [
				{
					name: "Croissant",
					image: {
						source: "../../public/images/croissant.jpg",
						alt: "Un croissant"
					},
					inStock: true,
					quantity: 1,
					price: 2.99
				},
				{
					name: "Baguette de pain",
					image: {
						source: "../../public/images/baguette.jpeg",
						alt: "Quatre baguettes de pain"
					},
					inStock: true,
					quantity: 1,
					price: 3.99
				},
				{
					name: "Ã‰clair",
					image: {
						source: "../../public/images/eclair.jpg",
						alt: "Ã‰clair au chocolat"
					},
					inStock: false,
					quantity: 1,
					price: 4.99
				}
			],
  },
  // Equivalent des propriétés calculées dans Vue ...mapGetters(["formattedDate"]) dans autre composant
  // Prend le state en paramètre
  getters: {
    copyright(state) {
			const currentYear = new Date().getFullYear()
			return `Copyright ${state.restaurantName} ${currentYear}`
		},
  },
  // Toutes les propriétés responsables de modifications du state
  // Prend le state en paramètre numéro un, peut prendre le payload en second paramètre
  // Validée avec un "commit" pour conserver une trace
  // Une mutation = Un usage
  mutations: {
    INCREMENT_SHOPPING_CART(state, payload = 1) {
      state.shoppingCart += Number(payload);
    },
    DECREMENT_SHOPPING_CART(state, payload = 1) {
      state.shoppingCart -= Number(payload);
    }
  },
  // Coordonnent la logique derrière les mutations
  // Similaire à la propriété "methods" dans une instance de Vue
  // ...mapActions(["updateShoppingCart"])
  // On "dispatch" une action dans la partie "methods: " d'un composant avec 
  // --> this.$store.dispatch('updateShoppingCart')
  // OU --> ...mapActions(['updateShoppingCart'])
  actions: {
    updateShoppingCart(context, payload) {
      if (payload >= 0) {
        context.commit('INCREMENT_SHOPPING_CART', payload)
      }
      else {
        context.commit('DECREMENT_SHOPPING_CART', payload)
      }
    }
  },
  modules: {
  }
})
