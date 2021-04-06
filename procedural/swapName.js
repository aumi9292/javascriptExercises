function swapName(name) {
  let names = name.split(' ');
  let fNames = names.slice(0, names.length - 1);
  let lName = names[names.length - 1];
  return [lName, fNames.join(' ')].join(', ');
}

console.log(swapName('Joe Bob Frank Roberts'));    // "Roberts, Joe"