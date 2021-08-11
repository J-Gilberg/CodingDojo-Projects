-- 1. 
SELECT c.name
FROM world.countries c
JOIN world.languages l
	ON c.code = l.country_code
WHERE l.language = 'Slovene';

-- 2.
SELECT c.name
,COUNT(ci.id)
FROM world.countries c
JOIN world.cities ci
	ON c.code = ci.country_code
GROUP BY c.name
ORDER BY COUNT(ci.id) DESC;

-- 3.
SELECT c.name
,ci.name
FROM world.countries c
JOIN world.cities ci
	ON c.code = ci.country_code
WHERE c.name = 'Mexico' and ci.population > 500000
ORDER BY ci.population DESC;

-- 4.
SELECT c.name
,l.language
,l.percentage
FROM world.countries c
JOIN world.languages l
	ON c.code = l.country_code
WHERE l.percentage > 89
ORDER BY l.percentage DESC;

-- 5.
SELECT c.name
FROM world.countries c
WHERE c.population > 100000 AND c.surface_area < 501
ORDER BY c.population DESC;

-- 6.
SELECT c.name
FROM world.countries c
WHERE c.government_form = 'Constitutional Monarchy' AND c.capital > 200 AND c.life_expectancy > 75;

-- 7. 
SELECT c.name
,ci.name
,ci.district
,ci.population
FROM world.countries c
JOIN world.cities ci
	ON c.code = ci.country_code
WHERE c.name = 'Argentina' and ci.population > 500000 and ci.district = 'Buenos Aires';


-- 8.
SELECT c.region
,COUNT(c.name)
FROM world.countries c
GROUP BY c.region
ORDER BY COUNT(c.name) DESC;

