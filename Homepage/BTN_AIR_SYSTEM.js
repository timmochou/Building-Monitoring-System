"use document"
duchamp.getPage(2).goto();
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

//將鏡頭轉到該轉的
duchamp.getWidgetByName("MODEL1").getMeshByName("R1").focus({
    target: "top",
    targetpos: () => [3.56,1.95,1.76], 
    viewRay: () => [0.0000000001, -1, 0.0000001],
    distance: (v) => v * 0.05
});
}, 500); 