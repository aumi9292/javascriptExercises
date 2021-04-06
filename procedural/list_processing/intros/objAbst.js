let obj = {a: 1, b: 2, c: 100};

let keys = Object.keys(obj);

let newObj = {};
keys.forEach((key) => {
  newObj[key] = obj[key] * 100;
});

console.log(newObj);