<template>
	<div class="container">
		<h1 class="text-center text-white pb-3">{{ header }}</h1>
		<router-view />
	</div>
</template>

<script>
	export default {
		name: "App",
		components: {},
		data() {
			return {
				header: "Vue vacation Picker",
			};
		},
	};
</script>

<style>
	.container {
		height: 100vh !important;
	}
	body {
		background-color: rgb(23, 23, 23) !important;
	}
</style>
