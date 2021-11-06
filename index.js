// let balance = 500.00;

//Class to create a new account
class Account {

  //Default values
  constructor(username) {
    this.username = username;
    this.transactionHistory = [];
  }

  get balance() {
    let balance = 0;

    for (let i = 0; i < this.transactionHistory.length; i++) {
      balance += this.transactionHistory[i].amount;
    }

    return balance;
  }

  //Adds each transaction object into the array
  addTransacation(transaction) {
    this.transactionHistory.push(transaction);
  }

}

//Class to record transactions
class Transaction {

  //Default values
  constructor(amount, account) {
    this.amount = amount;
    this.account = account;
  }

  commit() {
    if (this.isAllowed) {
      this.amount = this.value;
      this.time = new Date();
      this.account.addTransacation(this);
    } else (

      console.log(`Cannot complete transaction due to ${this.account.balance} is less than ${this.amount}.`)

    );
  }

}

class Withdrawal extends Transaction {

  get value() {
    return -this.amount;
  }

  get isAllowed() {

    if ((this.account.balance - this.amount) > 0) {

      return true;

    }

    return false;
  }

}

class Deposit extends Transaction {

  get value() {
    return this.amount;
  }

  get isAllowed() {
    return true;
  }

}


// DRIVER CODE BELOW
// We use the code below to "drive" the application logic above and make sure it's working as expected
const myAccount = new Account("snow-patrol");

let t1 = new Withdrawal(50.25, myAccount);
t1.commit();

let t2 = new Deposit(100, myAccount);
t2.commit();

let t3 = new Withdrawal(150, myAccount);
t3.commit();

console.log(`Account balance for ${myAccount.username}: $${myAccount.balance}`);

const mySavingsAccount = new Account("FriendlyPie");

let st1 = new Deposit(50.25, mySavingsAccount);
st1.commit();

let st2 = new Deposit(100, mySavingsAccount);
st2.commit();

let st3 = new Deposit(200, mySavingsAccount);
st3.commit();

let st4 = new Withdrawal(300, mySavingsAccount);
st4.commit();


console.log(`Account balance for ${mySavingsAccount.username}: $${mySavingsAccount.balance}`);
