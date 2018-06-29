define(function (require, exports, module) {
    module.exports = Vue.extend({
        "template": `<div class="topbar">
                        <table>
                            <thead>
                                <th>
                                    <td>{{column.id}}</td>
                                    <td>{{column.name}}</td>
                                    <td>{{column.age}}</td>
                                    <td>{{column.location}}</td>
                                </th>
                            </thead>
                            <tbody>
                                <tr v-for="item in tableData" :key="item.id">
                                    <td>{{item.id}}</td>
                                    <td>{{item.name}}</td>
                                    <td>{{item.age}}</td>
                                    <td>{{item.location}}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>`,
        "name": 'topbar',
        data () {
            return {
                "tableData": [
                    {
                        "id": 1,
                        "name": '张三',
                        "age": 12,
                        "location": '雁塔'
                    },{
                        "id": 2,
                        "name": '李四',
                        "age": 23,
                        "location": '碑林'
                    },{
                        "id": 3,
                        "name": 'Jone',
                        "age": 34,
                        "location": '未央'
                    },{
                        "id": 4,
                        "name": 'Jack',
                        "age": 45,
                        "location": '灞桥'
                    },{
                        "id": 5,
                        "name": 'Bush',
                        "age": 56,
                        "location": 'Am'
                    },
                ],
                "column": {
                    "id": "ID",
                    "name": "Name",
                    "age": "Age",
                    "location": "Location"
                }
            }
        },
        "methods": {
            
        }
    });
});