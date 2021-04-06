function makeCar(rate, brakeRate) {
  return {
    speed: 0,
    rate,
    brakeRate,
    accelerate() {
      this.speed += this.rate;
    },
    brake() {
      this.speed -= this.brakeRate;
      if (this.speed < 0) this.speed = 0;
    }
  };
}

let sedan = makeCar(8, 6);

console.log(sedan);
sedan.accelerate();
sedan.accelerate();
sedan.brake();
sedan.brake();
sedan.brake();
sedan.brake();
sedan.brake();
console.log(sedan);



// let coupe = {
//   speed: 0,
//   rate: 12,
//   accelerate() {
//     this.speed += this.rate;
//   },
// };

// let hatchBack = makeCar(9);

