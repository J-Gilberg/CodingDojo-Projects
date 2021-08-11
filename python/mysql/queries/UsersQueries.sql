INSERT INTO user_schema.users (first_name, last_name, email) 
VALUES('Jordan', 'Gilberg','jgilberg@email.com')
,('Justin', 'Shin','cdurrett@email.com')
,('Christian', 'Durrett','jshin@email.com');

SELECT *
FROM user_schema.users;

SELECT *
FROM user_schema.users u
WHERE u.email = 'jgilberg@email.com';

SELECT *
FROM user_schema.users u
WHERE u.id = '3';

UPDATE user_schema.users u
SET u.last_name = 'Pancakes' 
WHERE u.id = '3';

DELETE FROM user_schema.users u 
WHERE  u.id = '2';

SELECT *
FROM user_schema.users u
ORDER BY first_name ASC;

SELECT *
FROM user_schema.users u
ORDER BY first_name DESC;