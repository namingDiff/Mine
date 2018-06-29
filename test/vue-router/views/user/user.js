define(function (require, exports, module) {
    'use strict';
    module.exports = Vue.extend({
        "template": `<h1>{{par}}</h1>`,
        created() {
            this.refresh(this.$route.path);
        },
        data() {
            return {
                "par": ''
            }
        },
        "methods": {
            refresh(v) {
                this.par = v;
            }
        },
        "watch": {
            $route(to, from) {
                this.refresh(this.$route.path);
            }
        }
    });
});