
var url = encodeURI(encodeURI(P_STREAM));
var camera = P_TITLE;
//url = FR.cjkEncode(url);
var iframe = $("<iframe id='inp' name='inp' width='100%' height='100%' scrolling='no' frameborder='0'>");
iframe.attr("src", url);
//窗体的属性

var o = {

    title: P_TITLE,    //标题

    width: 352,         //宽度，可以换成w/2，自适应

    height: 270,        //高度

    topMargin: 10     

};
//彈出窗體
duchamp.showDialog({ 
    title: o.title, 
    width: o.width, 
    height: o.height,  
    innerContent: iframe[0],
    top: o.topMargin, // 设置顶部边距
    titlePosition: "center"
    // 新增属性以设置标题位置，例如 "center", "left", "right"
});

'use document'
setTimeout(function() {
    $(".duchamp-custom-background").css("background","#4180D9");
    //設置標題的寬度
    $(".duchamp-custom-title").css({
        "font-size": "12px", // 調整字體大小
        "color": "#FFFFFF",   // 更改字體顏色
        "height": "25",
        "position": "relative", // 設置文字的相對位置
        "top": "-14px", // 文字距離上方的位置
        "left": "-15px"
    });
}, 100); // 1000 毫秒 = 1 秒

