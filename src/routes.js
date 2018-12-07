
import Vue from 'vue'
import VueRouter from 'vue-router'

import AddFood from './components/AddFood'
import Home from './components/Home'
import FoodList from './components/FoodList'
import Login from './components/Login'
import SignUp from './components/SignUp'

Vue.use(VueRouter);

const router = new VueRouter({

    mode: 'history',

    routes: [{
            path: '/',
            name: 'Login',
            component: Login
        },
        {
            path: '/add-food',
            name: 'AddFood',
            component: AddFood
        },
        {
            path: '/food-list',
            name: 'FoodList',
            component: FoodList
        },
        {
             path: '/home',
             name: 'Home',
             component: Home
        },
        {
             path: '/SignUp',
             name: 'SignUp',
             component: SignUp
        }
    ]
});

export default router

