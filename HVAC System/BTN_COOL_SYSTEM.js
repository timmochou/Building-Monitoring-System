/**
 * 控制冰水系統
 */
const floors = ["B4", "B3", "B2", "B1", "1F", "2F", "3F", "4F", "5F", "6F", "7F", "8F", "9F", "10F", "11F", "12F", "13F", "14F", "15F", "16F", "17F", "18F", "19F", "20F", "R1"]


//顯示對應COOL的樓層
duchamp.getWidgetByName("ABS_AIR").setVisible(false);
duchamp.getWidgetByName("ABS_COOL").setVisible(true);
// 空調箱系統隱藏
duchamp.getWidgetByName("PIC_AIR_SYS未選").setVisible(true);
duchamp.getWidgetByName("PIC_AIR_SYS選中").setVisible(false);
duchamp.getWidgetByName("TITLE_AIR_SYS選中").setVisible(false);
duchamp.getWidgetByName("TITLE_AIR_SYS未選").setVisible(true);

// 室內外溫度標題隱藏
duchamp.getWidgetByName("PIC_WEATHER").setVisible(false);
duchamp.getWidgetByName("TEXT_WEATHER_TITLE").setVisible(false);

// 冰水系統顯示
duchamp.getWidgetByName("PIC_COOL_SYS未選").setVisible(false);
duchamp.getWidgetByName("PIC_COOL_SYS選中").setVisible(true);
duchamp.getWidgetByName("TITLE_COOL_SYS選中").setVisible(true);
duchamp.getWidgetByName("TITLE_COOL_SYS未選").setVisible(false);

// 顯示冷水曲線標題
duchamp.getWidgetByName("TEXT_COOL_TITLE").setVisible(true);
duchamp.getWidgetByName("PIC_WATER_TITLE").setVisible(true);



duchamp.getWidgetByName("MODEL1").refresh();

// 隱藏室內外溫度曲線
duchamp.getWidgetByName("CHT_WEATHER").setVisible(false);

// 顯示冷水曲線
duchamp.getWidgetByName("CHT_WATER").setVisible(true);

// Air 圖例種類以及背景隱藏
const airElements = ["INFO_CATEGORY", "BTN_CO2", "BTN_IN", "BTN_OUT", "BTN_STOP", "BTN_START",
                        "TITLE_CO2", "TITLE_IN", "TITLE_OUT", "TITLE_STOP", "TITLE_START"];
airElements.forEach(element => duchamp.getWidgetByName(element).setVisible(false));

// AIR 表格以及背景隱藏
const airTableElements = ["REP_AIR_SYS", "PIC_AIR01", "PIC_AIR02", "PIC_AIR03", "PIC_AIR04"];
airTableElements.forEach(element => duchamp.getWidgetByName(element).setVisible(false));

// WATER 圖例種類以及背景顯示
const waterElements = ["INFO_CATEGORY_WATER", "BTN_START_WATER", "BTN_STOP_WATER", "BTN_PRESSURE", "BTN_TEM","BTN_FLOW",
                        "TITLE_PRESSURE","TITLE_FLOW", "TITLE_TEM", "TITLE_STOP_WATER", "TITLE_START_WATER"];
waterElements.forEach(element => duchamp.getWidgetByName(element).setVisible(true));

// WATER 表格及背景顯示
const waterTableElements = ["REP_WATER_SYS", "PIC_WATER04", "PIC_WATER03", "PIC_WATER02", "PIC_WATER01"];
waterTableElements.forEach(element => duchamp.getWidgetByName(element).setVisible(true));


"use document"
setTimeout(() => {
    duchamp.getWidgetByName("MODEL1").getMeshByName('環宇大樓').setVisible(true);


  //隱藏9F-20F的按紐背景，只留下8F  
  ['B1', 'R1'].forEach(floor => {
    $(`[data-name="${floor}"] .duchamp-widget-background`).css('background-color', 'transparent');
  });
//牆要顯示21，因為R1樓層要顯示ƒ
    for (let i = 0; i <= 20; i++) {
        duchamp.getWidgetByName("MODEL1").getMeshByName("牆0"+i.toString().padStart(2, "0")).setVisible(false)
    }
    duchamp.getWidgetByName("MODEL1").getMeshByName("PAH-81").setVisible(false)
    duchamp.getWidgetByName("MODEL1").getMeshByName('地面001').setVisible(false)
    duchamp.getWidgetByName("MODEL1").getMeshByName('Plane').setVisible(false)
    duchamp.getWidgetByName("MODEL1").getMeshByName('環宇大樓').focus({target: "top",targetpos: () =>  [3.75,1.45,1.76], viewRay: () => [-0.75, -1, 1],distance: (v) => v * 1.25 })

    
}, 500)

