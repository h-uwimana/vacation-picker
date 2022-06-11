import { defineStore } from "pinia";

export const useCounterStore = new defineStore("counter", {
	id: "counter",
	state: () => ({ count: 0 }),
	getters: {
		double: (state) => state.count * 2,
	},
	actions: {
		increment() {
			this.count++;
		},
	},
});
