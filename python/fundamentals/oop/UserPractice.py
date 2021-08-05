print('this is running')

class User:
    def __init__(self, name, email, int_rate, balance):
        self.name = name
        self.email = email
        self.account = BankAccount(int_rate, balance)

    def display_user_info(self):
        print(self.name)
        print(self.email)
        return self    

    def transfer_money(self, other_user, amount):
        self.account_balance -= amount
        other_user.account_balance += amount
        return self

class BankAccount:
    # don't forget to add some default values for these parameters!

    all_accounts = []
    def __init__(self, int_rate, balance): 
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

jordan = User('Jordan' 'Jordan@codingdojo.com')


Tom = User()
Tom.name = 'Tom'
Tom.email = 'Tom@codingdojo.com'
Tom.account_balance = 100000
Tom.display_user_balance().display_user_info()

Jess = User()
Jess.name = 'Jess'
Jess.email = 'Jess@codingdojo.com'
Jess.account_balance = 768065161
Jess.display_user_balance().display_user_info()

Dan = User()
Dan.name = 'Dan'
Dan.email = 'Dan@codingdojo.com'
Dan.account_balance = 5000
Dan.display_user_balance().display_user_info()

Tom.display_user_balance().make_deposit(2000).make_deposit(2000).make_deposit(2000).make_withdrawal(5000).display_user_balance()
Jess.display_user_balance().make_deposit(10000).make_deposit(200000).make_withdrawal(1000000).make_withdrawal(1000000).display_user_balance()
Dan.display_user_balance().make_deposit(500).make_withdrawal(10000).make_withdrawal(100000).make_withdrawal(1000000).display_user_balance()
Jess.transfer_money(Dan,5000000).display_user_balance()
