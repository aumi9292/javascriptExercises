

// let account = makeAccount();

// console.log(account.deposit(81));
// console.log(account.withdraw(91));
// console.log(account.withdraw(100));
// console.log(account.transactions());

// let account2 = makeAccount();

// console.log(account2.deposit(1000));
// console.log(account2.withdraw(91));
// console.log(account2.withdraw(100));
// console.log(account2.transactions());

function makeBank() {
  function makeAccount(number) {
    let balance = 0;
    let transactions = [];
    let accountNumber = number;
    return {
      deposit(amount) {
        balance += amount;
        transactions.push({type: 'Deposit', amount});
        return balance;
      },
      withdraw(amount) {
        if (amount > balance) {
          amount = balance;
        }
        transactions.push({type: 'Withdrawl', amount});
        balance -= amount;
        return amount;
      },
      balance() {
        return balance;
      },
      accountNumber() {
        return accountNumber;
      },
      transactions() {
        return transactions;
      }
    };
  };

  let accounts = [];

  let accountNumber = 100;
  return {
    openAccount() {
      accountNumber += 1;
      let account = makeAccount(accountNumber);
      accounts.push(account);
      return account;
    },
    transfer(source, destination, amount) {
      let toTransfer = source.withdraw(amount);
      destination.deposit(toTransfer);
    },
    accounts() {
      return accounts;
    }
  };
}

// let creditUnion = makeBank();
// console.log(creditUnion.accounts);

// let acct3 = creditUnion.openAccount();
// console.log(acct3.number);
// console.log(creditUnion.accounts);
// console.log(creditUnion.accounts[0]);
// let acct4 = creditUnion.openAccount();
// console.log(creditUnion.accounts[1]);

let bank = makeBank();
let source = bank.openAccount();
source.deposit(10);
let destination = bank.openAccount();
bank.transfer(source, destination, 7);
console.log(source.balance());
console.log(destination.balance());
console.log(bank.accounts());