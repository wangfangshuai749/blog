import { createRouter, createWebHashHistory } from 'vue-router'

let routes = [
	{
		path: '/test',
		component: () => import('../views/Test.vue'),
		meta: { title: 'test' }
	},
	{ path: '/', component: () => import('../views/HomePage.vue'), meta: { title: '首页' } },
	{ path: '/detail', component: () => import('../views/Detail.vue'), meta: { title: '详情页' } },
	{ path: '/login', component: () => import('../views/Login.vue'), meta: { title: '登录' } },
	{
		path: '/dashboard',
		component: () => import('../views/dashboard/Dashboard.vue'),
		meta: { title: '后台管理' },
		children: [
			{ path: '/dashboard/category', component: () => import('../views/dashboard/Category.vue'), meta: { title: '分类管理' } },
			{ path: '/dashboard/article', component: () => import('../views/dashboard/Article.vue'), meta: { title: '文章管理' } }
		]
	}
]

const router = createRouter({
	history: createWebHashHistory(),
	routes
})

export { router, routes }
