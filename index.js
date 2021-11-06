// let balance = 500.00;

//Class to create a new account
class Account {

  //Default values
  constructor(username) {
    this.username = username;
    this.balance = 0;
  }

}

//Class to record transactions
class Transaction {

  //Default values
  constructor(amount, account) {
    this.amount = amount;
    this.account = account;
  }
}

class Withdrawal extends Transaction {

  //Subtracts from current balance
  commit() {
    this.account.balance -= this.amount;
  }

}

class Deposit extends Transaction {

  //Adds into current balance
  commit() {
    this.account.balance += this.amount;
  }

}


// DRIVER CODE BELOW
// We use the code below to "drive" the application logic above and make sure it's working as expected
const myAccount = new Account("snow-patrol");

t1 = new Withdrawal(50.25, myAccount);
t1.commit();
console.log('Transaction 1:', t1);

// console.log('Balance:', balance);
