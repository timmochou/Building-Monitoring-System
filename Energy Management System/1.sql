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
    SELECT '照明' UNION ALL SELECT '動力' UNION ALL SELECT 'UPS' UNION ALL SELECT '空調'
  ),
  machine_types(code) AS (
    SELECT 'A' UNION ALL SELECT 'B' UNION ALL SELECT 'C'
  ),
 random_data AS (
  SELECT 
    date,
    hour,
    time(printf('%02d:00', hour)) AS time,
    type AS power_type,
    code AS machine_code,
    CASE
      WHEN type = '照明' THEN CAST(ABS(random()) % 31 + 50 AS INTEGER)  -- 50-80 範圍
      WHEN type = '動力' THEN CAST(ABS(random()) % 51 + 100 AS INTEGER) -- 100-150 範圍
      WHEN type = 'UPS' THEN CAST(ABS(random()) % 71 + 150 AS INTEGER)   -- 150-220 範圍
      WHEN type = '空調' THEN CAST(ABS(random()) % 101 + 200 AS INTEGER)  -- 200-300 範圍
    END AS value
  FROM dates
  CROSS JOIN times
  CROSS JOIN power_types
  CROSS JOIN machine_types
),
  daily_summary AS (
    SELECT
      date,
      power_type,
      SUM(value) AS daily_total,
      MAX(CASE WHEN hour BETWEEN 8 AND 21 THEN value ELSE 0 END) AS peak_value,
      MAX(CASE WHEN hour < 8 OR hour > 21 THEN value ELSE 0 END) AS off_peak_value
    FROM random_data
    GROUP BY date, power_type
  )
SELECT 
  date AS DATE,
  power_type AS TYPE,
  daily_total AS TOTAL,
  peak_value AS PEAK,
  off_peak_value AS OFF_PEAK,
  daily_total * 1.0 / (SELECT SUM(daily_total) FROM daily_summary WHERE date = ds.date) AS percentage_of_type  -- 修正為按日期計算每個type的百分比
FROM daily_summary AS ds
WHERE date = date('now')
ORDER BY date,
CASE WHEN power_type = '照明' THEN 1
     WHEN power_type = '動力' THEN 2
     WHEN power_type = 'UPS' THEN 3
     WHEN power_type = '空調' THEN 4
END