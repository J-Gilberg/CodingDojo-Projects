class Pet:

    def __init__(self ,name ,type ,tricks ,health ,energy):
        self.name = name
        self.type = type
        self.tricks = tricks
        self.health = health
        self.energy = energy

    def sleep(self):
        print('pet is asleep')
        self.set_energy(self.get_energy() + 25)

    def eat(self):
        print('the pet has ate')
        self.set_energy(self.get_energy() + 5)
        self.set_health(self.get_health() + 10)

    def play(self):
        print('the pet has played')
        self.set_health(self.get_health() + 5)

    def noise(self):
        if self.type == 'dog':
            print('bark')
        if self.type == 'cat':
            print('meow')

    def get_energy(self):
        return self.sleep

    def set_energy(self, energy):
        if isinstance(energy, int) or isinstance(energy, float):
            self.energy = energy

    def get_energy(self):
        return self.energy

    def set_energy(self, energy):
        if isinstance(energy, int) or isinstance(energy, float):
            self.energy = energy

    def get_health(self):
        return self.health

    def set_health(self, health):
        if isinstance(health, int) or isinstance(health, float):
            self.health = health

class Dog(Pet):
    def __init__(self, name, type, tricks, health, energy, weight, breed, sound):
        super().__init__(name, type, tricks, health, energy)
        self.weight = weight
        self.breed = breed
        self.sound = sound 

    def noise(self):
        print(self.sound)