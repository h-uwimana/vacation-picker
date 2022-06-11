import countryData from "@/data/countryData";

import { useCounterStore } from "@/store/index";

export const vacationMixin = {
	methods: {
		Img(img) {
			return require(`@/assets/${img}`);
		},
	},
	data() {
		return {
			country: countryData,
			counter: 0,
			disabled: true,
			currentPath: window.location.hash,
			store: new useCounterStore(),
			likes: null,
		};
	},
};
