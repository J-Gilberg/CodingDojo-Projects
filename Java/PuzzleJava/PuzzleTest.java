package PuzzleJava;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
public class PuzzleTest {
    
    public static void main(String[] args){
        PuzzleJava pz = new PuzzleJava();
        System.out.println(Arrays.toString(pz.getTenRolls()));
        System.out.println(pz.generatePassword());
        System.out.println(pz.getNewPasswordSet(8));


        ArrayList<Integer> list = new ArrayList<Integer>();
        List<Integer> loadData = Arrays.asList(1, 3, 4, 3, 10, 1, 15,20);
        list.addAll(loadData);
        System.out.println(pz.shuffleArray(list));
    }
}
