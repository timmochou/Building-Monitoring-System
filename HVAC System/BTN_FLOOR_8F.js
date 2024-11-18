'use document'
const floors = ["B4", "B3", "B2", "B1", "1F", "2F", "3F", "4F", "5F", "6F", "7F", "8F", "9F", "10F", "11F", "12F", "13F", "14F", "15F", "16F", "17F", "18F", "19F", "20F", "R1"]
const this_floor = this.getValue()
let index = floors.indexOf(this_floor)
for (floor of floors) {
    $('[data-name=' +floor + '] .duchamp-widget-background').css('background-color', 'transparent');
if (duchamp.getWidgetByName("MODEL1").getMeshByName(floor)) {
duchamp.getWidgetByName("MODEL1").getMeshByName(floor).setVisible(true)
}
}

if (index !== -1) {
    // 找到上一個值
    if (index > 0) {
        const previousValue = floors[index - 1];
       duchamp.getWidgetByName("MODEL1").getMeshByName(previousValue).setVisible(false)
    }
    while (index < floors.length - 1) {
        const nextValue = floors[index + 1];
       index += 1
        duchamp.getWidgetByName("MODEL1").getMeshByName(nextValue).setVisible(false)
    } 

}

$('[data-name=' +this.getValue() + '] .duchamp-widget-background').css('background-color', '#4DC4FF');
duchamp.getWidgetByName("P_FLOOR").setValue(this_floor)