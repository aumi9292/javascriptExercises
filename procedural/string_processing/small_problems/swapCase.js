function swapCase(str) {
  return str
    .split('')
    .map(char => {
      return char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()
    })
    .join('');
}

console.log(swapCase('CamelCase'));              // "cAMELcASE"
console.log(swapCase('Tonight on XYZ-TV'));      // "tONIGHT ON xyz-tv"