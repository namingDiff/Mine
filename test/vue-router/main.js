define(function (require, exports, module) {
    'use strict';

    // 1. 定义（路由）组件。
    const Home = require('./views/home/home.js');
    const News = require('./views/news/news.js');

    const Login = require('./views/login/login.js');
    const Reg = require('./views/reg/reg.js');
    const Pro = require('./views/pro/pro.js');

    const User = require('./views/user/user.js');

    // 2. 定义路由
    const routes = [{
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            component: Home,
            name: 'home',
            children: [{
                    path: '/home/login/:id',
                    component: Login
                },
                {
                    path: '/home/reg',
                    component: Reg
                },
                {
                    path: '/home/pro/:id',
                    component: Pro
                }
            ]
        },
        {
            path: '/news',
            component: News,
            name: 'news'
        },
        {
            // 命名路由
            path: '/user/:userId',
            name: 'user',
            component: User
        }
    ]

    // 现在，应用已经启动了！
    const router = new VueRouter({
        "routes": routes
    });

    exports.init = function () {
        new Vue({
            "el": "#app",
            "router": router
        });
    };
});