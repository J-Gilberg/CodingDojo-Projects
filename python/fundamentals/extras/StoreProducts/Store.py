from Product import Product

class Store():
    def __init__(self, name, products=[]):
            self.name = name
            self.product = products

    def add_product(self, new_product):
        self.product.append(new_product)
        print(f'product added to store: {new_product.get_name()}')

    def sell_product(self, id):
        for p in self.product:
            if p.get_id() == id:
                self.product.pop(self.product.index(p))

    def inflation(self, percent_increase):
        for p in self.product:
            p.update_price(percent_increase, True)
    
    def set_clearance(self, category, percent_discount):
        for p in self.product:
            if p.get_category == category:
                p.update_price(percent_discount, False)

        
# big_Store = Store('BigStore')
# big_Store.add_product(Product('Milk',2.10,'Dairy'))
# big_Store.add_product(Product('Yogurt',1.10,'Dairy'))
# big_Store.add_product(Product('Shredded Cheese',2.75,'Dairy'))
# big_Store.add_product(Product('1LB Beef',5.20,'Meat'))
# big_Store.add_product(Product('1LB Chicken',4.25,'Meat'))