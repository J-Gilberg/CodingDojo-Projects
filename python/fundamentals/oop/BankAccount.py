class BankAccount:
    # don't forget to add some default values for these parameters!

    all_accounts = []
    def __init__(self, int_rate = 0, balance = 0): 
        self.balance = int(balance)
        self.int_rate = float(int_rate)
        BankAccount.all_accounts.append(self)
        # don't worry about user info here; we'll involve the User class soon
    def deposit(self, amount):
        self.balance += amount
        return self
    def withdraw(self, amount):
        if self.balance > amount:
            self.balance -= amount
        else:
            print('Insufficient funds')
            self.balance -= 5    
        return self    
    def display_account_info(self):
        print(f'Balance: ${self.balance}')
        
    def yield_interest(self):
        if self.balance > 0:
            self.balance = self.balance * (self.int_rate+1)
        return self

    @classmethod
    def printAccounts(cls):
        for a in cls.all_accounts:
            a.display_account_info()

acc1 = BankAccount(.01, 10000)
acc2 = BankAccount(.02, 6095000)

acc1.display_account_info()
acc2.display_account_info()

acc1.deposit(5500).deposit(65684).deposit(47968).withdraw(1000000).yield_interest().display_account_info()
acc2.deposit(500).deposit(400).withdraw(1000000).withdraw(500).withdraw(100000).withdraw(8546).yield_interest().display_account_info()

BankAccount.printAccounts()
