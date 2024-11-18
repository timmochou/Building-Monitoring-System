WITH floor_data1 AS (
  SELECT 'B4A' AS floor, 'B3' AS floor_name
  UNION ALL 
  SELECT 'B3A' AS floor, 'B3' AS floor_name
  UNION ALL
  SELECT 'B2A' AS floor, 'B2' AS floor_name
  UNION ALL 
  SELECT 'B1A' AS floor, 'B1' AS floor_name
  UNION ALL 
  SELECT '1FA' AS floor, '1F' AS floor_name
  UNION ALL 
  SELECT '2FA' AS floor, '2F' AS floor_name
  UNION ALL 
  SELECT '3FA' AS floor, '3F' AS floor_name
  UNION ALL 
  SELECT '4FA' AS floor, '4F' AS floor_name
  UNION ALL 
  SELECT '5FA' AS floor, '5F' AS floor_name
  UNION ALL 
  SELECT '6FA' AS floor, '6F' AS floor_name
  UNION ALL 
  SELECT '7FA' AS floor, '7F' AS floor_name
  UNION ALL 
  SELECT '8FA' AS floor, '8F' AS floor_name
  UNION ALL 
  SELECT '9FA' AS floor, '9F' AS floor_name
  UNION ALL 
  SELECT '10FA' AS floor, '10F' AS floor_name
  UNION ALL 
  SELECT '11FA' AS floor, '11F' AS floor_name
  UNION ALL 
  SELECT '12FA' AS floor, '12F' AS floor_name
  UNION ALL 
  SELECT '13FA' AS floor, '13F' AS floor_name
  UNION ALL 
  SELECT '14FA' AS floor, '14F' AS floor_name
  UNION ALL 
  SELECT '15FA' AS floor, '15F' AS floor_name
  UNION ALL 
  SELECT '16FA' AS floor, '16F' AS floor_name
  UNION ALL 
  SELECT '17FA' AS floor, '17F' AS floor_name
  UNION ALL 
  SELECT '18FA' AS floor, '18F' AS floor_name
  UNION ALL 
  SELECT '19FA' AS floor, '19F' AS floor_name
  UNION ALL 
  SELECT '20FA' AS floor, '20F' AS floor_name
  UNION ALL 
  SELECT 'R1A' AS floor, 'R1' AS floor_name
), floor_data2 AS(
  SELECT 'B4' AS floor, 'B4' AS floor_name
  UNION ALL 
  SELECT 'B3' AS floor, 'B3' AS floor_name
  UNION ALL 
  SELECT 'B2' AS floor, 'B2' AS floor_name
  UNION ALL SELECT 'B1' AS floor, 'B1' AS floor_name
  UNION ALL SELECT '1F' AS floor, '1F' AS floor_name
  UNION ALL SELECT '2F' AS floor, '2F' AS floor_name
  UNION ALL SELECT '3F' AS floor, '3F' AS floor_name
  UNION ALL SELECT '4F' AS floor, '4F' AS floor_name
  UNION ALL SELECT '5F' AS floor, '5F' AS floor_name
  UNION ALL SELECT '6F' AS floor, '6F' AS floor_name
  UNION ALL SELECT '7F' AS floor, '7F' AS floor_name
  UNION ALL SELECT '8F' AS floor, '8F' AS floor_name
  UNION ALL SELECT '9F' AS floor, '9F' AS floor_name
  UNION ALL SELECT '10F' AS floor, '10F' AS floor_name
  UNION ALL SELECT '11F' AS floor, '11F' AS floor_name
  UNION ALL SELECT '12F' AS floor, '12F' AS floor_name
  UNION ALL SELECT '13F' AS floor, '13F' AS floor_name
  UNION ALL SELECT '14F' AS floor, '14F' AS floor_name
  UNION ALL SELECT '15F' AS floor, '15F' AS floor_name
  UNION ALL SELECT '16F' AS floor, '16F' AS floor_name
  UNION ALL 
  SELECT '17F' AS floor, '17F' AS floor_name
  UNION ALL 
  SELECT '18F' AS floor, '18F' AS floor_name
  UNION ALL 
  SELECT '19F' AS floor, '19F' AS floor_name
  UNION ALL 
  SELECT '20F' AS floor, '20F' AS floor_name
  UNION ALL 
  SELECT 'R1' AS floor, 'R1' AS floor_name
)
SELECT floor, floor_name
FROM ${(IF(BTN_Building=='民生建國', "floor_data1", "floor_data2"))}
WHERE 1=1
${IF(LEN(P_FLOOR)==0,"","AND floor IN ('"+ P_FLOOR +"')")}

