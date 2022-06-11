<template>
	<div class="card kaart">
		<div class="d-flex w-100 countryCardTop">
			<div class="countryCardName"
				><h4 class="card-title p-2"
					><strong> {{ selectedCountry.name }}</strong></h4
				></div
			>
			<div class="cardIcon">
				<router-link to="/">
					<button type="button" class="x-font btn-close"></button>
				</router-link>
			</div>
		</div>

		<img :src="Img(selectedCountry.img)" class="card-img-center" alt="..." />
		<div class="card-body">
			<p class="card-text text-center">
				{{ selectedCountry.details }}
			</p>
			<p class="card-text text-center">
				Capital: <strong>{{ selectedCountry.capital }}</strong>
			</p>
			<button
				class="bi bi-hand-thumbs-up btn likeBtn p-0 card-text"
				@click="this.store.$state[selectedCountry.name]++"
			>
				like!
			</button>
		</div>
	</div>
</template>
<script>
	// import vacationList from "./vacationList.vue";
	import { vacationMixin } from "@/mixins/vactionMixin";

	export default {
		mixins: [vacationMixin],
		name: "countryCard",

		computed: {
			routeId() {
				return this.$route.params.id;
			},

			selectedCountry() {
				return this.country.countries.find(
					(index) => index.name === this.routeId
				);
			},
		},
	};
</script>
<style scoped>
	.kaart {
		width: 50rem !important;
	}
	img {
		height: 27rem !important;
	}
	.x-font {
		font-size: 1.2rem !important;
		margin-right: 0.9rem !important;
	}
	.countryCardTop {
		display: flex !important;
		align-items: baseline !important;
		justify-content: center !important;
		position: relative;
	}
	.cardIcon {
		padding-right: 0.2rem !important;
		position: absolute !important;
		right: 1rem;
		top: 20%;
	}

	.cardIcon:hover,
	.likeBtn:hover {
		cursor: pointer;
		transform: scale(1.2);
		font-weight: bolder !important;
		transition: 0.2s ease;
		color: blue !important;
	}
</style>
