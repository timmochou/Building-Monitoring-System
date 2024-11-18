/**
 * 
 * 點擊按鈕，3D模型會找到對應的物件並且呈現相對應的CCTV影像
 */
function updateModelVisibility() {
    const floors = ["B4", "B3", "B2", "B1", "1F", "2F", "3F", "4F", "5F", "6F", "7F", "8F", "9F", "10F", "11F", "12F", "13F", "14F", "15F", "16F", "17F", "18F", "19F", "20F", "R1"];
    const allEquipment = ["CH-B11","CH-B12","CH-B13","CHP-B11","CHP-B12","CHP-B13","CHP-B14","CHP-B1S","CWP-B12","CWP-B13","CWP-B14","CWP-B15","SHP-B11","SHP-B12","SHP-B13","SHP-B14","PAH-81","CT-R11"];
    const equipLocation = {
        "B1": ["CH-B11","CH-B12","CH-B13","CHP-B11","CHP-B12","CHP-B13","CHP-B14","CHP-B1S","CWP-B12","CWP-B13","CWP-B14","CWP-B15","SHP-B11","SHP-B12","SHP-B13","SHP-B14"],
        "8F": ["PAH-81"],
        "R1": ["CT-R11"]
    };

    try {
        // 隱藏所有樓層和設備
        [...floors, ...allEquipment].forEach(item => {
            const mesh = duchamp.getWidgetByName("MODEL1").getMeshByName(item);
            if (mesh) {
                mesh.setVisible(false);
            } else {
                console.warn(`未找到網格: ${item}`);
            }
        });
        const selectedEquipment1 = duchamp.getWidgetByName("REP_ALARM").getCellValue(row, col1); // 設置為 col1 和 row
    // 新增 P_STREAM 的設置
    duchamp.getWidgetByName("P_STREAM").setValue(selectedEquipment1); // 將選中的設備設置為 P_STREAM
        console.log(`P_STREAM 設置為: ${selectedEquipment1}`);

        const selectedEquipment = duchamp.getWidgetByName("REP_ALARM").getCellValue(row, col);
        console.log(`選中的設備: ${selectedEquipment}`);

        // 顯示選中的設備
        const selectedMesh = duchamp.getWidgetByName("MODEL1").getMeshByName(selectedEquipment);
        if (selectedMesh) {
            selectedMesh.setVisible(true);
            selectedMesh.focus({ target: "top" , distance: (v) => v * 1.2});
        } else {
            console.error(`未找到選中的設備網格: ${selectedEquipment}`);
        }

        // 查找並顯示設備所在的樓層
        const selectedFloor = Object.keys(equipLocation).find(floor => equipLocation[floor].includes(selectedEquipment));
        if (selectedFloor) {
            const floorMesh = duchamp.getWidgetByName("MODEL1").getMeshByName(selectedFloor);
            if (floorMesh) {
                floorMesh.setVisible(true);
            } else {
                console.warn(`未找到樓層網格: ${selectedFloor}`);
            }
        } else {
            console.warn(`未找到設備 ${selectedEquipment} 所在的樓層`);
        }
    } catch (error) {
        console.error('更新模型可見性時發生錯誤:', error);
    }
}

// 嘗試多次執行，以確保模型已加載
let attempts = 0;
const maxAttempts = 5;
const attemptInterval = 1000; // 1秒

function tryUpdateModelVisibility() {
    if (attempts < maxAttempts) {
        setTimeout(() => {
            console.log(`嘗試更新模型可見性，第 ${attempts + 1} 次`);
            updateModelVisibility();
            attempts++;
            tryUpdateModelVisibility();
        }, attemptInterval);
    }
}

tryUpdateModelVisibility();