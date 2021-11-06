let balance = 500.00;

class Withdrawal {

  //Default values
  constructor(amount, account) {
    this.amount = amount;
    this.account = account;
  }

  //Subtracts from current balance
  commit() {
    this.account.balance -= this.amount;
  }

}

class Deposit {

  //Default values
  constructor(amount, account) {
    this.amount = amount;
    this.account = account;
  }

  //Adds into current balance
  commit() {
    this.account.balance += this.amount;
  }

}

//Class to create a new account
class Account {

  //Default values
  constructor(username) {
    this.username = username;
    this.balance = 0;
  }

}

// DRIVER CODE BELOW
// We use the code below to "drive" the application logic above and make sure it's working as expected
const myAccount = new Account("snow-patrol");

t1 = new Withdrawal(50.25, myAccount);
t1.commit();
console.log('Transaction 1:', t1);

// console.log('Balance:', balance);
