// let numerator = 10; 

// const DENOMINATOR = 2; 

// let answer = numerator / DENOMINATOR; 

// console.log(answer)

// let incrementor = 1; 

// let start = incrementor; 

// let end; 

// let difference; 

// incrementor += 1; 
// incrementor += 1; 
// incrementor += 1; 

// console.log(incrementor)

// incrementor++
// incrementor++

// console.log(incrementor)

// end = incrementor; 

// console.log(end)

// difference = end - start
// console.log(difference)

// let answer2 = (11 + 31) * 3; 
// console.log(answer2)

// let x = '13';
// let y = 9;

// console.log(parseInt(x, 10) + y);
// console.log(x * y);

// let npa = 212;
// let nxx = 555;
// let num = 1212;

// console.log(String(npa) + String(nxx) + String(num));

// let bool = true;
// let arr = [1, 2, 3];

// console.log(bool.toString()); 
// console.log(arr.toString());

// switch (npa) {
//   case 100: 
//     console.log("It's 100!"); 
//     break; 
//   case 212: 
//     console.log("It's 212!"); 
//     break; 
//   case 300: 
//     console.log("I forgot to add break!"); 
// }

// let apples = 3; 
// let bananas = 1; 
// let areEqual = apples === bananas
// let eitherOr = bananas || apples
// console.log(eitherOr)
// console.log(areEqual)

// if (apples === bananas) {
//   console.log("No way!") 
// } else {
//   if (apples == bananas) {
//     console.log("Same number, diff types")
//   } else {
//     console.log("Not strcitly eqqual")
//   }

//   console.log("This makes more sense")
// }

// let lastName = "Miler"
// let familyMessage = lastName === "Miller" ? "Weclome home!" : "Who are you?"
// console.log(familyMessage)

// let counter = 0; 
// let limit = 10; 
// while (counter < 10) {
//   console.log(counter);
//   counter += 2;
// }

// const rlSync = require('readline-sync');
// let first = Number(rlSync.question("Enter the first number:\n"))
// const second = Number(rlSync.question("Enter the second number:\n"))
// console.log(first + second)
// console.log(first - second)
// console.log(first * second)
// console.log(first / second)
// console.log(first % second)
// console.log(first ** second)

// let phrase = rlSync.question("Please enter a phrase: ")
// console.log(`There are ${phrase.length} characters in "${phrase}"`)

// console.log(`There are ${phrase.replaceAll(' ', '').length} non-space characters in "${phrase}"`)

for (let index = 0; ; index += 1) {
  console.log(index);
  if (index <= 10) {
    break;
  }
}

for (let index = 0; index <= 10; index += 1) {
  console.log(index);
}