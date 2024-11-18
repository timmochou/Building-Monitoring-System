/**
 * 空調系統控制樓層以及按鈕
 */
const building = duchamp.getWidgetByName("BTN_BUILDING").getValue();
//顯示對應AIR的樓層
duchamp.getWidgetByName("ABS_AIR").setVisible(true);
duchamp.getWidgetByName("ABS_COOL").setVisible(false);

// 空調箱系統顯示
duchamp.getWidgetByName("PIC_AIR_SYS未選").setVisible(false);
duchamp.getWidgetByName("PIC_AIR_SYS選中").setVisible(true);
duchamp.getWidgetByName("TITLE_AIR_SYS選中").setVisible(true);
duchamp.getWidgetByName("TITLE_AIR_SYS未選").setVisible(false);

// 室內外溫度標題顯示
duchamp.getWidgetByName("PIC_WEATHER").setVisible(true);
duchamp.getWidgetByName("TEXT_WEATHER_TITLE").setVisible(true);

// 冰水系統隱藏
duchamp.getWidgetByName("PIC_COOL_SYS未選").setVisible(true);
duchamp.getWidgetByName("PIC_COOL_SYS選中").setVisible(false);
duchamp.getWidgetByName("TITLE_COOL_SYS選中").setVisible(false);
duchamp.getWidgetByName("TITLE_COOL_SYS未選").setVisible(true);

// 隱藏冷水曲線標題
duchamp.getWidgetByName("TEXT_COOL_TITLE").setVisible(false);
duchamp.getWidgetByName("PIC_WATER_TITLE").setVisible(false);

duchamp.getWidgetByName("MODEL1").refresh();

// 顯示室內外溫度曲線
duchamp.getWidgetByName("CHT_WEATHER").setVisible(true);

// 隱藏冷水曲線
duchamp.getWidgetByName("CHT_WATER").setVisible(false);

// Air 圖例種類以及背景顯示
const airElements = ["INFO_CATEGORY", "BTN_CO2", "BTN_IN", "BTN_OUT", "BTN_STOP", "BTN_START",
                        "TITLE_CO2", "TITLE_IN", "TITLE_OUT", "TITLE_STOP", "TITLE_START"];
airElements.forEach(element => duchamp.getWidgetByName(element).setVisible(true));

// AIR 表格以及背景顯示
const airTableElements = ["REP_AIR_SYS", "PIC_AIR01", "PIC_AIR02", "PIC_AIR03", "PIC_AIR04"];
airTableElements.forEach(element => duchamp.getWidgetByName(element).setVisible(true));

// WATER 圖例種類以及背景隱藏
const waterElements = ["INFO_CATEGORY_WATER", "BTN_START_WATER", "BTN_STOP_WATER", "BTN_PRESSURE", "BTN_TEM","BTN_FLOW", "TITLE_FLOW",
                        "TITLE_PRESSURE", "TITLE_TEM", "TITLE_STOP_WATER", "TITLE_START_WATER"];
waterElements.forEach(element => duchamp.getWidgetByName(element).setVisible(false));

// WATER 表格及背景隱藏
const waterTableElements = ["REP_WATER_SYS", "PIC_WATER04", "PIC_WATER03", "PIC_WATER02", "PIC_WATER01"];
waterTableElements.forEach(element => duchamp.getWidgetByName(element).setVisible(false));    

//pop到8F的視角
'use document'
const floors = ["B4", "B3", "B2", "B1", "1F", "2F", "3F", "4F", "5F", "6F", "7F", "8F", "9F", "10F", "11F", "12F", "13F", "14F", "15F", "16F", "17F", "18F", "19F", "20F", "R1"]
const this_floor = "8F"
let index = floors.indexOf(this_floor)
for (floor of floors) {
    $('[data-name=' +floor + '] .duchamp-widget-background').css('background-color', 'transparent');
if (duchamp.getWidgetByName("MODEL1").getMeshByName(floor)) {
duchamp.getWidgetByName("MODEL1").getMeshByName(floor).setVisible(true)
}
}
// duchamp.getWidgetByName("MODEL1").getMeshByName(this.getValue()).setVisible(true)
if (index !== -1) {
    // 找到上一個值
    if (index > 0) {
        const previousValue = floors[index - 1];
       duchamp.getWidgetByName("MODEL1").getMeshByName(previousValue).setVisible(false)
    }
    while (index < floors.length - 1) {
        const nextValue = floors[index + 1];
       index += 1
      //  const next2Value = floors[index + 2];
      //  const next3Value = floors[index + 3];
        duchamp.getWidgetByName("MODEL1").getMeshByName(nextValue).setVisible(false)
      //  duchamp.getWidgetByName("MODEL1").getMeshByName(next2Value).setVisible(false)
      // duchamp.getWidgetByName("MODEL1").getMeshByName(next3Value).setVisible(false)
    } 
// else  if (index < floors.length - 1) {
//        const nextValue = floors[index + 1];
  //      duchamp.getWidgetByName("MODEL1").getMeshByName(nextValue).setVisible(false)
 //   } 
}
//duchamp.getWidgetByName("MODEL1").getMeshByName(this.getValue()).focus()

$('[data-name=' +this_floor + '] .duchamp-widget-background').css('background-color', '#4DC4FF');
duchamp.getWidgetByName("P_FLOOR").setValue(this_floor)