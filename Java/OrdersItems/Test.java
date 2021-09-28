package OrdersItems;

import java.util.ArrayList;
public class Test {
    public static void main(String[] args) {

        
        Item item1 = new Item();
        Item item2 = new Item();
        Item item3 = new Item();
        Item item4 = new Item(); 
        
        item1.name = "Mocha";
        item1.price = 3.5;
        item2.name = "Matcha";
        item2.price = 3.40;
        item3.name = "Coffee";
        item3.price = 2.50;
        item4.name = "Tea";
        item4.price = 2.50;
    
        Order order1 = new Order();
        Order order2 = new Order();
        Order order3 = new Order();
        Order order4 = new Order();
        order1.name = "Cindhuri";
        order2.name = "Jimmy";
        order3.name = "Noah";
        order4.name = "Sam";

        System.out.println(order1);

        order2.items.add(item2);
        order3.items.add(item4);
        order3.total += item4.price;

        order4.items.add(item1);
        order4.total += item1.price;

        order3.ready = true;

        order4.items.add(item1);
        order4.total += item1.price;
        order4.items.add(item1);
        order4.total += item1.price;

        order2.ready = true;

        System.out.printf("Name: %s\n", order1.name);
        System.out.printf("Total: %s\n", order1.total);
        System.out.printf("Ready: %s\n", order1.ready);

        System.out.printf("Name: %s\n", order2.name);
        System.out.printf("Total: %s\n", order2.total);
        System.out.printf("Ready: %s\n", order2.ready);

        System.out.printf("Name: %s\n", order3.name);
        System.out.printf("Total: %s\n", order3.total);
        System.out.printf("Ready: %s\n", order3.ready);

        System.out.printf("Name: %s\n", order4.name);
        System.out.printf("Total: %s\n", order4.total);
        System.out.printf("Ready: %s\n", order4.ready);
    }
}
