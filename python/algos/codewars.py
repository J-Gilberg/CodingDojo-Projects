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

def song_decoder(song):
    output = song.replace("WUB", " ").strip()
    while output.find("  ") != -1:
        output = output.replace("  ", " ")
    return output

print(song_decoder("AWUBBWUBC"))
print(song_decoder("AWUBWUBWUBWUBBWUBWUBWUBC"))
print(song_decoder("WUBAWUBBWUBCWUB"))