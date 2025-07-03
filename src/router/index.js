import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
	},
	{
		path: '/trade',
		name: 'Trade',
		component: () =>
			import(/* webpackChunkName: "trade" */ '../views/Trade.vue'),
	},
	{
		path: '/contract',
		name: 'Contract',
		component: () =>
			import(/* webpackChunkName: "contract" */ '../views/Contract.vue'),
	},
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
})

export default router
