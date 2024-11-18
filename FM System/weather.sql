WITH weather AS (
     SELECT 12 AS out_tem, 23 AS in_tem, '2024-08-28' AS date
    UNION ALL
    SELECT 14 AS out_tem, 25 AS in_tem, '2024-08-29' AS date
    UNION ALL
    SELECT 17 AS out_tem, 25 AS in_tem, '2024-08-30' AS date
    UNION ALL
    SELECT 16 AS out_tem, 23 AS in_tem, '2024-08-31' AS date
    UNION ALL
    SELECT 19 AS out_tem, 24 AS in_tem, '2024-09-01' AS date
    UNION ALL
    SELECT 20 AS out_tem, 23 AS in_tem, '2024-09-02' AS date
    UNION ALL
    SELECT 16 AS out_tem, 23 AS in_tem, '2024-09-03' AS date
    UNION ALL
    SELECT 17 AS out_tem, 24 AS in_tem, '2024-09-04' AS date
    UNION ALL
    SELECT 20 AS out_tem, 24 AS in_tem, '2024-09-05' AS date
    UNION ALL
    SELECT 22 AS out_tem, 24 AS in_tem, '2024-09-06' AS date
    UNION ALL
    SELECT 24 AS out_tem, 25 AS in_tem, '2024-09-07' AS date
    UNION ALL
    SELECT 23 AS out_tem, 23 AS in_tem, '2024-09-08' AS date
    UNION ALL
    SELECT 20 AS out_tem, 23 AS in_tem, '2024-09-09' AS date
    UNION ALL
    SELECT 16 AS out_tem, 23 AS in_tem, '2024-09-10' AS date
    UNION ALL
    SELECT 14 AS out_tem, 23 AS in_tem, '2024-09-11' AS date
    UNION ALL
    SELECT 12 AS out_tem, 23 AS in_tem, '2024-09-12' AS date
    UNION ALL
    SELECT 10 AS out_tem, 23 AS in_tem, '2024-09-13' AS date
    UNION ALL
    SELECT 8 AS out_tem, 23 AS in_tem, '2024-09-14' AS date
), T2 AS(
SELECT date, 
       '室外温度' AS temp_type,
       out_tem AS temperature
FROM weather
UNION ALL
SELECT date, 
       '室内温度' AS temp_type,
       in_tem AS temperature
FROM weather
ORDER BY date, temp_type)
SELECT * FROM T2
WHERE date BETWEEN DATEADD(Day,-6,now) AND date(now)