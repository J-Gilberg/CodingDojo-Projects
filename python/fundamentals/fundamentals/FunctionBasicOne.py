#1
def number_of_food_groups():
    return 5
print(number_of_food_groups()) #Output = 5

#2
def number_of_military_branches():
    return 5
# print(number_of_days_in_a_week_silicon_or_triangle_sides() + number_of_military_branches()) #error out beceause "number_of_days_in_a_week_silicon_or_triangle_sides()" is not defined

#3
def number_of_books_on_hold():
    return 5
    return 10
print(number_of_books_on_hold()) #Output = 5

#4
def number_of_fingers():
    return 5
    print(10)
print(number_of_fingers()) #Output = 5

#5
def number_of_great_lakes():
    print(5) #Output = 5
x = number_of_great_lakes()
print(x) #Output = none, no value is returned

#6
# def add(b,c):
#     print(b+c)
# print(add(1,2) + add(2,3)) #Output = error, no value is returned in the function called

#7
def concatenate(b,c):
    return str(b)+str(c)
print(concatenate(2,5)) #Output = 25, 2 & 5 are concatnated

#8
def number_of_oceans_or_fingers_or_continents():
    b = 100
    print(b)
    if b < 10:
        return 5
    else:
        return 10
    return 7
print(number_of_oceans_or_fingers_or_continents()) #Output = 10, return 10 will run if the if statement is false, the "return 7" is not needed


#9
def number_of_days_in_a_week_silicon_or_triangle_sides(b,c):
    if b<c:
        return 7
    else:
        return 14
    return 3
print(number_of_days_in_a_week_silicon_or_triangle_sides(2,3)) #Output = 7, return 14 will run if the if statement is false, the "return 3" is not needed
print(number_of_days_in_a_week_silicon_or_triangle_sides(5,3)) #Output = 14
print(number_of_days_in_a_week_silicon_or_triangle_sides(2,3) + number_of_days_in_a_week_silicon_or_triangle_sides(5,3)) #Output = 21

#10
def addition(b,c):
    return b+c
    return 10
print(addition(3,5)) #Output = 8, return 10 will never run

#11
b = 500
print(b) #Output = 500
def foobar():
    # b ="keyword operator from-rainbow">= 300 
    print(b) #Output = false
print(b) #Output = 500
foobar() #error logic is wrong int compared to a string
print(b) 

#12
b = 500
print(b) #Output = 500
def foobar():
    b = 300
    print(b) 
    return b
print(b) #Output = 500
foobar() #Output = 300
print(b) #Output = 500

#13
b = 500
print(b) #Output = 500
def foobar():
    b = 300
    print(b)
    return b
print(b) #Output = 500
b=foobar()
print(b) #Output = 300

#14
def foo():
    print(1)
    bar() 
    print(2) 
def bar():
    print(3)
foo() #Output = 1 #Output = 3 #Output = 2

#15
def foo():
    print(1)
    x = bar()
    print(x)
    return 10
def bar():
    print(3)
    return 5
y = foo() #Output = 1 #Output = 3 #Output = 5 
print(y) #Output = 10



