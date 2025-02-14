import { createRouter, createWebHashHistory } from 'vue-router'
import MainView from '../views/MainView.vue'
import SignUpView from '../views/SignUpView.vue'
import LoginView from '../views/LoginView.vue'

const routes = [{
        path:'/',
        name: 'main',
        component: MainView
    },
    {
       path: '/SignUp',
       name: 'signup',
       component: SignUpView
    },
    {
       path: '/Login',
       name: 'login',
       component: LoginView
    }
    ]

const router = createRouter({
   history: createWebHashHistory(),
   routes
})

export default router;