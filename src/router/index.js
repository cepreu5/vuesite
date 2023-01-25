import { createWebHistory, createRouter } from 'vue-router'
import BillPage from '@/views/BillPage.vue'
import ProductsPage from '@/views/ProductsPage.vue'

const routes = [
	{
		path: '/',
		name: 'ProductsPage',
		component: ProductsPage
	},
    {
        path: '/billPage',
        name: 'BillPage',
        component: BillPage
    }
];

const router = createRouter({
	history: createWebHistory('/list-with-products/'),
	routes,
});

export default router;