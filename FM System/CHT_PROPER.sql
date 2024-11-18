WITH T1 AS(
    SELECT '空調系統' AS 'name', '75.35' AS 'value','rate' AS 'category','3' AS 'error_quantity', '56' AS 'equipment_quantity'
    UNION ALL
    SELECT 'CCTV系統' AS 'name', '90' AS 'value', 'rate' AS 'category','1' AS 'error_quantity', '10' AS 'equipment_quantity'
) 
SELECT * FROM T1
WHERE name = '空調系統'