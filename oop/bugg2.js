const item = {
  name: 'Foo',
  description: 'Fusce consequat dui est, semper.',
  price: 50,
  quantity: 100,
  discount(percent) {
    const discount = this.price * percent / 100;
    //this.price -= discount;
    //console.log(discount);
    return this.price - discount;
  },
};

console.log(item.discount(10));
console.log(item.discount(10));