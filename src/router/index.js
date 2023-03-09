import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home
	},
	{
		path: '/about',
		name: 'About',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
	},
	{
		path: '/downloadImg',
		name: 'downloadImg',
		component: () => import(/* webpackChunkName: "downloadImg" */ '@/views/download/downloadImg.vue')
	},
	{
		path: '/exportExcel',
		name: 'exportExcel',
		component: () => import(/* webpackChunkName: "exportExcel" */ '@/views/exportExcel/exportExcel.vue')
	},
	{
		path: '/test',
		name: 'test',
		component: () => import(/* webpackChunkName: "test" */ '../views/test.vue')
	}
]

const router = new VueRouter({
	mode: 'hash',
	base: process.env.BASE_URL,
	routes
})

export default router
