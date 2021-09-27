package CafeJava;

import java.util.ArrayList;

public class CafeJava {
    public static void main(String[] args) {
        // APP VARIABLES
        // Lines of text that will appear in the app. 
        String generalGreeting = "Welcome to Cafe Java, ";
        

        ArrayList<Double> prices = new ArrayList<Double>();
        ArrayList<Integer> quantity = new ArrayList<Integer>();

        
        // Menu variables (add yours below)
        double mochaPrice = 3.5;
        double matchaPrice = 3.40;
        double coffeePrice = 2.50;
        double teaPrice = 2.50;

        String menuItem1 = "Mocha";
        String menuItem2 = "Matcha";
        String menuItem3 = "Coffee";
        String menuItem4 = "Tea";
    
        // Customer name variables (add yours below)
        String customer1 = "Cindhuri";
        String customer2 = "Sam";
        String customer3 = "Jimmy";
        String customer4 = "Noah";
    
        // Order completions (add yours below)
        boolean isReadyOrder1 = true;
        boolean isReadyOrder2 = false;
        boolean isReadyOrder3 = false;
        boolean isReadyOrder4 = false;
    
        // APP INTERACTION SIMULATION (Add your code for the challenges below)
        // Example:
        System.out.println(Greeting(customer1));// Displays "Welcome to Cafe Java, Cindhuri"
        System.out.println(Order(menuItem3,isReadyOrder1,customer1,1));
        System.out.println(Order(menuItem4, isReadyOrder4, customer4,1));
        

        prices.add(matchaPrice);
        quantity.add(2);
        System.out.println(OrderTotal(prices, quantity));
        System.out.println(Order(menuItem2, isReadyOrder2, customer2, quantity.get(0)));
        prices.clear();
        quantity.clear();

        prices.add(coffeePrice);
        quantity.add(-1);
        prices.add(mochaPrice);
        quantity.add(1);
        System.out.println(Order(menuItem1, isReadyOrder3, customer3, quantity.get(1)));
        System.out.println(OrderTotal(prices, quantity));



    	// ** Your customer interaction print statements will go here ** //
    }

    public static String Greeting(String name){
        String generalGreeting = "Welcome to Cafe Java, ";
        return (generalGreeting + name);
    }

    public static String Order(String order, boolean status, String customer, int quantity){
        String pendingMessage = " will be ready shortly";
        String readyMessage = " is ready";
        if(status){
            return(customer +" ,your order for " + String.valueOf(quantity) + " " + order + readyMessage);
        }
        return(customer +" ,your order for " + String.valueOf(quantity) + " " + order + pendingMessage);
    }

    public static double Total(ArrayList<Double> prices, ArrayList<Integer> quantity){
        double total = 0;

        for(int i = 0; i < prices.size(); ++i){
            total += prices.get(i) * quantity.get(i);
        }
        return total;
    }
    public static String OrderTotal(ArrayList<Double> prices, ArrayList<Integer> quantity){
        String displayTotalMessage = "Your total is $";

        return (displayTotalMessage + String.valueOf(Total(prices, quantity)));
    }

}
