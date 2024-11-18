WITH CTE AS (
SELECT 
    date('now', '-' || seq || ' days') AS date,
   '公共用電' AS category,
    100 + (RANDOM() % 61) AS val
FROM 
(
    SELECT 0 AS seq UNION ALL
    SELECT 1 UNION ALL
    SELECT 2 UNION ALL
    SELECT 3 UNION ALL
    SELECT 4 UNION ALL
    SELECT 5 UNION ALL
    SELECT 6
) AS days

UNION ALL

SELECT 
    date('now', '-' || seq || ' days') AS date,
    '環境用電' AS category,
    100 + (RANDOM() % 61) AS val
FROM 
(
    SELECT 0 AS seq UNION ALL
    SELECT 1 UNION ALL
    SELECT 2 UNION ALL
    SELECT 3 UNION ALL
    SELECT 4 UNION ALL
    SELECT 5 UNION ALL
    SELECT 6
) AS days
)
SELECT
	date,
	category,
	val
FROM CTE
ORDER BY date, category;