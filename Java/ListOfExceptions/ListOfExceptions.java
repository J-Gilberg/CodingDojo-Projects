package ListOfExceptions;

import java.util.ArrayList;

public class ListOfExceptions{
    
    public static void main(String[] args){
        ExceptionsTest test = new ExceptionsTest();
        ArrayList<Object> myList = new ArrayList<Object>();
        myList.add("13");
        myList.add("hello world");
        myList.add(48);
        myList.add("Goodbye World");

        
        try{
            test.getTheIntegers(myList);
            System.out.println("Whew! We made it!");
        }catch(ClassCastException e){
            System.out.println("Error Thrown");
        }


    }

}
