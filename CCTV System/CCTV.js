'use document';

const floors = ["B4", "B3", "B2", "B1", "1F", "2F", "3F", "4F", "5F", "6F", "7F", "8F", "9F", "10F", "11F", "12F", "13F", "14F", "15F", "16F", "17F", "18F", "19F", "20F", "R1"];
const this_floor = this.getValue();
const index = floors.indexOf(this_floor);

for (let floor of floors) {
    $('[data-name=' + floor + '] .duchamp-widget-background').css('background-color', 'transparent');
    if (duchamp.getWidgetByName("MODEL1").getMeshByName(floor)) {
        duchamp.getWidgetByName("MODEL1").getMeshByName(floor).setVisible(true);
    }
}

if (index !== -1) {
    if (index > 0) {
        const previousValue = floors[index - 1];
        duchamp.getWidgetByName("MODEL1").getMeshByName(previousValue).setVisible(false);
    }
    
    if (index < floors.length - 3) {
        const nextValue = floors[index + 1];
        const next2Value = floors[index + 2];
        const next3Value = floors[index + 3];
        duchamp.getWidgetByName("MODEL1").getMeshByName(nextValue).setVisible(false);
        duchamp.getWidgetByName("MODEL1").getMeshByName(next2Value).setVisible(false);
        duchamp.getWidgetByName("MODEL1").getMeshByName(next3Value).setVisible(false);
    } else if (index < floors.length - 1) {
        const nextValue = floors[index + 1];
        duchamp.getWidgetByName("MODEL1").getMeshByName(nextValue).setVisible(false);
    }

    
    

    
}
if (this_floor == '') {
    duchamp.getWidgetByName("MODEL1").getMeshByName("環宇大樓").focus({target: "center", distance: (v) => v * 0.7});
} else {
    duchamp.getWidgetByName("MODEL1").getMeshByName(this.getValue()).focus({target: "center", distance: (v) => v * 0.5});
    $('[data-name=' + this.getValue() + '] .duchamp-widget-background').css('background-color', '#4DC4FF');
}


const cameraVisibility = {
    "1F": ["camera1", "camera1-1"],
    "8F": ["camera8", "camera8-1"],
    "15F": ["camera15", "camera15-1"],
    "R1": ["cameraR1"]
};
const allCameras = ["camera1", "camera1-1", "camera8", "camera8-1", "camera15", "camera15-1", "cameraR1"];

if (cameraVisibility[this_floor]) {
    allCameras.forEach(camera => {          
        const isVisible = cameraVisibility[this_floor].includes(camera);
        duchamp.getWidgetByName("MODEL1").getMeshByName(camera).setVisible(isVisible);
    });
} else {
    allCameras.forEach(camera => {
        duchamp.getWidgetByName("MODEL1").getMeshByName(camera).setVisible(false);
    });
}