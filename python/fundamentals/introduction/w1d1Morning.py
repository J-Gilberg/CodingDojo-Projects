print('hello world')
first_name = 'Jordan'
last_name = 'Gilberg'

print(f'My name is {first_name} {last_name}')

# lists are {}, tuples are (). tuples are imutibles.
"""
objects are dictionaries. there are no methods and variables, everything is an object.


"""

if(first_name == 'Jordan'):
    print(first_name)
else:
    print('nope!')

number_list = [8, 12, 7, 4, 59, 71]

for x in range(0, 6, 2):
    print(x)

for number in number_list:
    print(number)
    if (number % 2 == 0):
        print(f'wow, {number} is even')
    else:
        print(f'oh no {number} is not even')

print(len(number_list))