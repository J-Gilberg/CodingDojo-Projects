package PuzzleJava;

import java.util.Random;
import java.nio.charset.Charset;
import java.util.Arrays;
import java.util.ArrayList;

public class PuzzleJava {
    Random randMachine = new Random();

    public int[] getTenRolls() {
        int[] rolls = new int[10];
        for (int i = 0; i < 10; ++i) {
            rolls[i] = randMachine.nextInt(6) + 1;
        }
        return rolls;
    }

    public String generatePassword() {
        // byte[] randBytes = new byte[10];
        // randMachine.nextBytes(randBytes);
        // return new String(randBytes, Charset.forName("UTF-8"));
        Random random = new Random();

        return new String(random.ints(48, 122 + 1)
                .filter(i -> (i <= 57 || i >= 65) && (i <= 90 || i >= 97)).limit(10)
                .collect(StringBuilder::new, StringBuilder::appendCodePoint, StringBuilder::append)
                .toString()
                );
    }

    public String getNewPasswordSet(int length) {
        int leftLimit = 48; // numeral '0'
        int rightLimit = 122; // letter 'z'
        Random random = new Random();

        return new String(random.ints(leftLimit, rightLimit + 1)
                .filter(i -> (i <= 57 || i >= 65) && (i <= 90 || i >= 97)).limit(length)
                .collect(StringBuilder::new, StringBuilder::appendCodePoint, StringBuilder::append)
                .toString()
                );
    }

    public ArrayList<Integer> shuffleArray(ArrayList<Integer> list){
        int[] swapList1 = getTenRolls();
        int[] swapList2 = getTenRolls();
        
        for(int i = 0; i < swapList1.length ;++i){
            int temp = list.get(swapList1[i]);
            list.set(swapList1[i],list.get(swapList2[i]));
            list.set(swapList2[i],temp);

        }
        return list;
    }


}
