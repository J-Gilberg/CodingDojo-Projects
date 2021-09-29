package BankAccount;

import java.io.Console;

public class BankAccountTest {
    
    public static void main(String[] args){

        BankAccount jordansAccount = new BankAccount();
        jordansAccount.getCheckingAccoutNum();
        jordansAccount.depositMoney(jordansAccount.getCheckingAccoutNum(), 100);
        jordansAccount.depositMoney(jordansAccount.getSavingsAccoutNum(), 100);
        System.out.println(jordansAccount.accountBalance(jordansAccount.getCheckingAccoutNum()));
        jordansAccount.withdrawMoney(jordansAccount.getCheckingAccoutNum(), 75);
        System.out.println(jordansAccount.accountBalance(jordansAccount.getCheckingAccoutNum()));
    }
}
