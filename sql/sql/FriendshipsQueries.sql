INSERT INTO friendships_shema.users (first_name, last_name) 
VALUES('Jordan','Gilberg')
,('Tim','Wang')
,('Justin','Shin')
,('Christian','Durrett')
,('Eli','Byers')
,('Marky','Mark');

INSERT INTO friendships_shema.friendships (user_id, friend_id) 
VALUES (1,2),(1,4),(1,6);

INSERT INTO friendships_shema.friendships (user_id, friend_id) 
VALUES (2,1),(2,3),(2,5);

INSERT INTO friendships_shema.friendships (user_id, friend_id) 
VALUES (2,1),(2,3),(2,5);

INSERT INTO friendships_shema.friendships (user_id, friend_id) 
VALUES (3,2),(3,5);

INSERT INTO friendships_shema.friendships (user_id, friend_id) 
VALUES (4,3);

INSERT INTO friendships_shema.friendships (user_id, friend_id) 
VALUES (5,1),(5,6);

INSERT INTO friendships_shema.friendships (user_id, friend_id) 
VALUES (6,2),(6,3);

SELECT u.first_name
,u.last_name
,u2.first_name
,u2.last_name
FROM friendships_shema.users u
JOIN friendships_shema.friendships f
	ON u.id = f.user_id
JOIN friendships_shema.users u2
	ON f.friend_id = u2.id;
    
SELECT u.first_name
,u.last_name
,u2.first_name
,u2.last_name
FROM friendships_shema.users u
JOIN friendships_shema.friendships f
	ON u.id = f.user_id
JOIN friendships_shema.users u2
	ON f.friend_id = u2.id
WHERE u.id = 1;

SELECT u.id
,CONCAT(u.first_name,' ',u.last_name) name
,COUNT(f.friend_id) friend_count
FROM friendships_shema.users u
JOIN friendships_shema.friendships f
	ON u.id = f.user_id
GROUP BY u.id;

SELECT u.first_name
,u.last_name
,u2.first_name
,u2.last_name
FROM friendships_shema.users u
JOIN friendships_shema.friendships f
	ON u.id = f.user_id
JOIN friendships_shema.users u2
	ON f.friend_id = u2.id
WHERE u.id = 3
ORDER BY u2.first_name ASC;
