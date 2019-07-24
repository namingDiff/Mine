Date.prototype.Format = function(fmt){ //需要JS格式化时间，后期做的时候方便使用   
  var o = {   
    "M+" : this.getMonth()+1,                 //月份   
    "d+" : this.getDate(),                    //日   
    "h+" : this.getHours(),                   //小时   
    "m+" : this.getMinutes(),                 //分   
    "s+" : this.getSeconds(),                 //秒   
    "q+" : Math.floor((this.getMonth()+3)/3), //季度   
    "S"  : this.getMilliseconds()             //毫秒   
  };   
  if(/(y+)/.test(fmt))   
    fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));   
  for(var k in o)   
    if(new RegExp("("+ k +")").test(fmt))   
  fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));   
  return fmt;   
};
 
//通过周取日期范围   year 年   weeks 周
function weekGetDate(year,weeks){
    var date = new Date(year,"0","1"); 
    // 获取当前星期几,0:星期一 
    var time = date.getTime(); 
     //当这一年的1月1日为周日时则本年有54周,否则没有54周,没有则去除第54周的提示       
    var _week = date.getDay();   
 
    if(_week!=0){//一年53周情况 
        if(weeks==54){    
            return '今年没有54周';    
        }    
        var cnt=0;// 获取距离周末的天数    
        if(_week==0){    
            cnt = 7;    
        }else if(_week==1){    
            cnt = 6;    
        }else if(_week==2){    
            cnt = 5;    
        }else if(_week==3){    
            cnt = 4;    
        }else if(_week==4){    
            cnt = 3;    
        }else if(_week==5){    
            cnt = 2;    
        }else if(_week==6){    
            cnt = 1;    
        }    
        cnt += 1;//加1表示以星期一为一周的第一天    // 将这个长整形时间加上第N周的时间偏移    
        time += cnt*24*3600000; //第2周开始时间 
        var nextYear = new Date(parseInt(year,10)+1,"0","1");    
        var nextWeek = nextYear.getDay();    
        var lastcnt = 0;//获取最后一周开始时间到周末的天数    
        if(nextWeek==0){    
            lastcnt = 6;    
        }else if(nextWeek==1){    
            lastcnt = 0;    
        }else if(nextWeek==2){    
            lastcnt = 1;    
        }else if(nextWeek==3){ 
            lastcnt = 2;    
        }else if(nextWeek==4){    
            lastcnt = 3;    
        }else if(nextWeek==5){    
            lastcnt = 4;    
        }else if(nextWeek==6){    
            lastcnt = 5;    
        }    
        if(weeks==1){//第1周特殊处理    // 为日期对象 date 重新设置成时间 time
            var start = date.Format("yyyy-MM-dd");
            date.setTime(time-24*3600000);
 
            return start + "-----" + date;
        }else if(weeks==53){//第53周特殊处理  
            //第53周开始时间      
            var start = time+(weeks-2)*7*24*3600000; 
            //第53周结束时间
            var end = time+(weeks-2)*7*24*3600000 + lastcnt*24*3600000 - 24*3600000;
            date.setTime(start);    
            var _start = date.Format("yyyy-MM-dd"); 
            date.setTime(end);    
            var _end = date.Format("yyyy-MM-dd"); 
           return _start + "---"  + _end;
        }else{    
            var start = time+(weeks-2)*7*24*3600000; //第n周开始时间    
            var end = time+(weeks-1)*7*24*3600000 - 24*3600000; //第n周结束时间
            date.setTime(start);    
            var _start = date.Format("yyyy-MM-dd");     
            date.setTime(end);    
            var _end = date.Format("yyyy-MM-dd");
            return _start + "---"  + _end;
        } 
    }else{//一年54周情况    
        var cnt=0;// 获取距离周末的天数    
        if(_week==0 && weeks==1){//第一周    
            cnt = 0;    
        }else if(_week==0){    
            cnt = 7;    
        }else if(_week==1){    
            cnt = 6;    
        }else if(_week==2){    
            cnt = 5;    
        }else if(_week==3){    
            cnt = 4;    
        }else if(_week==4){    
            cnt = 3;    
        }else if(_week==5){    
            cnt = 2;    
        }else if(_week==6){    
            cnt = 1;    
        }    
        cnt += 1;//加1表示以星期一为一周的第一天    
        // 将这个长整形时间加上第N周的时间偏移    
        time += 24*3600000; //第2周开始时间    
        var nextYear = new Date(parseInt(year,10)+1,"0","1");    
        var nextWeek = nextYear.getDay();    
        var lastcnt = 0;//获取最后一周开始时间到周末的天数    
        if(nextWeek==0){    
            lastcnt = 6;    
        }else if(nextWeek==1){    
            lastcnt = 0;    
        }else if(nextWeek==2){ 
            lastcnt = 1;    
        }else if(nextWeek==3){    
            lastcnt = 2;    
        }else if(nextWeek==4){    
            lastcnt = 3;    
        }else if(nextWeek==5){    
            lastcnt = 4;    
        }else if(nextWeek==6){    
            lastcnt = 5;    
        }    
        if(weeks==1){//第1周特殊处理
            var start = date.Format("yyyy-MM-dd"); 
            date.setTime(time-24*3600000);
            alert(start +'--'+ date);
            return _start + "---"  + date;
        }else if(weeks==54){//第54周特殊处理   
            //第54周开始时间    
            var start = time+(weeks-2)*7*24*3600000; 
            //第53周结束时间 
            var end = time+(weeks-2)*7*24*3600000 + lastcnt*24*3600000 - 24*3600000; 
            date.setTime(start);    
            var _start = date.Format("yyyy-MM-dd"); 
            date.setTime(end);    
            var _end = date.Format("yyyy-MM-dd");
            return _start + "---"  + _end;
        }else{    
            var start = time+(weeks-2)*7*24*3600000; //第n周开始时间    
            var end = time+(weeks-1)*7*24*3600000 - 24*3600000; //第n周结束时间
            date.setTime(start);    
            var _start = date.Format("yyyy-MM-dd"); 
            date.setTime(end);    
            var _end = date.Format("yyyy-MM-dd");
            return _start + "---"  + _end;
        }    
    }    
}
//两个参数分别为         年份 第12周
console.log(weekGetDate(2019,12))//2019-03-18---2019-03-24
