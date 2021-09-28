package BaristaChallenge;

import java.util.ArrayList;

public class Order {

    private String name;
    private boolean ready;
    private ArrayList<Item> items;

    public Order(String name){
        this.name = name;
        this.ready = false;
        this.items = new ArrayList<Item>();
    }

    public Order(){
        this.name = "Guest";
        this.ready = false;
        this.items = new ArrayList<Item>();
    }

    public void addItem(Item item){
        this.items.add(item);
    }

    public String getStatusMessage(){
        if(ready){
            return "Your order is ready";
        }else{
            return "Thank you for waiting. Your order will be ready soon.";
        }
    }

    public double getOrderTotal(){
        double sum = 0;
        for(int i = 0; i < items.size();++i){
            sum += items.get(i).getPrice();
        }
        return sum;
        
    }

    public void display(){
        System.out.println(String.format("Order From - %s",this.getName()));
        for(int i = 0; i < items.size(); ++i){
            System.out.println(String.format("%s - %f",items.get(i).getName(),items.get(i).getPrice()));
        }
        System.out.println(String.format("Total: $%f",this.getOrderTotal()));
        System.out.println();
    }

    public String getName(){
        return name;
    }

    public void setName(String name){
        this.name = name;
    }

    public boolean getReady(){
        return ready;
    }

    public void setReady(){
        if(ready){
            ready = false;
        }else{
            ready = true;
        }
    } 


    public ArrayList<Item> getItemList(){
        return items;
    }

}
