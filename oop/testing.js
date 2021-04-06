// function makeObj() {
//   let obj = {};
//   obj.propA = 10;
//   obj.propB = 20;
//   return obj;
// }

// function makeObj2() {
//   return {
//     propA: 10,
//     propB: 20,
//   };
// }

// // let invoice = {
// //   phone: 3000,
// //   internet: 6500,
// // };
// // let payment = {
// //   phone: 1300,
// //   internet: 5500,
// // };
// // let invoiceTotal = invoice.phone + invoice.internet;
// // let paymentTotal = payment.phone + payment.internet;
// // let remainingDue = invoiceTotal - paymentTotal;

// // console.log(paymentTotal);         // => 6800
// // console.log(remainingDue);         // => 2700

// function createInvoice(services = {}) {
//   let phone = services.phone || 3000;
//   let internet = services.internet || 5500;
//   return {
//     phone,
//     internet,
//     total() {
//       return this.phone + this.internet;
//     },
//     addPayment(payment) {
//       let phonePay = payment.phone || 0;
//       let internetPay = payment.internet || 0;
//       this.phone -= phonePay;
//       this.internet -= internetPay;
//       if (payment.amount) {
//         this.phone -= payment.amount
//       }
//       return this.total();
//     },
//     addPayments(payments) {
//       payments.forEach(payment => {
//         this.addPayment(payment);
//       })
//     },
//     amountDue() {
//       return this.total();
//     }
//   };
// }

// function invoiceTotal(invoices) {
//   let total = 0;
//   let i;

//   for (i = 0; i < invoices.length; i += 1) {
//     total += invoices[i].total();
//   }

//   return total;
// }

// let invoices = [];
// // invoices.push(createInvoice());
// // invoices.push(createInvoice({
// //   internet: 6500,
// // }));

// // invoices.push(createInvoice({
// //   phone: 2000,
// // }));

// // invoices.push(createInvoice({
// //   phone: 1000,
// //   internet: 4500,
// // }));

// // console.log(invoiceTotal(invoices));             // => 31000

// function createPayment(services = {}) {
//   let payment = Object.assign({}, services);
//   payment.total = function() {
//     if (this.amount) return this.amount;
//     return Object.values(services).reduce((sum, curr) => sum + curr, 0);
//   };
//   return payment;
// }


// let invoice = createInvoice({
//   phone: 1200,
//   internet: 4000,
// });

// let payment1 = createPayment({
//   amount: 2000,
// });

// let payment2 = createPayment({
//   phone: 1000,
//   internet: 1200,
// });

// let payment3 = createPayment({
//   phone: 1000,
// });

// invoice.addPayment(payment1);
// invoice.addPayments([payment2, payment3]);
// console.log(invoice.amountDue());       // this should return 0


// function Lizard() {
//   this.scamper = function() {
//     console.log("I'm scampering!");
//   };
// }

// let lizzy = Lizard();
// lizzy.scamper(); // ?

function makeObj() {
  return {
    prpA: 10,
    prpB: 20,
  };
}

function createInvoice(services = {}) {
  return {
    phone: services.phone || 3000,
    internet: services.internet || 5500,
    payments: [],
    total() {
      return this.phone + this.internet;
    },
    addPayment(payment) {
      console.log(this.payments)
      let amts = Object.values(payment).filter(pymt => typeof pymt === 'number')
      amts.forEach(pmt => this.payments.push(pmt));
    },
    addPayments(payments) {
      payments.forEach(payment => this.addPayment(payment));
    },
    amountDue() {
      return this.total() - this.payments.reduce((sum, curr) => sum + curr, 0);
    },
  };
}

function invoiceTotal(invoices) {
  let total = 0;
  let i;

  for (i = 0; i < invoices.length; i += 1) {
    total += invoices[i].total();
  }

  return total;
}

let invoices = [];
invoices.push(createInvoice());
invoices.push(createInvoice({
  internet: 6500,
}));

invoices.push(createInvoice({
  phone: 2000,
}));

invoices.push(createInvoice({
  phone: 1000,
  internet: 4500,
}));

console.log(invoiceTotal(invoices));             // => 31000

function createPayment(services = {}) {
  return {
    internet: services.internet || 0,
    phone: services.phone || 0,
    amount: services.amount || 0,
    total() {
      return Object.values(services).reduce((total, curr) => total + curr, 0);
    },
  };
}

function paymentTotal(payments) {
  let total = 0;
  let i;

  for (i = 0; i < payments.length; i += 1) {
    total += payments[i].total();
  }

  return total;
}

let payments = [];
payments.push(createPayment());
payments.push(createPayment({
  internet: 6500,
}));

payments.push(createPayment({
  phone: 2000,
}));

payments.push(createPayment({
  phone: 1000,
  internet: 4500,
}));

payments.push(createPayment({
  amount: 10000,
}));

console.log(paymentTotal(payments));      // => 24000

let invoice = createInvoice({
  phone: 1200,
  internet: 4000,
});

let payment1 = createPayment({
  amount: 2000,
});

let payment2 = createPayment({
  phone: 1000,
  internet: 1200,
});

let payment3 = createPayment({
  phone: 1000,
});

invoice.addPayment(payment1);
invoice.addPayments([payment2, payment3]);
console.log(invoice.amountDue());       // this should return 0