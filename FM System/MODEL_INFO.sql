WITH T1 AS(
    SELECT 'PAH-81' AS 'model_name', '空調箱' AS 'name', '8F' AS 'location','空調' AS 'System', 'A0703110030001' AS 'id', '冰水主機' AS 'type','Carrier'AS 'brand','2023'AS 'year','https://cctvn.freeway.gov.tw/abs2mjpg/bmjpg?camera=73430&0.2521623191455089' AS 'url'
    UNION ALL
    SELECT 'CH-B11' AS 'model_name', '冰水士機' AS 'name', 'B1F-空調機房' AS 'location','空調' AS 'System', 'A0703110030002' AS 'id', '冰水主機' AS 'type','Carrier'AS 'brand','2023'AS 'year','https://cctvn.freeway.gov.tw/abs2mjpg/bmjpg?camera=21950&0.09751234877899218' AS 'url'
    UNION ALL 
    SELECT 'CH-B12' AS 'model_name', '冰水主機' AS 'name', 'B1F-空調機房' AS 'location','空調' AS 'System', 'A0703110030003' AS 'id', '冰水主機' AS 'type','Carrier'AS 'brand','2023'AS 'year','https://cctvn.freeway.gov.tw/abs2mjpg/bmjpg?camera=20000&0.7430597655459816'AS 'url'
    UNION ALL
    SELECT 'CH-B13' AS 'model_name', '冰水主機' AS 'name', 'B1F-空調機房' AS 'location','空調' AS 'System', 'A0703110030004' AS 'id', '冰水主機' AS 'type','Carrier'AS 'brand','2023'AS 'year','https://cctvn.freeway.gov.tw/abs2mjpg/bmjpg?camera=20040&0.3824907388041985'AS 'url'
    UNION ALL
    SELECT 'CHP-B11' AS 'model_name', '冰水泵' AS 'name', 'B1F-空調機房' AS 'location','空調' AS 'System', 'A0703110030005' AS 'id', '冰水主機' AS 'type','Carrier'AS 'brand','2023'AS 'year','https://cctvn.freeway.gov.tw/abs2mjpg/bmjpg?camera=20090&0.8267729115232771'AS 'url'
    UNION ALL
    SELECT 'CHP-B12' AS 'model_name', '冰水泵' AS 'name', 'B1F-空調機房' AS 'location','空調' AS 'System', 'A0703110030006' AS 'id', '冰水主機' AS 'type','Carrier'AS 'brand','2023'AS 'year','https://cctvn.freeway.gov.tw/abs2mjpg/bmjpg?camera=20100&0.23113471588671342'AS 'url'
    UNION ALL
    SELECT 'CHP-B13' AS 'model_name', '冰水泵' AS 'name', 'B1F-空調機房' AS 'location','空調' AS 'System', 'A0703110030007' AS 'id', '冰水主機' AS 'type','Carrier'AS 'brand','2023'AS 'year','https://cctvn.freeway.gov.tw/abs2mjpg/bmjpg?camera=20190&0.25203380093627015'AS 'url'
    UNION ALL
    SELECT 'CHP-B14' AS 'model_name', '冰水泵' AS 'name', 'B1F-空調機房' AS 'location','空調' AS 'System', 'A0703110030008' AS 'id', '冰水主機' AS 'type','Carrier'AS 'brand','2023'AS 'year','https://cctvn.freeway.gov.tw/abs2mjpg/bmjpg?camera=20290&0.35058303216162834'AS 'url'
    UNION ALL
    SELECT 'CHP-B1S' AS 'model_name', '冰水泵' AS 'name', 'B1F-空調機房' AS 'location','空調' AS 'System', 'A0703110030009' AS 'id', '冰水主機' AS 'type','Carrier'AS 'brand','2023'AS 'year','https://cctvn.freeway.gov.tw/abs2mjpg/bmjpg?camera=20330&0.6743927215624697'AS 'url'
    UNION ALL
    SELECT 'CWP-B12' AS 'model_name', '冷卻水泵' AS 'name', 'B1F-空調機房' AS 'location','空調' AS 'System', 'A0703110030010' AS 'id', '冰水主機' AS 'type','Carrier'AS 'brand','2023'AS 'year','https://cctvn.freeway.gov.tw/abs2mjpg/bmjpg?camera=20420&0.1096253928562918'AS 'url'
    UNION ALL
    SELECT 'CWP-B13' AS 'model_name', '冷卻水泵' AS 'name', 'B1F-空調機房' AS 'location','空調' AS 'System', 'A0703110030011' AS 'id', '冰水主機' AS 'type','Carrier'AS 'brand','2023'AS 'year','https://cctvn.freeway.gov.tw/abs2mjpg/bmjpg?camera=20520&0.7187421617294547'AS 'url'
    UNION ALL
    SELECT 'CWP-B14' AS 'model_name', '冷卻水泵' AS 'name', 'B1F-空調機房' AS 'location','空調' AS 'System', 'A0703110030012' AS 'id', '冰水主機' AS 'type','Carrier'AS 'brand','2023'AS 'year','https://cctvn.freeway.gov.tw/abs2mjpg/bmjpg?camera=20640&0.8275815046393651'AS 'url'
    UNION ALL
    SELECT 'CWP-B15' AS 'model_name', '冷卻水泵' AS 'name', 'B1F-空調機房' AS 'location','空調' AS 'System', 'A0703110030013' AS 'id', '冰水主機' AS 'type','Carrier'AS 'brand','2023'AS 'year','https://cctvn.freeway.gov.tw/abs2mjpg/bmjpg?camera=20740&0.8386583699744377'AS 'url'
    UNION ALL
    SELECT 'SHP-B11' AS 'model_name', '區域泵' AS 'name', 'B1F-空調機房' AS 'location','空調' AS 'System', 'A0703110030014' AS 'id', '冰水主機' AS 'type','Carrier'AS 'brand','2023'AS 'year','https://cctvp02.freeway.gov.tw/mjpeg/X01001602801101?0.8953759544299469'AS 'url'
    UNION ALL
    SELECT 'SHP-B12' AS 'model_name', '區域泵' AS 'name', 'B1F-空調機房' AS 'location','空調' AS 'System', 'A0703110030015' AS 'id', '冰水主機' AS 'type','Carrier'AS 'brand','2023'AS 'year','https://cctvp02.freeway.gov.tw/mjpeg/X01001602801001?0.47951224917985225&t1968=0.9823985492845264'AS 'url'
    UNION ALL
    SELECT 'SHP-B13' AS 'model_name', '區域泵' AS 'name', 'B1F-空調機房' AS 'location','空調' AS 'System', 'A0703110030016' AS 'id', '冰水主機' AS 'type','Carrier'AS 'brand','2023'AS 'year','https://cctvp02.freeway.gov.tw/mjpeg/X01001602900101?0.9203267781557618'AS 'url'
    UNION ALL
    SELECT 'SHP-B14' AS 'model_name', '區域泵' AS 'name', 'B1F-空調機房' AS 'location','空調' AS 'System', 'A0703110030017' AS 'id', '冰水主機' AS 'type','Carrier'AS 'brand','2023'AS 'year','https://cctvp02.freeway.gov.tw/mjpeg/X01001602800101?0.39356613780775107'AS 'url'
    UNION ALL
    SELECT 'CT-R11' AS 'model_name', '冷卻水塔' AS 'name', 'R1F' AS 'location','空調' AS 'System', 'A0703110030018' AS 'id', '冰水主機' AS 'type','Carrier'AS 'brand','2023'AS 'year','https://cctvp02.freeway.gov.tw/mjpeg/X01001602800901?0.8092463316584857'AS 'url'
)
SELECT * FROM T1 LIMIT 12