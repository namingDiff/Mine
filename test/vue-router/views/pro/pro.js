define(function(require, exports, module) {
    'use strict';
    module.exports = Vue.extend({
        template: `<h5>我从{{id_list}}来，名字叫{{name}}</h5>`,
        data () {
            return {
                id_list: '',
                name: ''
            }
        },
        created () {
            this.name = this.$route.query.name;
            this.id_list = this.$route.params.id;
        }
    });
});