WITH RECURSIVE
  dates(date) AS (
    SELECT '2024-09-12'
    UNION ALL
    SELECT date(date, '+1 day')
    FROM dates
    WHERE date < '2024-10-30'
  ),
  times(hour) AS (
    SELECT 0
    UNION ALL
    SELECT (hour + 2) % 24
    FROM times
    LIMIT 12
  ),
  power_types(type) AS (
    SELECT 'water' UNION ALL SELECT 'power'
  ),
  machine_types_ele(code) AS (
    SELECT '照明' UNION ALL SELECT '動力' UNION ALL SELECT '插座' UNION ALL SELECT '空調'
  ),
   machine_types_water(code) AS (
    SELECT '空調' UNION ALL SELECT '景觀' UNION ALL SELECT '洗手間' UNION ALL SELECT '其他'
  ),
  random_data_ele AS (
    SELECT 
      date,
      time(printf('%02d:00', hour)) AS time,
      type AS power_type,
      code AS machine_code,
      CAST(ABS(random()) % 51 + 100 AS INTEGER) AS value
    FROM dates
    CROSS JOIN times
    CROSS JOIN power_types 
    CROSS JOIN machine_types_ele
    WHERE type = 'power'  -- 確保在這裡使用 type
  ),
    random_data_water AS (
    SELECT 
      date,
      time(printf('%02d:00', hour)) AS time,
      type AS power_type,
      code AS machine_code,
      CAST(ABS(random()) % 51 + 100 AS INTEGER) AS value
    FROM dates
    CROSS JOIN times
    CROSS JOIN power_types 
    CROSS JOIN machine_types_water
    WHERE type = 'water'  -- 確保在這裡使用 type
  )
SELECT
date, time, power_type, machine_code, value
FROM
${IF(P_TYPE = 'water', 'random_data_water', 'random_data_ele')}  -- 修正條件語句
WHERE 1=1
${IF(LEN(P_DATE)=0, "", "AND date = '" + P_DATE + "'")}