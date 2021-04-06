function range(...startEnd) {
  const range = [];

  let start, end;
  
  if (startEnd.length === 2) {
    [start, end] = startEnd;
  } else {
    start = 0;
    end = startEnd[0];
  }

  for (let element = start; element <= end; element++) {
    range.push(element);
  }

  return range;
}

// function range(end) {
//   return range(0, end);
// }

// Examples

console.log(range(10, 20));
console.log(range(5));