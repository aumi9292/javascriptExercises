function objectsEqual(obj1, obj2) {
  let obj2Keys = Object.keys(obj2);
  for (let key in obj1) {
    if (!obj2Keys.includes(key)) return false;
    if (obj1[key] !== obj2[key]) return false;
  }
  return true;
}

console.log(objectsEqual({a: 'foo'}, {a: 'foo'}));                      // true
console.log(objectsEqual({a: 'foo', b: 'bar'}, {a: 'foo'}));            // false
console.log(objectsEqual({}, {}));                                      // true
console.log(objectsEqual({a: 'foo', b: undefined}, {a: 'foo', c: 1}));  // false