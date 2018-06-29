define( function(require, exports, module) {
    'use strict';
    module.exports = Vue.extend({
        "template": `
                        <!-- 注意：组件只能有一个根元素，所以我们包装到这个div中 -->
                        <div id="home">
                            <h2>首页</h2>
                            <router-link tag="button" to="/home/login/on">登录1</router-link>
                            <router-link tag="button" to="/home/login/on_2">登录2</router-link>
                            <router-link tag="button" :to="{path: '/home/pro/pro', query: {name: 'pro'}}">pro</router-link>
                            <router-link tag="button" to="/home/reg">注册</router-link>
                            <!-- 路由匹配到的组件将渲染在这里 -->
                            <router-view></router-view>
                        </div>`
    });
});