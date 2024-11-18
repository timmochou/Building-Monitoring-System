WITH CTE AS (
SELECT 
    date('now', '-' || seq || ' days') AS date,
    '公共用水' AS category,
    70 + (RANDOM() % 41) AS val
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
    '環境用水' AS category,
    70 + (RANDOM() % 41) AS val
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
    '碳排放量' AS category,
    70 + (RANDOM() % 41) AS val
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
	CASE WHEN date = date('now') THEN 78 ELSE val END AS val
FROM CTE
ORDER BY date, category;