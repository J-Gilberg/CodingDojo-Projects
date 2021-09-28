package CafeBusinessLogic;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class TestCafe {

    public static void main(String[] args) {
        int goal = 10;
        CafeUtil cafeUtil = new CafeUtil();
	    // in order to use the CafeUtil class' methods.
        System.out.println("----- Streak Goal Test -----");
        System.out.printf("Purchases needed by week 10: %s \n", cafeUtil.getStreakGoal(goal));

        System.out.println("----- Price Chart Test-----");
        cafeUtil.printPriceChart("Chai Latte Mix", 4.5, 3);
        cafeUtil.printPriceChart("Specialty Coaster", 2.0, 5);

        System.out.println("----- Order Total Test-----");
        double[] lineItems = {3.5, 1.5, 4.0, 4.5};
        System.out.printf("Order total: %s \n", cafeUtil.getOrderTotal(lineItems));

        System.out.println("----- Display Menu Test-----");
        List<String> loadMenu = Arrays.asList( "drip coffee", "cappucino", "latte", "mocha" );
        List<Double> loadPrices = Arrays.asList(1.5, 3.5, 4.5, 3.5);
        ArrayList<String> menu = new ArrayList<String>();
        ArrayList<Double> prices = new ArrayList<Double>();
            
        // Note: Below is a way to add multiple elements to a list in fewer lines.
        // It does require an extra import at the top of the file.
        menu.addAll(loadMenu);
        prices.addAll(loadPrices);
        cafeUtil.displayMenu(menu, prices);


        System.out.println("----- Add Customer Test-----");
        ArrayList<String> customers = new ArrayList<String>();
        // Test 4 times
        for (int i = 0; i < 4; i++) { 
            cafeUtil.addCustomer(customers); 
            System.out.println(customers);
        }
    }
}