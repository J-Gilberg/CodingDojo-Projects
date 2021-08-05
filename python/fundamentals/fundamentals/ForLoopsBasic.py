#1.
print('1. Basic')
for x in range(151):
    print(x)
    
#2.
print('2. Multiples of Five')
for x in range(5, 1001, 5):
    print(x)    

#3.
print('3.Counting, the Dojo Way')
for x in range(1,100):
    if(x % 10 == 0):
        print('Coding Dojo')
    elif(x % 5 == 0):
        print('Coding')
    else:
        print(x)

#4.
print("4. Whoa. That Sucker's Huge")
sum = 0
for x in range(0, 500000):
    if(x % 2 != 0):
        sum += x
print(sum)

#5.
print('5.Countdown by Fours')
for x in range(2018, 0, -1):
    if(x % 2 == 0 and x % 4 == 0):
        print(x)

#6.
print('6.Flexible Counter')
lowNum = 10
highNum = 0
mult = 3
direction = 1

if(lowNum > highNum):
    direction = -1

for x in range(lowNum, highNum, direction):
    if(x % mult == 0):
        print(x)