package BaristaChallenge;

import java.util.ArrayList;

public class CoffeeKiosk {
    ArrayList<Item> menu;
    ArrayList<Order> orders;

    public CoffeeKiosk(){
        menu = new ArrayList<Item>();
        orders = new ArrayList<Order>();
    }

    public void runKiosk(){
    System.out.println("Add Item: add, New Order: order");
    String path = System.console().readLine();
    while(!path.equals("q")){
        if(path.equals("add")){
            this.addMenuItemByInput();
        }
        if(path.equals("order")){
            this.newOrder();
        }
        System.out.println("Add Item: add, New Order: order");
        path = System.console().readLine();
        }
    }

    public void displayMenu(){
        for(int i = 0; i < menu.size(); ++i){
            System.out.println(String.format("%o %s - %f",menu.get(i).getIdx() ,menu.get(i).getName(),menu.get(i).getPrice()));
        }
        System.out.println();
    }

    public void addMenuItem(String name, double price){
        menu.add(new Item(name, price));
    }

    public Order getRecentOrder(){
        return orders.get(orders.size()-1);
    }

    // menu.add(new Item("Mocha",3.5));
    // menu.add(new Item("Matcha",3.40));
    // menu.add(new Item("Coffee",2.50));
    // menu.add(new Item("Tea",2.50)); 
    public void newOrder() {
        
    	// Shows the user a message prompt and then sets their input to a variable, name
        System.out.println("Please enter customer name for new order:");
        String name = System.console().readLine();
        if(name.length() == 0){
            orders.add(new Order());
        }else{
            orders.add(new Order(name));
        }
        Order activeOrder = getRecentOrder();
        displayMenu();
        System.out.println("Please enter a menu item index or q to quit:");
        String itemNumber = System.console().readLine();
        
        while(!itemNumber.equals("q")) {
            int itemIdx = Integer.parseInt(itemNumber);
            if(itemIdx < menu.size()){
                activeOrder.addItem(menu.get(itemIdx));
            }
            System.out.println("Enter 'q' to Exit");
            itemNumber = System.console().readLine();
        }
        activeOrder.display();
    }

    public void addMenuItemByInput(){
        System.out.println("Enter Item Name:");
        String itemName = System.console().readLine();
        System.out.println("Enter Item Price:");
        String itemPrice = System.console().readLine();
        addMenuItem(itemName, Double.parseDouble(itemPrice));

    }
}
