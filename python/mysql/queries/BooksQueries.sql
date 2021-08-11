INSERT INTO books_schema.authors(name) 
VALUES('Jane Austin')
,('Emily Dickinson')
,('Fyodor Dostoevsky')
,('William Shakespeare')
,('Lau Tzu');

INSERT INTO books_schema.books(title) 
VALUES('C Sharp')
,('Java')
,('Python')
,('PHP')
,('Ruby');

UPDATE books_schema.books SET title = 'C#' 
WHERE id = 1;

UPDATE books_schema.authors SET name = CONCAT('Bill',SUBSTRING(name,LOCATE(' ',name),LENGTH(name)-LOCATE(' ',name)+1))
WHERE id = 4;

INSERT INTO books_schema.favorites(book_id ,author_id) 
VALUES(1 ,1)
,(2 ,1);

INSERT INTO books_schema.favorites(book_id ,author_id) 
VALUES(1 ,2)
,(2 ,2)
,(3 ,2);

INSERT INTO books_schema.favorites(book_id ,author_id) 
VALUES(1 ,3)
,(2 ,3)
,(3 ,3)
,(4 ,3);

INSERT INTO books_schema.favorites(book_id ,author_id) 
VALUES(1 ,4)
,(2 ,4)
,(3 ,4)
,(4 ,4)
,(5 ,4);

SELECT *
FROM books_schema.authors a
JOIN books_schema.favorites f
	ON a.id = f.author_id
WHERE f.book_id = 3;

DELETE FROM books_schema.authors 
WHERE id = 
	(SELECT f.author_id
	FROM books_schema.favorites f
	WHERE f.book_id = 3
	LIMIT 1);

INSERT INTO books_schema.favorites(book_id ,author_id) 
VALUES(2 ,5);

SELECT *
FROM books_schema.books b
JOIN books_schema.favorites f
	ON b.id = f.book_id
WHERE f.author_id = 3;

SELECT *
FROM books_schema.authors a
JOIN books_schema.favorites f
	ON a.id = f.author_id
WHERE f.book_id = 5;

    