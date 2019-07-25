    var year = 2019 //选择年份
    var lastDay = new Date(year + 1,0,0) // 一年的最后一天
    var firstDay = new Date(year,0,1) // 一年的最后一天
    var obj = {}
    var index = 1
    
    function formatDate(d){
        return d.toLocaleDateString('zh-cn',{year: 'numeric', month: '2-digit',day: '2-digit'}).replace(/\//g,'-')
    }
    while (firstDay < lastDay){
        firstDay.setDate(firstDay.getDate() + 1)
        if(firstDay.getDay() === 6){
            obj[index++] = formatDate(firstDay) + ' - ' + formatDate(firstDay)
            firstDay = new Date(firstDay.getTime() + 86400000)
        }
    }
    if(firstDay !== lastDay){
        obj[index++] = formatDate(firstDay) + ' - ' + formatDate(lastDay)
    }
    console.log(JSON.stringify(obj,null,' '))
