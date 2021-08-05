
#1.
print('1.Update Values in Dictionaries and Lists')
x = [ [5,2,3], [10,8,9] ] 

for i in range(len(x)):
    for ii in range(len(x[i])):
        if(x[i][ii] == 10):
            x[i][ii] = 15
print(x)
students = [
     {'first_name':  'Michael', 'last_name' : 'Jordan'},
     {'first_name' : 'John', 'last_name' : 'Rosales'}
]
for i in students:
    if(i['last_name'] == 'Jordan'):
        i['last_name'] = 'Bryant'
print(students)        

sports_directory = {
    'basketball' : ['Kobe', 'Jordan', 'James', 'Curry'],
    'soccer' : ['Messi', 'Ronaldo', 'Rooney']
}

for i in sports_directory:
    if (i == 'soccer'):
        print(len(sports_directory[i]))
        for ii in range(len(sports_directory[i])):
            if (sports_directory[i][ii] == 'Messi'):
                sports_directory[i][ii] = 'Andres'
print(sports_directory)

z = [ {'x': 10, 'y': 20} ]

for i in range(len(z)):
    for ii in z[i]:
        if ii == 'y':
            z[i][ii]=30
print(z)

#2.
print('2.Iterate Through a List of Dictionaries')
students = [
         {'first_name':  'Michael', 'last_name' : 'Jordan'},
         {'first_name' : 'John', 'last_name' : 'Rosales'},
         {'first_name' : 'Mark', 'last_name' : 'Guillen'},
         {'first_name' : 'KB', 'last_name' : 'Tonel'}
    ]

def iterateDictionary(some_list):
    for i in some_list:
        name = []
        k = []
        for key, value in i.items():
            k.append(key)
            name.append(value)
        print(f'{k[0]} - {name[0]}, {k[1]} - {name[1]}')

iterateDictionary(students)

# # should output: (it's okay if each key-value pair ends up on 2 separate lines;
# # bonus to get them to appear exactly as below!)
# first_name - Michael, last_name - Jordan
# first_name - John, last_name - Rosales
# first_name - Mark, last_name - Guillen
# first_name - KB, last_name - Tonel

#3.
print('3. Get Values From a List of Dictionaries')
def iterateDictionary2(key_name, some_list):
    for d in some_list:
        for key, value in d.items():
            if(key == key_name):
                print(value)


iterateDictionary2('first_name', students)
iterateDictionary2('last_name', students)

#4.
print('4.Iterate Through a Dictionary with List Values')
dojo = {
   'locations': ['San Jose', 'Seattle', 'Dallas', 'Chicago', 'Tulsa', 'DC', 'Burbank'],
   'instructors': ['Michael', 'Amy', 'Eduardo', 'Josh', 'Graham', 'Patrick', 'Minh', 'Devon']
}
def printInfo(d):
    for x in d:
        print(f'{len(d[x])} {x.upper()}')
        for y in d[x]:
            print(y)
printInfo(dojo)
# # output:
# 7 LOCATIONS
# San Jose
# Seattle
# Dallas
# Chicago
# Tulsa
# DC
# Burbank
    
# 8 INSTRUCTORS
# Michael
# Amy
# Eduardo
# Josh
# Graham
# Patrick
# Minh
# Devon
