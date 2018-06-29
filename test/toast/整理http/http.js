function getConfig(parentId) {
    var ticket = _user.userInfo.ticket;
    config.headers.ticket = ticket;

    if (!parentId) {
        config.sendData = {
            'folderType': 1
        };
    } else {
        config.sendData = {
            'folderType': 1,
            'folders': [parentId]
        };
    }
    return config;
}



function fileRetrieval(flag, parentId) {
    var self = this;
    self.loading = flag ? false : true;

    // 表头先隐藏，请求回数据再确定是否显示
    self.theadIsShow = false;

    // 获取http config
    var requestConfig = self.getConfig(parentId);

    // http request
    _http.post(requestConfig, function (data) {
        self.isDetailLoaded = true;
        self.loading = false;

        // 异常处理
        if (data.code) {
            var errorMsg = _utils.dealHttpRequest(data.code);
            if (errorMsg) {
                ToastTip(errorMsg, 2000, false, 'show');
                self.hideRefreshRotate();
                self.tblData = [];
                self.theadIsShow = false;
                self.noDataOfTable = true;
            }
            return;
        }

        if (self.verifyRes(data)) {
            self.totalRecords = data.value.length;
            if (data.value.length == 0) {
                self.theadIsShow = false;
                self.noDataOfTable = true;
                return;
            }
            // me.totalPage = data.ext.totalPage;
            self.dealResultData(data);
       }
    }, function(err){
        app.isDetailLoaded = true;
        app.loading = false;
        //request timeout or no internet
        if(err.errno || err.code == "ECONNRESET") {
            app.tblData = [];
            app.theadIsShow = false;
            app.noDataOfTable = false;
            app.noNetwork = true;
        }
    });
}