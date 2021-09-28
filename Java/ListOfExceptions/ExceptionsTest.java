package ListOfExceptions;

import java.util.ArrayList;

public class ExceptionsTest {
    
    public void getTheIntegers(ArrayList<Object> list) throws ClassCastException{
            for(int i = 0; i < list.size(); i++) {
                Integer castedValue = (Integer) list.get(i);
                System.out.println(castedValue);
            }
            
    }
}
