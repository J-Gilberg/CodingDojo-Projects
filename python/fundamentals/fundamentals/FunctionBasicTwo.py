#1.
print('1. Countdown')
num = 10
def countdown(num):
    l = []
    for x in range(num,0,-1):
        l.append(x)
    return l 
print(countdown(num))

#2.
print('2. Print and Return')
listInput = [1,2]
def listOutput(l):
    print(l[0])
    return(l[1])
print(listOutput(listInput))

#3.
print('3. First Plus Length')
listInput = [1,2,4,5,7]
def fpl(l):
    return l[0] + len(l)
print(fpl(listInput))

#4.
print('4. Values Greater than Second')
listInput = [1,2,4,1,2]
listInput2 = [1,2,4,7,5]
def fpl(l):
    newList = []
    for x in range(len(l)):
        if(l[1] < l[x]):
            newList.append(l[x])
    print(len(newList))
    if(len(newList) < 2):
        return False
    return newList
print(fpl(listInput))
print(fpl(listInput2))

#5.
print('5. This Length, That Value')


def tltv(s, v):
    newList = []
    for x in range(s):
        newList.append(v)
    return newList

print(tltv(10, 5))
print(tltv(7, 2))