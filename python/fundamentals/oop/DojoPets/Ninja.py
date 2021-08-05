import Pets

class Ninja:

    def __init__(self ,first_name ,last_name ,treats ,pet_food, name, type, tricks, health, energy, weight, breed, sound):
        self.first_name = first_name
        self.last_name = last_name
        self.pet = Pets.Dog(name, type, tricks, health, energy, weight, breed, sound)
        self.treats = treats
        self.pet_food = pet_food
    
    def walk(self):
        self.pet.play()

    def feed(self):
        self.pet.eat()

    def bathe(self):
        self.pet.noise()

jordan = Ninja('Jordan', 'Gilberg', 'milk bones', 'IAMS', 'kylo', 'mammal', ['shake', 'roll over', 'sit', 'laydown','stay'], 0, 0, 25, 'Mutt', "bark")

jordan.walk()
jordan.feed()
jordan.bathe()