"use document"
duchamp.getPage(3).goto();
//傳參數P_FLOOR 給表格，資料顯示8F
duchamp.getWidgetByName("P_CCTV").setValue("")
setTimeout(() => {
  $(`[data-name="全區"] .duchamp-widget-background`).css('background-color', '#4DC4FF');
//隱藏9F-20F的按紐背景，只留下8F  
["1F正大門","8F出入口","15F左側門","頂樓廣場"].forEach(floor => {
    $(`[data-name="${floor}"] .duchamp-widget-background`).css('background-color', 'transparent');
});

}, 500); 

