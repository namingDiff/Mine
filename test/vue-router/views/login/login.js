define(function (require, exports, module) {
    'use strict';
    module.exports = Vue.extend({
        "template": `<div id="login">
                        <div>
                            <label>用户名：</label><input type="text">
                            <br>
                            <label>密码：</label><input type="password">
                            <br>
                            <button @click="login">Login</button>
                            <h5>我从{{id_list}}来，名字是{{name}}</h5>
                        </div>
                    </div>`,
        data() {
            return {
                id_list: '',
                name: ''
            }
        },
        created() {
            this.refresh(this.$route.path);
        },
        "methods": {
            login() {
                this.$route.params.id == 'on' ?
                    this.$router.push('/news') :
                    this.$router.push('/home/reg');
            },
            refresh(url) {
                this.id_list = this.$route.params.id;
                this.name = this.$route.query.name;
            }
        },
        watch: {
            $route(to, from) {
                this.refresh(this.$route.path);
            }
        }
    });
});