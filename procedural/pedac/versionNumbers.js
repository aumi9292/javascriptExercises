/*
While version numbers often appear to be decimal numbers, they are, in fact, a convenient notation for a more complicated number system. The following are all legal version numbers:

1
1.0
1.2
3.2.3
3.0.0
4.2.3.0

Write a function that takes any two version numbers in this format and compares them, with the result of this comparison showing whether the first is less than, equal to, or greater than the second version:

If version1 > version2, we should return 1.
If version1 < version2, we should return -1.
If version1 === version2, we should return 0.
If either version number contains characters other than digits and the . character, we should return null.

0.1 < 1 = 1.0 < 1.1 < 1.2 = 1.2.0.0 < 1.18.2 < 13.37

// problem
given two strings of numbers formatted in a version numbering system, return 1, -1, or 0 depending on which is greater or less than or equal to the other. 

// Questions
  Are we given a string or number? 

// rules
  Version numbering system: XX.XX.XX 
  The left-most number is the highest "place", with the furthest right as the lowest place
  Version number "places" are delimited by a .
  To determine if one place is gt, ls, or = to the same place of another version number, they must be compared numerically, not by their unicode values

  //data structures--in: given a string, convert to array of strings; out: number 1, -1, or 0. intermediate: array, numbers, booleans

  //1.2.0.0 < 1.18.2
  // algorithm
  return null if either string contains characters that are not 0-9 or .
  // split both strings into array of chars ['1', '2', '0', '0'] and ['1', '18', '2']
    // for each, map the numerical equivalent over the string [1, 2, 0, 0] and [1, 18, 2]
  //iterate over the first array of numbers,
    //at each index, compare that number to the number in the corresponding index of the second array 1 and 1, 2 and 18
    //if the two numbers at the index are equal, 1 and 1
      continue checking for the length of the array - 1 and return 0 at the end
    //if the numbers at the same index are not equal, 2 and 18
      //return 1 if the number in this array is larger, -1 otherwise return -1
  //
*/

function valid(v1, v2) {
  return /^[0-9]+(\.[0-9]+)*$/.test(v1) || /^[0-9]+(\.[0-9]+)$/.test(v2);
}

function compareVersions(version1, version2) {
  if (!valid(version1, version2)) return null;
  let v1 = version1.split('.').map(char => Number(char));
  let v2 = version2.split('.').map(char => Number(char));
  for (let place = 0; place < v1.length; place++) {
    if (v1[place] > v2[place]) {
      return 1;
    } else if (v1[place] < v2[place]) {
      return -1;
    } else if (v1[place] === v2[place] &&
      place === v1.length - 1 &&
      v2.slice(place).every(char => char === 0)) {
      return 0;
    }
  }
  if (version2.length > version1.length) return -1;
  return 0;
}

console.log(compareVersions('1.2.0.0', '1.18.2'));
console.log(compareVersions('1.0', '1.0.5'));
console.log(compareVersions('1.0.0', '1.1'));

console.log(compareVersions('1', '1'));            // 0
console.log(compareVersions('1.1', '1.0'));        // 1
console.log(compareVersions('2.3.4', '2.3.5'));    // -1
console.log(compareVersions('1.a', '1'));          // null
console.log(compareVersions('.1', '1'));           // null
console.log(compareVersions('1.', '2'));           // null
console.log(compareVersions('1..0', '2.0'));       // null
console.log(compareVersions('1.0', '1.0.0'));      // 0
console.log(compareVersions('1.0.0', '1.1'));      // -1
console.log(compareVersions('1.0', '1.0.5'));      // -1

