//定義照明按鈕按鈕
const light_button_show = ["PIC_LIGHT選中", "TITLE_LIGHT選中 "];
const light_button_hide = ["PIC_LIGHT未選", "TITLE_LIGHT未選"];
//定義動力按鈕
const power_button_show = ["PIC_POWER選中", "TITLE_POWER選中"];
const power_button_hide = ["PIC_POWER未選", "TITLE_POWER未選"];
//定義UPS按鈕
const ups_button_show = ["PIC_UPS選中", "TITLE_UPS選中"];
const ups_button_hide = ["PIC_UPS未選", "TITLE_UPS未選"];
//定義AIR按鈕
const air_button_show = ["PIC_AIR選中", "TITLE_AIR選中"];
const air_button_hide = ["PIC_AIR未選", "TITLE_AIR未選"];


/**
 * 點擊照明按鈕，隱藏動力、UPS、AIR按鈕，顯示照明按鈕
 */
light_button_show.forEach(element => duchamp.getWidgetByName(element).setVisible(true));
light_button_hide.forEach(element => duchamp.getWidgetByName(element).setVisible(false));
power_button_show.forEach(element => duchamp.getWidgetByName(element).setVisible(false));
power_button_hide.forEach(element => duchamp.getWidgetByName(element).setVisible(true));
ups_button_show.forEach(element => duchamp.getWidgetByName(element).setVisible(false));
ups_button_hide.forEach(element => duchamp.getWidgetByName(element).setVisible(true));
air_button_show.forEach(element => duchamp.getWidgetByName(element).setVisible(false));
air_button_hide.forEach(element => duchamp.getWidgetByName(element).setVisible(true));
//設定能管系統的類型為照明
duchamp.getWidgetByName("P_TYPE").setValue("light");


/**
 * 點擊動力按鈕，隱藏照明、UPS、AIR按鈕，顯示動力按鈕
 */
light_button_show.forEach(element => duchamp.getWidgetByName(element).setVisible(false));
light_button_hide.forEach(element => duchamp.getWidgetByName(element).setVisible(true));
power_button_show.forEach(element => duchamp.getWidgetByName(element).setVisible(true));
power_button_hide.forEach(element => duchamp.getWidgetByName(element).setVisible(false));
ups_button_show.forEach(element => duchamp.getWidgetByName(element).setVisible(false));
ups_button_hide.forEach(element => duchamp.getWidgetByName(element).setVisible(true));
air_button_show.forEach(element => duchamp.getWidgetByName(element).setVisible(false));
air_button_hide.forEach(element => duchamp.getWidgetByName(element).setVisible(true));
//設定能管系統的類型為動力
duchamp.getWidgetByName("P_TYPE").setValue("power");

/**
 * 點擊UPS按鈕，隱藏照明、動力、AIR按鈕，顯示UPS按鈕
 */
light_button_show.forEach(element => duchamp.getWidgetByName(element).setVisible(false));
light_button_hide.forEach(element => duchamp.getWidgetByName(element).setVisible(true));
power_button_show.forEach(element => duchamp.getWidgetByName(element).setVisible(false));
power_button_hide.forEach(element => duchamp.getWidgetByName(element).setVisible(true));
ups_button_show.forEach(element => duchamp.getWidgetByName(element).setVisible(true));
ups_button_hide.forEach(element => duchamp.getWidgetByName(element).setVisible(false));
air_button_show.forEach(element => duchamp.getWidgetByName(element).setVisible(false));
air_button_hide.forEach(element => duchamp.getWidgetByName(element).setVisible(true));
//設定能管系統的類型為UPS
duchamp.getWidgetByName("P_TYPE").setValue("UPS");


/**
 * 點擊AIR按鈕，隱藏照明、動力、UPS按鈕，顯示AIR按鈕
 */
light_button_show.forEach(element => duchamp.getWidgetByName(element).setVisible(false));
light_button_hide.forEach(element => duchamp.getWidgetByName(element).setVisible(true));
power_button_show.forEach(element => duchamp.getWidgetByName(element).setVisible(false));
power_button_hide.forEach(element => duchamp.getWidgetByName(element).setVisible(true));
ups_button_show.forEach(element => duchamp.getWidgetByName(element).setVisible(false));
ups_button_hide.forEach(element => duchamp.getWidgetByName(element).setVisible(true));
air_button_show.forEach(element => duchamp.getWidgetByName(element).setVisible(true));
air_button_hide.forEach(element => duchamp.getWidgetByName(element).setVisible(false));
//設定能管系統的類型為AIR
duchamp.getWidgetByName("P_TYPE").setValue("AIR");