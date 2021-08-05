from Store import Store
from Product import Product


big_Store = Store('BigStore')
big_Store.add_product(Product('D56733','Milk',2.10,'Dairy'))
big_Store.add_product(Product('D56746','Yogurt',1.10,'Dairy'))
big_Store.add_product(Product('D56354','Shredded Cheese',2.75,'Dairy'))
big_Store.add_product(Product('M56598','1LB Beef',5.20,'Meat'))
big_Store.add_product(Product('M56377','1LB Chicken',4.25,'Meat'))


big_Store.sell_product('M56377') 

# for p in big_Store.product:
#     print(p.get_name())