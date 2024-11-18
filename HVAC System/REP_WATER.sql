WITH  B1 AS(
    SELECT 'CH-B11' AS 'name', 'Stop' AS 'Stage','17.8°C' AS 'tem', '1.7' AS 'stress', '66.3' AS 'flow'
    UNION ALL
    SELECT 'CHP-B11' AS 'name', 'Start' AS 'Stage','19.5°C' AS 'tem', '2.3' AS 'stress', '70.5' AS 'flow'
    UNION ALL 
    SELECT 'CWP-B11' AS 'name', 'Start' AS 'Stage', '18.9°C' AS 'tem', '2.6' AS 'stress', '67.2' AS 'flow'
    UNION ALL
    SELECT 'SHP-B11' AS 'name', 'Stop' AS 'Stage','17.8°C' AS 'tem', '2.1' AS 'stress', '66.3' AS 'flow'
), R1 AS (
    SELECT 'CT-R11' AS 'name', 'Stop' AS 'Stage','17.8°C' AS 'tem', '1.7' AS 'stress', '66.3' AS 'flow'
    UNION ALL
    SELECT '管道021' AS 'name', 'Start' AS 'Stage','19.5°C' AS 'tem', '2.3' AS 'stress', '70.5' AS 'flow'
)
SELECT * FROM FROM ${(IF(P_FLOOR=='B1', "B1", "R1"))}