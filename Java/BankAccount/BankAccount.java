package BankAccount;

import java.util.Random;

public class BankAccount {
    private double checkingBalance;
    private double savingsBalance;
    private static int numAccounts;
    private static double totalMoneys;
    private String checkingAccountNum;
    private String savingsAccountNum;

    public BankAccount(){
        this.checkingBalance = 0;
        this.checkingAccountNum = this.generateNum();
        this.savingsAccountNum = this.generateNum();
        this.savingsBalance = 0;
        ++numAccounts;
    }

    public String generateNum(){
        Random random = new Random();
        String accNum = "";
        for(int i = 0; i < 8;++i){
            accNum += random.nextInt(10);
        }   
        return accNum;     
    }

    private double getCheckingBalance(){
        return checkingBalance;
    }

    private double getSavingsBalance(){
        return savingsBalance;
    }

    public String getSavingsAccoutNum(){
        return checkingAccountNum;
    }

    public String getCheckingAccoutNum(){
        return savingsAccountNum;
    }

    public String depositMoney(String accountNumber, double moneys){
        if(accountNumber == this.getCheckingAccoutNum()){
            this.checkingBalance += moneys;
            return String.format("Checking Balance: %f", this.getCheckingBalance());
        }else if(accountNumber == this.getSavingsAccoutNum()){
            this.savingsBalance += moneys;
            return String.format("Saving Balance: %f", this.getSavingsBalance());
        }else{
            return "Please provide the correct account number for Savings or Checking";
        }
    }

    public String withdrawMoney(String accountNumber, double moneys){
        if(accountNumber == this.getCheckingAccoutNum()){
            this.checkingBalance -= moneys;
            return String.format("Checking Balance: %f", this.getCheckingBalance());
        }else if(accountNumber == this.getSavingsAccoutNum()){
            this.savingsBalance -= moneys;
            return String.format("Saving Balance: %f", this.getSavingsBalance());
        }else{
            return "Please provide the correct account number for Savings or Checking";
        }
    }

    public String accountBalance(String accountNumber){
        if(accountNumber == this.getCheckingAccoutNum()){
            return String.format("Checking Balance: %f", this.getCheckingBalance());
        }else if(accountNumber == this.getSavingsAccoutNum()){
            return String.format("Saving Balance: %f", this.getSavingsBalance());
        }else{
            return "Please provide the correct account number for Savings or Checking";
        }
    }
}
