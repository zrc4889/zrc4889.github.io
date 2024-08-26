function badge()
{

    var title = document.getElementsByClassName("navbar-brand")[0];

    var d = new Date()
    var date = d.getDate()
    var month = d.getMonth() + 1
    var year = d.getFullYear()

    var Lunar = lunarFun.gregorianToLunal(year, month, date)
    var Lyear = Lunar[0];
    var Lmonth = Lunar[1];
    var Ldate = Lunar[2];

    // innerBadge 标题 Badge

    var badge = document.createElement("strong");
    
    // todo.. 生肖
    // todo.. 时间段而不是时间点

    if (month == 12 && date >= 27)
    {
        badge.style.color = "rgba(255, 0, 0, 0.7)"
        badge.innerHTML = " · Goodbye " + year + "!";
    }

    if (month == 1 && date <= 3)
        // 元旦
    {
        badge.style.color = "rgba(255, 0, 0, 0.7)"
        badge.innerHTML = " · Hello " + year + "!";
    }

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
        badge.innerHTML = " · 上元🏮";
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
        badge.innerHTML = " · 中秋🌕";
    }

    // 插入新元素
    title.appendChild(badge);

}

function entrance()
{
    console.log('Personal Javascript Loaded Successfully.')// 获取父元素
    badge()
}

function essay()
{
    // Get Json

    $.ajax({
        type: 'get',
        datatype: 'json',
        url: '/essay.json',
        success: function(data)
        {
            console.log(data)
        }
    }) 


}