//先定義role
var b = role;
if(b == 'baikong_view'){
    FR.Msg.alert("權限提示", "您的角色無權限更改處理狀態。");
} else if(b =='baikong_edit'){
    url = "/Dev11/decision/view/report?viewlet=%25E7%2599%25BE%25E6%258E%25A7%252Fr002_1.cpt&op=write"
//url = FR.cjkEncode(url);
var iframe = $("<iframe id='inp' name='inp' width='100%' height='100%' scrolling='yes' frameborder='0'>");
iframe.attr("src", url);
//窗体的属性

var o = {

    title: "更改設備警報狀態",    //标题

    width: 380,         //宽度，可以换成w/2，自适应

    height: 500,        //高度

    //closable:true,    //是否显示关闭按钮，默认true

    confirm:true,     //是否添加确认取消按钮,默认false

    //draggable:true   //是否可拖动，默认true

};

//弹出窗体

    FR.showDialog(o.title, o.width, o.height, iframe);
}else {
    FR.Msg.alert("權限提示", "您的角色無權限更改處理狀態。");
}

//最近更新時間不知為啥會有這段
url = "/Dev11/decision/view/report?viewlet=%25E7%2599%25BE%25E6%258E%25A7%252Fr002_1.cpt&op=write"
//url = FR.cjkEncode(url);
var iframe = $("<iframe id='inp' name='inp' width='100%' height='100%' scrolling='yes' frameborder='0'>");
iframe.attr("src", url);
//窗体的属性

var o = {

    title: "　更改設備警報狀態",    //标题

    width: 380,         //宽度，可以换成w/2，自适应

    height: 500,        //高度

    //closable:true,    //是否显示关闭按钮，默认true

   // confirm:true,     //是否添加确认取消按钮,默认false

    //draggable:true   //是否可拖动，默认true

};

//弹出窗体

FR.showDialog(o.title, o.width, o.height, iframe);
$(".fr-core-panel-title").css("background-color", "#162C4B")
$(".fr-core-panel-title").css("color", "white")