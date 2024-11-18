WITH T1 AS(
    SELECT 'CH-B11' AS 'model_name', '冰水士機' AS 'name', '環宇大樓/B1F/冰水主機' AS 'location','2024-04-28 11:30:55' AS 'time', 'A0703110030002' AS 'id', '異常發報' AS 'status'
    UNION ALL 
    SELECT 'CH-B12' AS 'model_name', '冰水主機' AS 'name', '環宇大樓/B1F/冰水主機' AS 'location','2024-04-28 11:30:55' AS 'time', 'A0703110030003' AS 'id', '已結案' AS 'status'
    UNION ALL
    SELECT 'CHP-B11' AS 'model_name', '冰水泵' AS 'name', '環宇大樓/B1F/冰水泵' AS 'location','2024-05-02 14:45:22' AS 'time', 'A0703110030005' AS 'id', '處理中' AS 'status'
    UNION ALL
    SELECT 'CHP-B12' AS 'model_name', '冰水泵' AS 'name', '環宇大樓/B1F/冰水泵' AS 'location','2024-05-03 18:20:11' AS 'time', 'A0703110030006' AS 'id', '異常發報' AS 'status'
    UNION ALL
    SELECT 'CHP-B13' AS 'model_name', '冰水泵' AS 'name', '環宇大樓/B1F/冰水泵' AS 'location','2024-05-04 07:55:43' AS 'time', 'A0703110030007' AS 'id', '已結案' AS 'status'
    UNION ALL
    SELECT 'CWP-B12' AS 'model_name', '冷卻水泵' AS 'name', '環宇大樓/B1F/冷卻水泵' AS 'location','2024-05-07 21:05:38' AS 'time', 'A0703110030010' AS 'id', '處理中' AS 'status'
    UNION ALL
    SELECT 'CWP-B13' AS 'model_name', '冷卻水泵' AS 'name', '環宇大樓/B1F/冷卻水泵' AS 'location','2024-05-08 03:40:16' AS 'time', 'A0703110030011' AS 'id', '異常發報' AS 'status'
    UNION ALL
    SELECT 'SHP-B12' AS 'model_name', '區域泵' AS 'name', '環宇大樓/B1F/區域泵' AS 'location','2024-05-12 22:55:41' AS 'time', 'A0703110030015' AS 'id', '已結案' AS 'status'
    UNION ALL
    SELECT 'SHP-B13' AS 'model_name', '區域泵' AS 'name', '環宇大樓/B1F/區域泵' AS 'location','2024-05-13 05:15:29' AS 'time', 'A0703110030016' AS 'id', '處理中' AS 'status'
    UNION ALL
    SELECT 'CT-R11' AS 'model_name', '冷卻水塔' AS 'name', '環宇大樓/R1F/冷卻水塔' AS 'location','2024-05-15 15:05:54' AS 'time', 'A0703110030018' AS 'id', '異常發報' AS 'status'
)
SELECT * FROM T1;