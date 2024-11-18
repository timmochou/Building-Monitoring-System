'use document'

const floors = ["B4", "B3", "B2", "B1", "1F", "2F", "3F", "4F", "5F", "6F", "7F", "8F", "9F", "10F", "11F", "12F", "13F", "14F", "15F", "16F", "17F", "18F", "19F", "20F", "R1"]
const floors1 = ["B4A","B3A", "B2A", "B1A", "1FA", "2FA", "3FA", "4FA", "5FA", "6FA", "7FA", "8FA", "9FA", "10FA", "11FA", "12FA", "13FA", "14FA", "15FA", "16FA", "17FA", "18FA", "19FA", "20FA", "R1A"]
const this_floor = this.getValue()
const index = floors.indexOf(this_floor)
const building = duchamp.getWidgetByName("BTN_Building").getValue()
if (building == "環宇大樓") {
    const index = floors.indexOf(this_floor)
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
        if (index < floors.length - 3) {
            const nextValue = floors[index + 1];
            const next2Value = floors[index + 2];
            const next3Value = floors[index + 3];
            duchamp.getWidgetByName("MODEL1").getMeshByName(nextValue).setVisible(false)
            duchamp.getWidgetByName("MODEL1").getMeshByName(next2Value).setVisible(false)
            duchamp.getWidgetByName("MODEL1").getMeshByName(next3Value).setVisible(false)
        }  else  if (index < floors.length - 1) {
            const nextValue = floors[index + 1];
            duchamp.getWidgetByName("MODEL1").getMeshByName(nextValue).setVisible(false)
        } 
    }
    duchamp.getWidgetByName("MODEL1").getMeshByName(this.getValue()).focus()
    $('[data-name=' +this.getValue() + '] .duchamp-widget-background').css('background-color', '#4DC4FF');
}
else{
    const index = floors1.indexOf(this_floor)
    for (floor1 of floors1) {
        $('[data-name=' + floor1 + '] .duchamp-widget-background').css('background-color', 'transparent');
        if (duchamp.getWidgetByName("MODEL1").getMeshByName(floor1)) {
            duchamp.getWidgetByName("MODEL1").getMeshByName(floor1).setVisible(true)
        }
    }
    
    if (index !== -1) {
        if (index > 0) {
            const previousValue = floors1[index - 1];
            duchamp.getWidgetByName("MODEL1").getMeshByName(previousValue).setVisible(false)
        }
        if (index < floors1.length - 3) {
            const nextValue = floors1[index + 1];
            const next2Value = floors1[index + 2];
            const next3Value = floors1[index + 3];
            duchamp.getWidgetByName("MODEL1").getMeshByName(nextValue).setVisible(false)
            duchamp.getWidgetByName("MODEL1").getMeshByName(next2Value).setVisible(false)
            duchamp.getWidgetByName("MODEL1").getMeshByName(next3Value).setVisible(false)
        } else if (index < floors1.length - 1) {
            const nextValue = floors1[index + 1];
            duchamp.getWidgetByName("MODEL1").getMeshByName(nextValue).setVisible(false)
        }
    }
    duchamp.getWidgetByName("MODEL1").getMeshByName(this.getValue()).focus()
    $('[data-name=' + this.getValue() + '] .duchamp-widget-background').css('background-color', '#4DC4FF');
}
// duchamp.getWidgetByName("MODEL1").getMeshByName(this.getValue()).setVisible(true)




const building = duchamp.getWidgetByName("BTN_Building").getValue()
const floors = ["B4", "B3", "B2", "B1", "1F", "2F", "3F", "4F", "5F", "6F", "7F", "8F", "9F", "10F", "11F", "12F", "13F", "14F", "15F", "16F", "17F", "18F", "19F", "20F", "R1"]

                for (let floor of floors) {
                    duchamp.getWidgetByName("MODEL1").getMeshByName(floor).setVisible(true)
                }
if (building == "環宇大樓") {
    

    setTimeout(() => {
        duchamp.getWidgetByName("MODEL1").getMeshByName('環宇大樓').setVisible(true);
        

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


'use document'

const floors = ["B4", "B3", "B2", "B1", "1F", "2F", "3F", "4F", "5F", "6F", "7F", "8F", "9F", "10F", "11F", "12F", "13F", "14F", "15F", "16F", "17F", "18F", "19F", "20F", "R1"]
const floors1 = ["B4A","B3A", "B2A", "B1A", "1FA", "2FA", "3FA", "4FA", "5FA", "6FA", "7FA", "8FA", "9FA", "10FA", "11FA", "12FA", "13FA", "14FA", "15FA", "16FA", "17FA", "18FA", "19FA", "20FA", "R1A"]
const this_floor = this.getValue()
const index = floors.indexOf(this_floor)
const building = duchamp.getWidgetByName("BTN_Building").getValue()
if (building == "環宇大樓") {
    const index = floors.indexOf(this_floor)
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
        if (index < floors.length - 3) {
            const nextValue = floors[index + 1];
            const next2Value = floors[index + 2];
            const next3Value = floors[index + 3];
            duchamp.getWidgetByName("MODEL1").getMeshByName(nextValue).setVisible(false)
            duchamp.getWidgetByName("MODEL1").getMeshByName(next2Value).setVisible(false)
            duchamp.getWidgetByName("MODEL1").getMeshByName(next3Value).setVisible(false)
        }  else  if (index < floors.length - 1) {
            const nextValue = floors[index + 1];
            duchamp.getWidgetByName("MODEL1").getMeshByName(nextValue).setVisible(false)
        } 
    }
    duchamp.getWidgetByName("MODEL1").getMeshByName(this.getValue()).focus()
    $('[data-name=' +this.getValue() + '] .duchamp-widget-background').css('background-color', '#4DC4FF');
}
else{
    const index = floors1.indexOf(this_floor)
    for (floor1 of floors1) {
        $('[data-name=' + floor1 + '] .duchamp-widget-background').css('background-color', 'transparent');
        if (duchamp.getWidgetByName("MODEL1").getMeshByName(floor1)) {
            duchamp.getWidgetByName("MODEL1").getMeshByName(floor1).setVisible(true)
        }
    }
    
    if (index !== -1) {
        if (index > 0) {
            const previousValue = floors1[index - 1];
            duchamp.getWidgetByName("MODEL1").getMeshByName(previousValue).setVisible(false)
        }
        if (index < floors1.length - 3) {
            const nextValue = floors1[index + 1];
            const next2Value = floors1[index + 2];
            const next3Value = floors1[index + 3];
            duchamp.getWidgetByName("MODEL1").getMeshByName(nextValue).setVisible(false)
            duchamp.getWidgetByName("MODEL1").getMeshByName(next2Value).setVisible(false)
            duchamp.getWidgetByName("MODEL1").getMeshByName(next3Value).setVisible(false)
        } else if (index < floors1.length - 1) {
            const nextValue = floors1[index + 1];
            duchamp.getWidgetByName("MODEL1").getMeshByName(nextValue).setVisible(false)
        }
    }
    duchamp.getWidgetByName("MODEL1").getMeshByName(this.getValue()).focus()
    $('[data-name=' + this.getValue() + '] .duchamp-widget-background').css('background-color', '#4DC4FF');
}
// duchamp.getWidgetByName("MODEL1").getMeshByName(this.getValue()).setVisible(true)




