/**
 * 點擊妥善率按鈕
 */
// 先定義妥善率按鈕
const proper_rate_button_show = ["PIC_PRO選中", "TITLE_PROPER選中"];
const proper_rate_button_hide = ["PIC_PRO未選", "TITLE_PROPER未選"];

//定義使用率按鈕
const used_rate_button_show = ["PIC_USE選中", "TITLE_USE選中"];
const used_rate_button_hide = ["PIC_USE未選", "TITLE_USE未選"];

//定義妥善率的圖表
const proper_chart = ["CHT_AIR_PROPER", "REP_AIR_PROPER", "CHT_CCTV_PROPER", "REP_CCTV_PROPER"]
//定義使用率的圖表
const used_chart = ["CHT_AIR_USED", "REP_AIR_USED", "CHT_CCTV_USED", "REP_CCTV_USED"]

//當點擊妥善率按鈕時：去顯示proper_rate_button_show，並且隱藏proper_rate_button_hide, 以及 顯示used_rate_button_hide，隱藏used_rate_button_show
proper_rate_button_show.forEach(element => duchamp.getWidgetByName(element).setVisible(true));
proper_rate_button_hide.forEach(element => duchamp.getWidgetByName(element).setVisible(false));
used_rate_button_show.forEach(element => duchamp.getWidgetByName(element).setVisible(false));
used_rate_button_hide.forEach(element => duchamp.getWidgetByName(element).setVisible(true));
proper_chart.forEach(element => duchamp.getWidgetByName(element).setVisible(true));
used_chart.forEach(element => duchamp.getWidgetByName(element).setVisible(false));

/**
 * 點擊使用率按鈕時
 */

used_rate_button_show.forEach(element => duchamp.getWidgetByName(element).setVisible(true));
used_rate_button_hide.forEach(element => duchamp.getWidgetByName(element).setVisible(false));
proper_rate_button_show.forEach(element => duchamp.getWidgetByName(element).setVisible(false));
proper_rate_button_hide.forEach(element => duchamp.getWidgetByName(element).setVisible(true));
proper_chart.forEach(element => duchamp.getWidgetByName(element).setVisible(false));
used_chart.forEach(element => duchamp.getWidgetByName(element).setVisible(true));