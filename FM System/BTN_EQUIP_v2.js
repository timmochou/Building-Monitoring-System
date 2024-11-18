function updateModelVisibility() {
    const floors = ["B4", "B3", "B2", "B1", "1F", "2F", "3F", "4F", "5F", "6F", "7F", "8F", "9F", "10F", "11F", "12F", "13F", "14F", "15F", "16F", "17F", "18F", "19F", "20F", "R1"];
    const allEquipment = ["CH-B11","CH-B12","CH-B13","CHP-B11","CHP-B12","CHP-B13","CHP-B14","CHP-B15","CWP-B12","CWP-B13","CWP-B14","CWP-B15","SHP-B11","SHP-B12","SHP-B13","SHP-B14","PAH-81","CT-R11"];
    const equipLocation = {
        "B1": ["CH-B11","CH-B12","CH-B13","CHP-B11","CHP-B12","CHP-B13","CHP-B14","CHP-B15","CWP-B12","CWP-B13","CWP-B14","CWP-B15","SHP-B11","SHP-B12","SHP-B13","SHP-B14"],
        "8F": ["PAH-81"],
        "R1": ["CT-R11"]
    };
    // 隱藏所有樓層和設備
    [...floors, ...allEquipment].forEach(item => {
        const mesh = duchamp.getWidgetByName("MODEL1").getMeshByName(item);
        if (mesh) {
            mesh.setVisible(false);
        }
    });
    
    const selectedEquipment1 = duchamp.getWidgetByName("REP_EQUIP").getCellValue(row, col1); // 設置為 col1 和 row
    // 新增 P_STREAM 的設置
    duchamp.getWidgetByName("P_STREAM").setValue(selectedEquipment1); // 將選中的設備設置為 P_STREAM
    
        
    const selectedEquipment = duchamp.getWidgetByName("REP_EQUIP").getCellValue(row, col);
    // 顯示選中的設備
    const selectedMesh = duchamp.getWidgetByName("MODEL1").getMeshByName(selectedEquipment);
    if (selectedMesh) {
        selectedMesh.setVisible(true);
        selectedMesh.focus({target: "top", distance: (v) => v * 2.8});
    }
    
   
    
    // 查找並顯示設備所在的樓層
    const selectedFloor = Object.keys(equipLocation).find(floor => equipLocation[floor].includes(selectedEquipment));
    if (selectedFloor) {
        const floorMesh = duchamp.getWidgetByName("MODEL1").getMeshByName(selectedFloor);
        if (floorMesh) {
            floorMesh.setVisible(true);
            
        }
    }
    } 
    
    

// 嘗試多次執行，以確保模型已加載
let attempts = 0;
const maxAttempts = 2;
const attemptInterval = 1000; // 1秒
    
    function tryUpdateModelVisibility() {
        if (attempts < maxAttempts) {
            setTimeout(() => {
                updateModelVisibility();
                attempts++;
                tryUpdateModelVisibility();
            }, attemptInterval);
        }
    }
    
    tryUpdateModelVisibility();
    