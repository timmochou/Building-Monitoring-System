WITH CCTV AS(

    SELECT '1F' AS 'id', '1F正大門' AS 'location'
    UNION ALL
    SELECT '8F' AS 'id', '8F出入口' AS 'location'
    UNION ALL 
    SELECT '15F' AS 'id', '15F左側門' AS 'location'
    UNION ALL 
    SELECT 'R1' AS 'id', '頂樓廣場' AS 'location'
    UNION ALL 
    SELECT '' AS 'id', '全區' AS 'location')
SELECT * FROM CCTV
ORDER BY
CASE WHEN id = '' THEN 1,
	WHEN id = '1F' THEN 2,
	WHEN id = '8F' THEN 3,
	WHEN id = '15F' THEN 4,
	WHEN id = 'R1' THEN 5
END 
