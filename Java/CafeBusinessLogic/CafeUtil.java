package CafeBusinessLogic;

import java.util.ArrayList;
public class CafeUtil {
    
    public int getStreakGoal(int numWeeks){
        int numDrinks = 0;
        while(numWeeks > 0){
            numDrinks += numWeeks;
            --numWeeks;
        }
        return numDrinks;
    }

    public void printPriceChart(String item, double price, int maxNumber){
        System.out.println(item);
        while(maxNumber > 0){
            System.out.println(String.format("%o - $%f",maxNumber , maxNumber*price - (maxNumber-1)*0.50d));
            --maxNumber;
        }
    }

    public double getOrderTotal(double[] items){
        double sum = 0;
        for(int i = 0; i < items.length ;++i){
            sum += items[i];
        }
        
        return sum;
    }

    public void displayMenu(ArrayList<String> items, ArrayList<Double> prices){
        for(int i = 0; i < items.size(); ++i){
            System.out.println(String.format("%o %s -- $%f",i+1,items.get(i),prices.get(i)));
        }
    }
    
    public ArrayList<String> addCustomer(ArrayList<String> customers){
        customers.add(System.console().readLine());
        return customers;
    } 

}
