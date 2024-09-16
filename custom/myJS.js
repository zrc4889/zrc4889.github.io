const { current } = require("hexo/dist/plugins/helper/is")

function entrance()
{
    // 暂未拆分

    console.log('Custom Javascript: Entrance Loaded Successfully.')

    siteStatus()
    badge()
    essay()
    time()
}

function siteStatus()
{
    
}

function time()
{
    console.log('Custom Javascript: Module Time Loaded Successfully.')
    $.ajax({
        type: 'get',
        datatype: 'json',
        url: '/info.json',
        success: function(data)
        {
            var t = data[0]['time'].toString()

            console.log(t)

            var year = t.substring(0, 4)
            var month = t.substring(4, 6)
            var day = t.substring(6, 8)
            var hour = t.substring(8, 10)
            var minute = t.substring(10, 12)
            var second = t.substring(12, 14)

            // var d = document.getElementById('status')
            // d.innerHTML = '最后更新于 ' + year + ' 年 ' + month + ' 月 ' + day + ' 日' + ' ' + hour + ' 时 ' + minute + ' 分 ' + second + ' 秒。'

            console.log('最后更新于 ' + year + ' 年 ' + month + ' 月 ' + day + ' 日' + ' ' + hour + ' 时 ' + minute + ' 分 ' + second + ' 秒。')
        }
    }) 
}

function badge()
{
    console.log('Custom Javascript: Module Badge Loaded Successfully.')

    var title = document.getElementsByClassName("navbar-brand")[0];

    var d = new Date()
    var date = d.getDate()
    var month = d.getMonth() + 1
    var year = d.getFullYear()

    var Lunar = lunarFun.gregorianToLunal(year, month, date)
    // var Lyear = Lunar[0];
    var Lmonth = Lunar[1];
    var Ldate = Lunar[2];

    // innerBadge 标题 Badge

    var badge = document.createElement("strong");
    
    // todo.. 生肖

    // 季节

    if (month >= 3 && month <= 5)
        badge.innerHTML = " · 春";
    
    if (month >= 6 && month <= 8)
        badge.innerHTML = " · 夏";

    if (month >= 9 && month <= 11)
        badge.innerHTML = " · 秋"

    if (month >= 12 && month <= 2)
        badge.innerHTML = " · 冬"
    

    // 公历跨年限定

    if (month == 12 && date >= 27)
    {
        badge.style.color = "rgba(255, 0, 0, 0.7)"
        badge.innerHTML = " · Goodbye " + year + "!";
    }

    if (month == 1 && date <= 3)
    {
        badge.style.color = "rgba(255, 0, 0, 0.7)"
        badge.innerHTML = " · Hello " + year + "!";
    }


    // 节日

    if (month == 3)
        // 植树节
    {
        badge.style.color = "rgba(0, 255, 0, 0.7)"
        badge.innerHTML = " · TheNextTree🌳";
    }

    if (month == 4 && month == 9)
    {
        badge.style.color = "rgba(255, 255, 0, 0.7)"
        badge.innerHTML = " · 空山新雨后";
    }   

    if (month == 5 && date <= 3)
        // 劳动节
    {
        badge.style.color = "rgba(255, 0, 0, 0.7)"
        badge.innerHTML = " · 🛠 劳动最光荣！";
    }

    if (month == 5 && date == 4)
        // 劳动节
    {
        badge.style.color = "rgba(255, 0, 0, 0.7)"
        badge.innerHTML = " · 五四新青年！";
    }

    if (month == 5 && date >= 24 && date <= 31)
        // 生日
    {
        badge.style.color = "rgba(255, 255, 0, 0.7)"
        badge.innerHTML = " · " + (year - 2009) + " ANNIVERSARY 🎂" ;
    }

    if (month == 10 && date <= 7)
        // 国庆节
    {
        badge.style.color = "rgba(255, 0, 0, 0.7)"
        badge.innerHTML = " · " + (year - 1949) + " 华诞";
    }

    if ((month == 10 && date >= 24) || (month == 11) || (month == 12 && date <= 26))
    {
        badge.style.color = "rgba(153,255,255,0.7)"
        badge.innerHTML = " · 冬日之心❄️"
    }

    if (Lmonth == 12)
    {   
        if (Ldate >= 20) 
        {
            var alpha = 1.0 - (30.0 - Ldate) / 10.0
            badge.style.color = "rgba(255, 0, 0, " + alpha +")"
        }
        if (30 - Ldate == 0)
            badge.innerHTML = " · 除夕"
        else
            badge.innerHTML = " · 新年倒计时 " + 30 - Ldate + " 天";
    }

    if (Lmonth == 1 && Ldate <= 7)
        // 春节
        // 生肖 todo
    {
        badge.style.color = "rgba(255, 0, 0, 0.7)"
        badge.innerHTML = " · 新年新气象";
    }

    if (Lmonth == 1 && date == 15)
    {
        badge.style.color = "rgba(255, 0, 0, 0.7)"
        badge.innerHTML = " · 上元🏮元宵";
    }

    if (Lmonth == 4 && Ldate == 4)
        // 清明
    {
        badge.style.color = "rgba(34, 139, 34, 0.7)"
        badge.innerHTML = " · 清明";
    }

    if (Lmonth == 8 && Ldate == 15)
        // 中秋
    {
        badge.style.color = "rgba(255, 255, 0, 0.7)"
        badge.innerHTML = " · 中秋🌕月圆";
    }

    // 插入新元素
    title.appendChild(badge);
}

function essay()
{
    // Get Json
    console.log('Custom Javascript: Module Essay Loaded Successfully.')

    $.ajax({
        type: 'get',
        datatype: 'json',
        url: '/essay.json',
        success: function(data)
        {
            // console.log(data)

            var say = data[0]
            // var author = say['author']
            var list = say['essay_list']

            for (var i = 0; i < list.length; i ++)
            {

                // var a = document.createElement("strong")
                // if (list[i].author == undefined)
                //     a.innerHTML = author
                // else
                //     a.innerHTML = list[i].author
                
                var p = document.createElement("p")
                p.innerHTML = list[i].content

                var t = document.createElement("sup")
                var tmp = list[i].date
                var tmp2 = tmp.substring(0, 10)
                t.innerHTML = tmp2

                var h = document.createElement("hr")

                var e = document.createElement("div")

                // e.appendChild(a)
                e.appendChild(p)
                e.appendChild(t)
                e.appendChild(h)
                
                if (document.getElementById('essay') != undefined)
                    document.getElementById('essay').appendChild(e)
                
            }

            // console.log(list[1].author)
        }
    }) 
}