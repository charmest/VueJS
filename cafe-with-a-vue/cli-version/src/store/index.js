import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  
  // DataStore unique, utilisé pour stocker les données accéssibles depuis plusieurs composants
  // de manière à ne pas dupliquer les states --> ...mapState(["month", "year", "day"]) dans autre composant
  state: {
    shoppingCart: 0,
    restaurantName: "La belle vue",
    simpleMenu: [
				{
					name: "Croissant",
					image: {
						source: "/images/crossiant.jpg",
						alt: "Un croissant"
					},
					inStock: true,
					quantity: 1,
					price: 2.99
				},
				{
					name: "Baguette de pain",
					image: {
						source: "/images/french-baguette.jpeg",
						alt: "Quatre baguettes de pain"
					},
					inStock: true,
					quantity: 1,
					price: 3.99
				},
				{
					name: "Ã‰clair",
					image: {
						source: "/images/eclair.jpg",
						alt: "Ã‰clair au chocolat"
					},
					inStock: false,
					quantity: 1,
					price: 4.99
				}
			],
  },
  // Equivalent des propriétés calculées dans Vue ...mapGetters(["formattedDate"]) dans autre composant
  getters: {
    copyright(state) {
			const currentYear = new Date().getFullYear()
			return `Copyright ${state.restaurantName} ${currentYear}`
		},
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
