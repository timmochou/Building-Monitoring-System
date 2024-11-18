'use document'
/**
 * 除了有特殊角度的floor（8F,R1,B1)都用此紀錄
 */
const floors = ["B4", "B3", "B2", "B1", "1F", "2F", "3F", "4F", "5F", "6F", "7F", "8F", "9F", "10F", "11F", "12F", "13F", "14F", "15F", "16F", "17F", "18F", "19F", "20F", "R1"]
const this_floor = this.getValue()
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
    // if (index > 0) {
    //     const previousValue = floors[index - 1];
    //    duchamp.getWidgetByName("MODEL1 ").getMeshByName(previousValue).setVisible(false)
    // }
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
//viewRay[x,y,z]: x= 左右 y=上下 z=前後 要根據樓層 y要跟著往上移動targetpos(每增加一層，增加0.05:9樓為1.5)
duchamp.getWidgetByName("MODEL1").getMeshByName(this.getValue()).focus({target: "top",targetpos: () =>  [3.75,1.95,1.76], viewRay: () => [-0.75, -1, 1],distance: (v) => v * 0.75 })

$('[data-name=' +this.getValue() + '] .duchamp-widget-background').css('background-color', '#4DC4FF');
duchamp.getWidgetByName("P_FLOOR").setValue(this_floor)