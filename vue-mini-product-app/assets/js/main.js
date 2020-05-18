var app = new Vue({
	el: "#app",
	data: {
		brand: "Vue",
		product: "Socks",
		image: "./assets/img/greenSocks.jpg",
		altText: "A pair of Socks",
		inStock: true,
		inventory: 52,
		details: ["85% Cotton", "15% Polyster", "Gender-neutral"],
		variants: [
			{
				variantId: 2245,
				variantColor: "blue",
				variantImage: "./assets/img/blueSocks.jpg",
			},
			{
				variantId: 2253,
				variantColor: "green",
				variantImage: "./assets/img/greenSocks.jpg",
			}
		],
		cart: 0,
	},
	methods: {
		addToCart: function () {
			this.cart += 1
		},
		updateProduct: function (variantImage) {
			this.image = variantImage
		}
	},
	computed: {
		title() {
			return this.brand + ' ' + this.product
		}
	}
})