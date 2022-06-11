import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../components/vacationList";
import countryCard from "../components/countryCard";

const routes = [
	{
		path: "/",
		name: "homeView",
		component: HomeView,
		props: (route) => ({
			...route.params,
			id: parseInt(route.params.id),
		}),
		children: [
			{
				path: ":id",
				name: "countryCard",
				component: countryCard,
				props: (route) => ({
					...route.params,
					id: route.params.id,
				}),
			},
		],
	},
];

const router = createRouter({
	history: createWebHashHistory(),
	routes,
	mode: history,
});

export default router;
