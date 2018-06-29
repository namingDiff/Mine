function ps_1() {
    return new Promise(function (resolve, reject) {
        resolve({
            "result": 'success',
            "data": [
                {
                    "id": 1,
                    "name": 'ps-1'
                }
            ]
        });
    });
}

function ps_2(params) {
    return new Promise(function (resolve, reject) {

        const data = params;

        data.data = [{
            "id": 2,
            "name": 'ps-2'
        }];

        resolve(data);
    });
}

ps_1().then(ps_2).then(function (data) {
    console.log(data);
});