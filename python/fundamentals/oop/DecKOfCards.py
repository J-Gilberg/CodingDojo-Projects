# class Card():
#     def __init__(self, suit, rank):
#         self.suit = suit
#         self.rank = rank

#     def __str__(self):
#         return f"{self.value}: {self.rank}" #for end users

#     def __repr__(self):
#         if self.rank == 10:
#             return f"{self.value} of {}"


# class Deck():

#     def __init__(self, suit, rank):
#         self.suit = suit
#         self.rank = rank


# #Fisher-Yates shuffle for a true random function

# # to swap in python, use multiple assingment. 
#     # value1, value2 = value2, value1

favorite_color = input('What is your favorite color? ') # input takes a prompt, which needs to be a string
print(f'Your favorite color is: {favorite_color}') #output, prints the color given to the console
