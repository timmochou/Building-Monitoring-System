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

/**
 * 移動相機視角，並且要拆開成兩個JS來寫
 */
"use document"
//傳參數P_FLOOR 給表格，資料顯示8F
duchamp.getWidgetByName("P_FLOOR").setValue("8F")
setTimeout(() => {
$(`[data-name="8F"] .duchamp-widget-background`).css('background-color', '#4DC4FF');
//隱藏9F-20F的按紐背景，只留下8F  
['9F', '10F',"11F", "12F", "13F", "14F", "15F", "16F", "17F", "18F", "19F", "20F"].forEach(floor => {
    $(`[data-name="${floor}"] .duchamp-widget-background`).css('background-color', 'transparent');
});
//隱藏9F-20F的樓層模型
['9F', '10F',"11F", "12F", "13F", "14F", "15F", "16F", "17F", "18F", "19F", "20F","R1"].forEach(floor => {
    duchamp.getWidgetByName("MODEL1").getMeshByName(floor).setVisible(false);
});

//將鏡頭轉到該視角
duchamp.getWidgetByName("MODEL1").getMeshByName("R1").focus({
    target: "top",
    targetpos: () => [3.56,1.95,1.76], 
    viewRay: () => [0.0000000001, -1, 0.0000001],
    distance: (v) => v * 0.05
});
}, 5000); 





