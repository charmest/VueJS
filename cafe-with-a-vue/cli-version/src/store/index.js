import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  
  // DataStore unique, utilis� pour stocker les donn�es acc�ssibles depuis plusieurs composants
  // de mani�re � ne pas dupliquer les states --> ...mapState(["month", "year", "day"]) dans autre composant
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
					name: "Éclair",
					image: {
						source: "/images/eclair.jpg",
						alt: "Éclair au chocolat"
					},
					inStock: false,
					quantity: 1,
					price: 4.99
				}
			],
  },
  // Equivalent des propri�t�s calcul�es dans Vue ...mapGetters(["formattedDate"]) dans autre composant
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
