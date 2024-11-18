/**
 * 點擊警報列表
 */

//定義警報列表按鈕
const alarm_button_show = ["PIC_ALARM_選中", "TITLE_ALARM_選中"];
const alarm_button_hide = ["PIC_ALARM_未選", "TITLE_ALARM_未選"];
//定義設備列表按鈕
const equipment_button_show = ["PIC_EQUIP_選中", "TITLE_EQUIP_選中"];
const equipment_button_hide = ["PIC_EQUIP_未選", "TITLE_EQUIP_未選"];


//定義警報列表的圖片
const alarm_chart = duchamp.getWidgetByName("REP_ALARM");

//定義設備列表的圖片
const equipment_chart = duchamp.getWidgetByName("REP_EQUIP");



//當點擊警報列表按鈕時，顯示警報列表按鈕，並且隱藏設備列表按鈕
alarm_button_show.forEach(element => duchamp.getWidgetByName(element).setVisible(true));
alarm_button_hide.forEach(element => duchamp.getWidgetByName(element).setVisible(false));
equipment_button_show.forEach(element => duchamp.getWidgetByName(element).setVisible(false));
equipment_button_hide.forEach(element => duchamp.getWidgetByName(element).setVisible(true));
alarm_chart.setVisible(true);
equipment_chart.setVisible(false);


//當點擊設備列表時，顯示設備列表按鈕，並且隱藏警報列表按鈕
equipment_button_show.forEach(element => duchamp.getWidgetByName(element).setVisible(true));
equipment_button_hide.forEach(element => duchamp.getWidgetByName(element).setVisible(false));
alarm_button_show.forEach(element => duchamp.getWidgetByName(element).setVisible(false));
alarm_button_hide.forEach(element => duchamp.getWidgetByName(element).setVisible(true));
alarm_chart.setVisible(false);
equipment_chart.setVisible(true);
duchamp.getWidgetByName('P_STREAM').setValue('')