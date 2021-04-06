let invoices = {
  unpaid: [],
  add(name, amount) {
    let newInvoice = {
      name,
      amount
    };
    this.unpaid.push(newInvoice);
  },
  totalDue() {
    return this.unpaid
      .map(invoice => invoice.amount)
      .reduce((total, curr) => total + curr, 0);
  },
  paid: [],
  payInvoice(name) {
    let updatedUnpaid = [];
    this.unpaid.forEach(invoice => {
      if (invoice.name === name) {
        this.paid.push(invoice);
      } else {
        updatedUnpaid.push(invoice);
      }
    });
    this.unpaid = updatedUnpaid;
  },
  totalPaid() {
    return this.paid
      .map(invoice => invoice.amount)
      .reduce((total, curr) => total + curr, 0);
  },
};

console.log(invoices);
//invoices.add('Starbucks', 500);
invoices.add('Due North Development', 250);
invoices.add('Moonbeam Interactive', 187.50);
invoices.add('Slough Digital', 300);
invoices.payInvoice('Slough Digital');
invoices.payInvoice('Due North Development');

console.log(invoices);
console.log(invoices.totalDue());
console.log(invoices.totalPaid());

