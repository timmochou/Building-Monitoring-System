duchamp.getWidgetByName("MODEL1").refresh()
// 判断 BTN_building 是否为环宇大楼
const building = duchamp.getWidgetByName("BTN_Building").getValue()
if (building == "環宇大樓") {
    

    setTimeout(() => {
        // ... 现有代码 ...
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

    }, 1000)
}