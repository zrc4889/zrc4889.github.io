function func()
{
    console.log('yes!')// 获取父元素

    var parent = document.getElementsByClassName("navbar-brand")[0];

    // 创建新元素
    var newElement = document.createElement("strong");
    newElement.style.color = "rgba(255,239,97,0.7)";
    newElement.innerHTML = " · 中秋";

    // 插入新元素
    parent.appendChild(newElement);
}