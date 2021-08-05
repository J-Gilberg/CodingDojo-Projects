class Product():
    def __init__(self, id, name, price, category):
        self.id = id
        self.name = name
        self.price = price
        self.category = category

    #Set/Gets
    def get_name(self):
        return self.name

    def get_category(self):
        return self.category

    def get_id(self):
        return self.id

    def update_price(self, percent_change, is_increased):
        if is_increased == True:
            self.price * 1+percent_change
        if is_increased == False:
            self.price * 1-percent_change

    def print_info(self):
        print(f' Name: {self.name}, Category: {self.category}, Price: {self.price}')

