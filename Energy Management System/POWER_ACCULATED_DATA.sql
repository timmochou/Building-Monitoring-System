WITH RECURSIVE
  dates(date) AS (
    SELECT date('now', '-7 day')  -- 一週前
    UNION ALL
    SELECT date(date, '+1 day')
    FROM dates
    WHERE date < date('now')  -- 今日
  ),
  times(hour) AS (
    SELECT 0
    UNION ALL
    SELECT (hour + 2) % 24
    FROM times
    LIMIT 12
  ),
  power_types(power_type) AS (
    SELECT 'water' UNION ALL SELECT 'power'
  ),
  random_data AS (
    SELECT 
      date,
      power_type,
      time(printf('%02d:00', hour)) AS time,
      CAST(ABS(random()) % 51 + 100 AS INTEGER) AS value
    FROM dates, times,power_types
  )
SELECT 
  date,
  time,
  power_type,
  value,
  CASE 
    WHEN date = '${P_DATE}' AND power_type = 'water' THEN '今日用水'  -- 修正這裡
    WHEN date = date('${P_DATE}', '-1 day') AND power_type = 'water' THEN '昨日用水'  -- 修正這裡
    WHEN date = '${P_DATE}' AND power_type = 'power' THEN '今日用電'  -- 修正這裡
    WHEN date = date('${P_DATE}', '-1 day') AND power_type = 'power' THEN '昨日用電'  -- 修正這裡
    ELSE '其他'
  END AS type
FROM random_data
WHERE 
1=1
${IF(LEN(P_TYPE)=0, "", "AND power_type = '" + P_TYPE + "'")}
AND
date Between date('${P_DATE}', '-1 day') AND '${P_DATE}' 
ORDER BY date, time