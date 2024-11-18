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
  random_data AS (
    SELECT 
      date,
      time(printf('%02d:00', hour)) AS time,
      CAST(ABS(random()) % 51 + 100 AS INTEGER) AS value
    FROM dates, times
  ), FINAL AS(
SELECT 
  date,
  time,
  value,
  CASE 
    WHEN date = '${P_DATE}' THEN '今日用電'
    WHEN date = date('${P_DATE}', '-1 day') THEN '昨日用電'
    ELSE '其他'
  END AS type
FROM random_data
WHERE 
date Between date('${P_DATE}', '-1 day') AND '${P_DATE}' 
ORDER BY date, time)
SELECT 
  SUM(value) AS value,
  type
FROM FINAL
GROUP BY type
