package BaristaChallenge;

public class Test {
    public static void main(String[] args) {

        Item item1 = new Item("Mocha",3.5);
        Item item2 = new Item("Matcha",3.40);
        Item item3 = new Item("Coffee",2.50);
        Item item4 = new Item("Tea",2.50); 
    
        Order order1 = new Order();
        Order order2 = new Order();

        Order order3 = new Order("Noah");
        Order order4 = new Order("Sam");
        Order order5 = new Order("Dan");

        order1.addItem(item1);
        order1.addItem(item2);

        order2.addItem(item3);
        order2.addItem(item3);

        order3.addItem(item2);
        order3.addItem(item4);

        order4.addItem(item4);
        order4.addItem(item4);

        order5.addItem(item3);
        order5.addItem(item4);

        order1.setReady();
        order2.setReady();

        System.out.println(order1.getStatusMessage());
        System.out.println(order2.getStatusMessage());
        System.out.println(order3.getStatusMessage());

        order1.display();
        order2.display();
        order3.display();
        order4.display();
        order5.display();
    }
}
