package BaristaChallenge;

public class Item {
    private String name;
    private double price;
    private int idx;
    private static int itemCount;

    public Item(String name, double price){
        this.name = name;
        this.price = price;
        ++itemCount;
        this.idx = itemCount;
    }

    public String getName(){
        return name;
    }

    public void setName(String name){
        this.name = name;
    }

    public double getPrice(){
        return price;
    }

    public void setPrice(double price){
        this.price = price;
    }

    public int getIdx(){
        return idx;
    }

}
