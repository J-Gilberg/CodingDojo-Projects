# def digital_root(n):
#     output = 0
#     if(len(str(n)) == 1):
#         output = n
#         return output
#     while len(str(n)) > 1:
#         output = 0
#         for i in str(n):
#             output += int(i)
#         n = str(output)
#     return output

# print(digital_root(16))
# print(digital_root(942))
# print(digital_root(132189))
# print(digital_root(493193))

# def xo(s):
#     count = 0
#     for i in str(s).lower():
#         if i == 'x':
#             count += 1
#         if i == 'o':
#             count -= 1    
#     if count == 0:
#         return True
#     return False

# print(xo('xo'))
# xo('xo0')
# print(xo('xxxoo'))

# def to_camel_case(text):
#     text = str(text)
#     if len(text) == 0:
#         return text
#     s = []
#     output = ''
#     u = 0
#     j = 0
#     jj = 0
#     if text[0] != text[0].upper():
#         u = 1
#     while(text.find('-') != -1 or text.find('_') != -1):
#         j = text.find('-')
#         jj = text.find('_') # 3
#         if((jj < j and jj != -1) or j == -1):
#             i = jj
#         else:    
#             i = j
#         sly = slice(0, i)
#         # print(text[sly].title())
#         s.append(text[sly].title())
#         for ii in range(0,i+1):
#             text = text.replace(text[0],'',1)
#     s.append(text.title())
#     if u == 1:
#         s[0] = s[0].lower()

#     for e in range(0,len(s)):
#         output += s[e] 
#     return output

# print(to_camel_case(''))
# print(to_camel_case("the_stealth_warrior"))
# print(to_camel_case("The-Stealth-Warrior"))
# print(to_camel_case("A-B-C"))
# print(to_camel_case('A-pippi_Is-Pippi'))
# def is_valid_walk(walk):
#     if len(walk) == 10 and walk.count('s') == walk.count('n') and walk.count('e') == walk.count('w'):
#         return True
#     return False

# #some test cases for you...
# print(is_valid_walk(['n','s','n','s','n','s','n','s','n','s']))
# print(is_valid_walk(['w','e','w','e','w','e','w','e','w','e','w','e']))
# print(is_valid_walk(['w']))
# print(is_valid_walk(['n','n','n','s','n','s','n','s','n','s']))

# def song_decoder(song):
#     output = song.replace("WUB", " ").strip()
#     while output.find("  ") != -1:
#         output = output.replace("  ", " ")
#     return output

# print(song_decoder("AWUBBWUBC"))
# print(song_decoder("AWUBWUBWUBWUBBWUBWUBWUBC"))
# print(song_decoder("WUBAWUBBWUBCWUB"))

# def array_diff(a, b):
#     while(len(b)>0):
#         i = 0
#         while i < len(a):
#             if a[i] == b[0]:
#                 a.pop(i)   
#                 i -= 1     
#             else:
#                 i += 1
#         b.pop(0)    
#     return a


# print(array_diff([1,2], [1]))
# print(array_diff([1,2,2], [1]))
# print(array_diff([1,2,2], [2]))
# print(array_diff([1,2,2], []))
# print(array_diff([], [1,2]))
# print(array_diff([1,2,3], [1, 2]))

# def unique_in_order(iterable):
#     output = []
#     if len(iterable) == 0:
#         return output
#     i = 0
    
#     ii = iterable[i]
#     output.append(iterable[i])
#     while i < len(iterable):
#         if ii == iterable[i]:
#             i += 1
#         else:
#             ii = iterable[i]
#             output.append(iterable[i])
#             i += 1    
#     return output
# print(unique_in_order('AAAABBBCCDAABBB'))
# def persistence(n):
#     count = 0
#     while n >= 9:
#         p = 0
#         for i in range(0,len(str(n))):
#             if i == 0:
#                 p = int(str(n)[i])
#             else:
#                 p = p*int(str(n)[i])
#         n = p
#         count += 1
#     return count

# print(persistence(39))
# print(persistence(4))
# print(persistence(25))
# # print(persistence(999))

# def high(x):
#     s = ''
#     arr = []
#     while len(x) > 0:
#         if x.find(' ') != -1:
#             ice = slice(0,x.find(' '))
#             print(ice)
#             arr.append(x[ice])
#             x = x.replace(x[ice],'',1)
#             x = x.replace(x[0],'',1)
#         else:
#             arr.append(x)
#             x = ''
#     print(arr)
#     tempSum = 0
#     resultindex = 0
#     for i in range(len(arr),0,-1):
#         sum = 0
#         for ii in range(len(arr[i-1])):
#             sum += (ord(arr[i-1][ii])-96)
#         print(sum)    
#         if sum >= tempSum:
#             tempSum = sum
#             resultindex = i-1
#     return arr[resultindex]

# print(high('man i need a taxi up to ubud'))
# print(high('what time are we climbing up the volcano'))
# print(high('take me to semynak'))
# print(high('aa b'))
# print(high('b aa'))
# print(high('bb d'))
# print(high('d bb'))
# print(high("aaa b"))
# def find_outlier(integers):
#     count = 0
#     ii = 0
#     for i in range(len(integers)):
#         if integers[i]%2 == 0:
#             count += 1
#         else:
#             count -= 1  
#         if count >= 2:
#             while integers[ii]%2 == 0:
#                 ii += 1
#             break
#         if count <= -2:
#             while integers[ii]%2 != 0:
#                 ii += 1
#             break
#     if count == 1:
#         while integers[ii]%2 == 0:
#             ii += 1
#     if count == -1:
#         while integers[ii]%2 != 0:
#             ii += 1
#     return integers[ii]

# print(find_outlier([1,0,0]))
# print(find_outlier([2, 4, 6, 8, 10, 3]))
# print(find_outlier([2, 4, 0, 100, 4, 11, 2602, 36]))
# print(find_outlier([160, 3, 1719, 19, 11, 13, -21]))