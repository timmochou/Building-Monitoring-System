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
    hour,
    time(printf('%02d:00', hour)) AS time,
    type AS power_type,
    code AS machine_code,
    CASE
      WHEN code = '照明' THEN CAST(ABS(random()) % 31 + 50 AS INTEGER)  -- 50-80 範圍
      WHEN code = '動力' THEN CAST(ABS(random()) % 51 + 100 AS INTEGER) -- 100-150 範圍
      WHEN code = '插座' THEN CAST(ABS(random()) % 71 + 150 AS INTEGER)   -- 150-220 範圍
      WHEN code = '空調' THEN CAST(ABS(random()) % 101 + 200 AS INTEGER)  -- 200-300 範圍
    END AS value
  FROM dates
  CROSS JOIN times
  CROSS JOIN power_types
  CROSS JOIN machine_types_ele
  WHERE power_type = 'power'   -- 確保在這裡使用 type
),
 random_data_water AS (
  SELECT 
    date,
    hour,
    time(printf('%02d:00', hour)) AS time,
    type AS power_type,

    code AS machine_code,
    CASE
      WHEN code = '空調' THEN CAST(ABS(random()) % 31 + 50 AS INTEGER)  -- 50-80 範圍
      WHEN code = '景觀' THEN CAST(ABS(random()) % 51 + 100 AS INTEGER) -- 100-150 範圍
      WHEN code = '洗手間' THEN CAST(ABS(random()) % 71 + 150 AS INTEGER)   -- 150-220 範圍
      WHEN code = '其他' THEN CAST(ABS(random()) % 101 + 200 AS INTEGER)  -- 200-300 範圍
    END AS value
  FROM dates
  CROSS JOIN times
  CROSS JOIN power_types
  CROSS JOIN machine_types_water
  WHERE power_type = 'water'  -- 確保在這裡使用 type
),
  daily_summary_ele AS (
    SELECT
      date,
      power_type,
      machine_code,
      SUM(value) AS daily_total,
      MAX(CASE WHEN hour BETWEEN 8 AND 21 THEN value ELSE 0 END) AS peak_value,
      MAX(CASE WHEN hour < 8 OR hour > 21 THEN value ELSE 0 END) AS off_peak_value
    FROM random_data_ele
    GROUP BY date, power_type,machine_code
  ),
  daily_summary_water AS (
    SELECT
      date,
      power_type,
      machine_code,
      SUM(value) AS daily_total,
      MAX(CASE WHEN hour BETWEEN 8 AND 21 THEN value ELSE 0 END) AS peak_value,
      MAX(CASE WHEN hour < 8 OR hour > 21 THEN value ELSE 0 END) AS off_peak_value
    FROM random_data_water
    GROUP BY date, power_type,machine_code
  )
SELECT 
  date AS DATE,
  power_type,
  machine_code AS type,
  daily_total AS TOTAL,
  peak_value AS PEAK,
  off_peak_value AS OFF_PEAK,
daily_total * 1.0 / SUM(daily_total) OVER (PARTITION BY power_type) AS percentage  -- 計算每個 machine_code 的佔比  -- 新增一欄，計算每種 power_type 的總和
FROM
${IF(P_TYPE = 'water', 'daily_summary_water', 'daily_summary_ele')}  
WHERE
date = date('now', 'localtime') 
ORDER BY date,
CASE WHEN machine_code = '照明' THEN 1
     WHEN machine_code = '動力' THEN 2
     WHEN machine_code = '插座' THEN 3
     WHEN machine_code = '空調' THEN 4
     WHEN machine_code = '景觀' THEN 5
     WHEN machine_code = '洗手間' THEN 6
     WHEN machine_code = '其他' THEN 7
END