import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home';
import Board from './views/Board'

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/boards/:id',
            name: 'board',
            component: Board
        }
    ]
})
