print('this is running')

class User:
    def __init__(self, name = '', email = '', int_rate = 0, balance = 0):
        self.name = name
        self.email = email
        self.account = []
        self.add_account(int_rate, balance)

    def display_user_info(self):
        print(self.name)
        print(self.email)
        return self    

    def add_account(self, int_rate, balance):
        self.account.append({'id': self.get_account_len(), 'account': BankAccount(int_rate, balance)})

    def get_account_len(self):
        return len(self.account)

    def get_account(self, account_id):
        for acc in self.account:
            if(acc['id'] == account_id):
                acc['account'].display_account_info()


class BankAccount:
    all_accounts = []

    def __init__(self, int_rate = 0, balance = 0): 
        self.balance = int(balance)
        self.int_rate = float(int_rate)
        self.account_num = 0
        BankAccount.all_accounts.append(self)

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
            self.set_balance(self.balance * (self.int_rate+1))
        return self

    def set_balance(self, new_balance):
        if isinstance(new_balance, int) or isinstance(new_balance, float):
            self.balance = new_balance
        else: return None

    @classmethod
    def printAccounts(cls):
        for a in cls.all_accounts:
            a.display_account_info()

jordan = User('Jordan','Jordan@codingdojo.com')
jordan.add_account(.01,1000)

jordan.display_user_info()

jordan.get_account(1)

