INSERT INTO dojosandninjas.dojo (name) 
VALUES('Austin')
,('Chicago')
,('New York');

DELETE FROM dojosandninjas.dojo WHERE id > 0;

INSERT INTO dojosandninjas.dojo (name) 
VALUES('Austin')
,('Chicago')
,('New York');

INSERT INTO dojosandninjas.ninja (first_name, last_name ,age, dojo_id) 
VALUES('Jordan', 'Gilberg',28, 4)
,('Justin', 'Shin',24, 4)
,('Christian', 'Durrett',27, 4);

INSERT INTO dojosandninjas.ninja (first_name, last_name ,age, dojo_id) 
VALUES('Olja', 'Siforija',28,5)
,('Tim', 'Wang',25,5)
,('Shahbaz', 'Mughal',25,5);

INSERT INTO dojosandninjas.ninja (first_name, last_name ,age, dojo_id) 
VALUES('Jon', 'Doe',28 ,6)
,('Woo', 'Hoo',35 ,6)
,('Ahh', 'Haa',40 ,6);

SELECT *
FROM dojosandninjas.ninja n
WHERE n.dojo_id = 4;

SELECT *
FROM dojosandninjas.ninja n
WHERE n.dojo_id = 6;

SELECT n.dojo_id
FROM dojosandninjas.ninja n
WHERE n.id = 9;
