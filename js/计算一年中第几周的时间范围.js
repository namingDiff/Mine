var year = 2019 //选择年份
    var lastDay = new Date(year + 1,0,0) // 一年的最后一天
    var firstDay = new Date(year,0,1) // 一年的最后一天
    var obj = {}
    var index = 1
    var day = new Date(year,0,1)
    function formatDate(d){
        return d.toLocaleDateString('zh-cn',{year: 'numeric', month: '2-digit',day: '2-digit'}).replace(/\//g,'-')
    }
    while (day < lastDay){
        day.setDate(day.getDate() + 1)
        if(day.getDay() === 6){
            obj['第' + (index++) + '周'] = formatDate(firstDay) + ' 到 ' + formatDate(day)
            firstDay = new Date(day.getTime() + 86400000)
        }
    }
    if(day !== lastDay){
        obj['第' + (index++) + '周'] = formatDate(firstDay) + ' 到 ' + formatDate(lastDay)
    }
    console.log(JSON.stringify(obj,null,' '))
