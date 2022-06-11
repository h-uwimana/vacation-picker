<template>
	<div class="d-flex justify-content-between align-items-center h-75">
		<ul class="list-group w-25 m-0 p-0">
			<router-link
				:to="{
					name: 'countryCard',
					params: {
						id: country.name,
					},
					likes: 0,
				}"
				v-for="(country, index) in country.countries"
				:key="index"
				:id="country.id"
				:title="country.details"
			>
				<li class="list-group-item d-flex justify-content-between">
					<div class="justify-content-start">{{ index + 1 }}</div>
					<div class="text-center">{{ country.name }} </div>
					<span class="badge bg-black"
						>{{ store.$state[country.name] }} likes!</span
					>
				</li>
			</router-link>
		</ul>
		<router-view />
	</div>
</template>

<script>
	import { vacationMixin } from "@/mixins/vactionMixin";
	import countryData from "@/data/countryData";

	export default {
		mixins: [vacationMixin],
		name: "countryList",
		components: {},
		computed: {
			routeId() {
				return this.$route.params.id;
			},

			getIndex() {
				return this.country.countries.find(
					(index) => index.name === this.routeId
				);
			},

			Likes() {
				return this.store.count;
			},
		},

		mounted() {
			for (let i = 0; i < countryData.countries.length; i++) {
				const name = countryData.countries[i].name;
				this.store.$state[name] = 0;
			}
		},
	};
</script>

<style scoped>
	li:hover {
		transition: 0.6s ease-in-out;
		background-color: blue;
		color: white;
		font-weight: bold;
		cursor: pointer;
	}

	a {
		text-decoration: none !important;
	}
</style>
