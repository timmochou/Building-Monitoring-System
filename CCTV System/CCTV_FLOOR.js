/**
 * 空調系統button js
 */
const floors = ["B4", "B3", "B2", "B1", "1F", "2F", "3F", "4F", "5F", "6F", "7F", "8F", "9F", "10F", "11F", "12F", "13F", "14F", "15F", "16F", "17F", "18F", "19F", "20F", "R1"]

for (let floor of floors) {
    duchamp.getWidgetByName("MODEL1").getMeshByName(floor).setVisible(true)
};
setTimeout(() => {
    duchamp.getWidgetByName("PIC_AIR_SYS0").setVisible(false)
    duchamp.getWidgetByName("PIC_COOL_SYS0").setVisible(true)
    duchamp.getWidgetByName("PIC_FIRE_SYS0").setVisible(true)

    for (let floor of floors) {
        duchamp.getWidgetByName("MODEL1").getMeshByName(floor).setVisible(false)
    }
    duchamp.getWidgetByName("MODEL1").getMeshByName("8F").setVisible(true)
    duchamp.getWidgetByName("MODEL1").getMeshByName("牆008").setVisible(false)
    duchamp.getWidgetByName("MODEL1").getMeshByName("管道008").setVisible(false)
    duchamp.getWidgetByName("MODEL1").getMeshByName("PAH-81").focus({target: "center",distance: (v) => v*1.5 });
    //控制按鈕樓層8F-20F
    const floor2 = Array.from({length: 13}, (_, i) => `${i + 8}F`).join('\',\'');
    duchamp.getWidgetByName("BTN_FLOOR").refresh({P_FLOOR: floor2});

}, 500); 

/**
 * 冷氣系統Button 
 */
const building = duchamp.getWidgetByName("BTN_Building").getValue()
const floors = ["B4", "B3", "B2", "B1", "1F", "2F", "3F", "4F", "5F", "6F", "7F", "8F", "9F", "10F", "11F", "12F", "13F", "14F", "15F", "16F", "17F", "18F", "19F", "20F", "R1"]

                for (let floor of floors) {
                    duchamp.getWidgetByName("MODEL1").getMeshByName(floor).setVisible(true)
                }
if (building == "環宇大樓") {
    

    setTimeout(() => {
        duchamp.getWidgetByName("MODEL1").getMeshByName('環宇大樓').setVisible(true);
        duchamp.getWidgetByName("PIC_AIR_SYS0").setVisible(true)
        duchamp.getWidgetByName("PIC_COOL_SYS0").setVisible(false)
        duchamp.getWidgetByName("PIC_FIRE_SYS0").setVisible(true)

        for (let i = 0; i <= 21; i++) {
            duchamp.getWidgetByName("MODEL1").getMeshByName("牆0"+i.toString().padStart(2, "0")).setVisible(false)
        }
        duchamp.getWidgetByName("MODEL1").getMeshByName("PAH-81").setVisible(false)
        duchamp.getWidgetByName("MODEL1").getMeshByName('地面001').setVisible(false)
        duchamp.getWidgetByName("MODEL1").getMeshByName('Plane').setVisible(false)
        duchamp.getWidgetByName("MODEL1").getMeshByName('環宇大樓').focus({target: "center",distance: (v) => v*1.5})
//控制按鈕樓層B1F,R1F
        duchamp.getWidgetByName("BTN_FLOOR").refresh({P_FLOOR: 'B1\',\'R1'});

    }, 500)
}