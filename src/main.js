import {createApp} from 'vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import {createRouter, createWebHistory} from 'vue-router'
import App from './App.vue'
import DogList from './components/DogList.vue'
import DogSingle from './components/DogSingle.vue'


const app = createApp(App);

const routes=[
	{
		path: '/breeds',
		component: DogList
	},
	{
		path: '/breeds/:id',
		component: DogSingle
	},
]
const router = createRouter({
	history: createWebHistory(),
	routes
});

app.use(router);
app.mount('#app');


