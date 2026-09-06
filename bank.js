class Bank {
    constructor(name, balance) {
        this.name = name;
        this.balance = balance;
    }

    deposit(money) {
        this.balance += money;
        console.log(`Deposited: $${money} | New Balance: $${this.balance}`);
        return this; 
    }

    withdraw(money) {
        if (money > 0 && money <= this.balance) {
            this.balance -= money;
            console.log(`Withdrew: $${money} | Remaining Balance: $${this.balance}`);
        } else {
            console.log("Invalid amount or insufficient funds!");
        }
        return this; 
    }
}


const myBank = new Bank("John", 500);
myBank.deposit(200).withdraw(100);
