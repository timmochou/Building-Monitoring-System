WITH RECURSIVE
  timestamps(timestamp) AS (
    SELECT DATE('now')
    UNION ALL
    SELECT DATETIME(timestamp, '+2 hours')
    FROM timestamps
    WHERE timestamp < DATE('now', '+1 day')
  ),
  types(type) AS (
    SELECT '室內溫度(低)' UNION ALL SELECT '室內溫度(高)' UNION ALL
    SELECT '室內溫度' UNION ALL SELECT '室外溫度(低)' UNION ALL
    SELECT '室外溫度(高)' UNION ALL SELECT '室外溫度'
  ),
  weather AS (
    SELECT 
      timestamp,
      type,
      CASE 
        WHEN type LIKE '室內%' THEN
          ROUND(20 + (RANDOM() * 5), 1)  -- 室內溫度範圍：20-25度
        WHEN type LIKE '室外%' THEN
          ROUND(10 + (RANDOM() * 15), 1)  -- 室外溫度範圍：10-25度
        ELSE
          ROUND(5 + (RANDOM() * 20), 1)  -- 其他情況：5-25度
      END AS temperature
    FROM timestamps, types
  )
SELECT * FROM weather
ORDER BY timestamp, type;