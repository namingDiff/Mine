define(function (require, exports, module) {

    var component_part1 = require('./views/content/content');

    var component_part2 = require('./views/topbar/topbar');

    // Vue.component =

    var router = new VueRouter({
        "routes": [{
            "path": '/',
            "component": component_part1
        }, {
            "path": '/part1',
            "component": component_part1
        }, {
            "path": '/part2',
            "component": component_part2
        }]
    });

    var store = new Vuex.Store({
        "state": {
            "name": ''
        }
    });

    exports.init = function () {
        console.log('work');
        new Vue({
            "el": '#app',
            "router": router,
            "store": store,
            "components": {
                "topbar": require('./views/topbar/topbar.js')
            }
        });
    };
});