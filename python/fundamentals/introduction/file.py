num1 = 42  # variable declaration # Numbers
num2 = 2.3 # variable declaration # Numbers
boolean = True # variable declaration # Boolean
string = 'Hello World' # variable declaration  # Strings
pizza_toppings = ['Pepperoni', 'Sausage', 'Jalepenos', 'Cheese', 'Olives'] # List
person = {'name': 'John', 'location': 'Salt Lake', 'age': 37, 'is_balding': False} # Dictionary
fruit = ('blueberry', 'strawberry', 'banana') # Tuples
print(type(fruit)) #output = truple
print(pizza_toppings[1]) #prints sausage
pizza_toppings.append('Mushrooms') # adds to the end of pizza_toppings
print(person['name']) # output = string
person['name'] = 'George'   #changes name to george
person['eye_color'] = 'blue'  #changes eye color to blue
print(fruit[2])  #returns banana

if num1 > 45: # else if returns "its lower"
    print("It's greater")
else:
    print("It's lower")

if len(string) < 5: # length check if statement returns "just right!"
    print("It's a short word!")
elif len(string) > 15: # length check
    print("It's a long word!")
else:
    print("Just right!")

for x in range(5): # for loop prints 
    print(x) # outputs 0,1,2,3,4
for x in range(2,5): # for loop
    print(x) #2,3,4
for x in range(2,10,3): # for loop
    print(x) #2,5,8
x = 0 
while(x < 5): # while loop
    print(x) #0,1,2,3,4
    x += 1

pizza_toppings.pop() # removed last item in teh list
pizza_toppings.pop(1) # removes position 1 in the list

print(person) # prints the person dictionary
person.pop('eye_color') #removes eye color form person dictionary
print(person) # prints the person dictionary

for topping in pizza_toppings:
    if topping == 'Pepperoni':
        continue # continues the statement, does not executed any further
    print('After 1st if statement') # returned 3 times
    if topping == 'Olives':
        break # ends the for loop when it reaches olives

def print_hello_ten_times():
    for num in range(10):
        print('Hello')

print_hello_ten_times() # prints hello 10times 

def print_hello_x_times(x):
    for num in range(x): 
        print('Hello')

print_hello_x_times(4)  # x = 4, repeats 4 times. 

def print_hello_x_or_ten_times(x = 10):
    for num in range(x):
        print('Hello')

print_hello_x_or_ten_times() # hello is repeated 10 times as x is not given
print_hello_x_or_ten_times(4) # hello is repeated 4 times as an x value is given


"""
Bonus section
"""

print(num3) #num3 has not been defined so it will output none
num3 = 72  #num3 variable equals 72
fruit[0] = 'cranberry' #changes fruit[0] to cranberry from blueberry
print(person['favorite_team']) # adds favorite team to the person dictionay
print(pizza_toppings[7]) #prints none as this doesnt exist
print(boolean) #prints true as boolean was assigned true
fruit.append('raspberry') #adds raspberry to the end of fruit
fruit.pop(1) #removes strawberry from 