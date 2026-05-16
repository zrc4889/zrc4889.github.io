function entrance()
{
    document.title = document.title
    console.log('Custom Javascript: Entrance Loaded Successfully.')

    siteStatus()
    badge()
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
    
    if (month >= 3 && month <= 5)
        badge.innerHTML = " · 春";
    
    if (month >= 6 && month <= 8)
        badge.innerHTML = " · 夏";

    if (month >= 9 && month <= 11)
        badge.innerHTML = " · 秋"

    if (month >= 12 && month <= 2)
        badge.innerHTML = " · 冬"

    // 节日

    if (month == 3)
        // 植树节
    {
        badge.style.color = "rgba(0, 255, 0, 0.7)"
        badge.innerHTML = " · TheNextTree🌳";
    }

    if (month == 4)
    {
        badge.style.color = "rgba(255, 255, 0, 0.7)"
        badge.innerHTML = " · 空山新雨后";
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

    if ((month == 10 && date >= 24) || (month == 11) || (month == 12))
    {
        badge.style.color = "rgba(153,255,255,0.7)"
        badge.innerHTML = " · 冬日之心❄️"
    }

    if (Lmonth == 12)
    {   

        if (Ldate >= 20) 
        {
            var alpha = (1.0 - (30.0 - Ldate) / 10.0) * 1.5
            badge.style.color = "rgba(255, 0, 0, " + alpha +")"
        }
        if (30 - Ldate == 0)
            badge.innerHTML = " · 除夕"

        else
            badge.innerHTML = " · 新年倒计时 " + (30 - Ldate) + " 天";
    }

    if (Lmonth == 1 && Ldate <= 7)
        // 春节
    {
        badge.style.color = "rgba(255, 0, 0, 0.7)"
        badge.innerHTML = " · 新年快乐";
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

    if (month == 12 && date >= 28)
    {
        badge.style.color = "rgba(255, 0, 0, 0.7)"
        badge.innerHTML = " · Goodbye " + year + "!";
    }

    if (month == 1 && date <= 3)
    {
        badge.style.color = "rgba(255, 0, 0, 0.7)"
        badge.innerHTML = " · Hello " + year + "!";
    }

    title.appendChild(badge);
}

function siteStatus() {
    'use strict';
    
    // 检查 jQuery 是否存在
    if (typeof $ === 'undefined') {
        console.error('Custom Javascript: jQuery is not loaded.');
        return;
    }
    
    console.log('Custom Javascript: Module Site Status Loaded Successfully.');
    
    $.ajax({
        type: 'get',
        dataType: 'json',
        url: 'https://zrc4889.github.io/status.json?_t=' + Date.now(),
        success: function(data) {
            // 验证数据是否为数组
            if (!Array.isArray(data) || data.length === 0) {
                console.warn('Custom Javascript: Invalid or empty data received.');
                return;
            }
            
            // 遍历数组，使用标准的数组长度控制循环
            for (let i = 0; i < data.length; i++) {
                const item = data[i];
                
                // 安全检查：确保 item 存在且有 UpdateDate 属性
                if (!item || !item.UpdateDate) {
                    console.warn(`Custom Javascript: Item ${i} missing UpdateDate, skipping.`);
                    continue;
                }
                
                const t = item.UpdateDate.toString();
                
                // 验证字符串长度是否为 14 位（YYYYMMDDHHMMSS）
                if (t.length !== 14 || !/^\d+$/.test(t)) {
                    console.warn(`Custom Javascript: Invalid UpdateDate format "${t}" at index ${i}, skipping.`);
                    continue;
                }
                
                // 解析日期时间
                const year = t.substring(0, 4);
                const month = t.substring(4, 6);
                const day = t.substring(6, 8);
                const hour = t.substring(8, 10);
                const minute = t.substring(10, 12);
                const second = t.substring(12, 14);
                
                console.log(`第 ${i + 1} 次提交记录于 ${year} 年 ${month} 月 ${day} 日 ${hour} 时 ${minute} 分 ${second} 秒。`);
            }
        },
        error: function(xhr, status, error) {
            console.error('Custom Javascript: Failed to fetch site status.', {
                status: status,
                error: error,
                url: this.url
            });
        }
    });
}


// function siteStatus()
// {
//     console.log('Custom Javascript: Module Site Status Loaded Successfully.')
//     $.ajax({
//         type: 'get',
//         datatype: 'json',
//         url: 'https://zrc4889.github.io/status.json?=' + Math.random(),
//         success: function(data)
//         {
//             var t = data[0]['UpdateDate'].toString()

//             for (var i = 0; t != undefined; i ++)
//             {
                
//                 console.log('Custom Javascript: Module Site Status Loaded Successfully.')
            
//                 t = data[i]['UpdateDate'].toString()

//                 console.log(t)

//                 var year = t.substring(0, 4)
//                 var month = t.substring(4, 6)
//                 var day = t.substring(6, 8)
//                 var hour = t.substring(8, 10)
//                 var minute = t.substring(10, 12)
//                 var second = t.substring(12, 14)

//                 console.log('第 ' + i +' 次提交记录于 ' + year + ' 年 ' + month + ' 月 ' + day + ' 日' + ' ' + hour + ' 时 ' + minute + ' 分 ' + second + ' 秒。')
            
//             }   
//         }
//     }) 
// }