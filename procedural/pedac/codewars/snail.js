// let snail = function(array) {
//   if (array.length <= 1) return array[0];
//   let snailPattern = [];
//   let level = 0;
//   let lowerLimit = 0;
//   let upperLimit = array.length
//   for (let slimeSpot = 0; lowerLimit !== upperLimit;) {
//     if (slimeSpot < upperLimit) {
//       for (; slimeSpot < upperLimit; slimeSpot++ ) {
//         snailPattern.push(array[level][slimeSpot])
//     }
//   }
//     if (slimeSpot === upperLimit - 1) {
//       upperLimit -= 1
//       for (; level < upperLimit; level++ ) {
//       snailPattern.push(array[level][slimeSpot])
//       console.log(snailPattern, level, slimeSpot)
//       }
      
//       if (level === upperLimit - 1) {
        
//         for (; slimeSpot > lowerLimit; slimeSpot--) {
//           console.log(level, slimeSpot, snailPattern)
//           snailPattern.push(array[level][slimeSpot])
          
//         }
//         //upperLimit -= 1
//       }
      
//       if (slimeSpot === lowerLimit) {
//         for (; level > lowerLimit; level--) {
//           snailPattern.push(array[level][slimeSpot])
//                               console.log(snailPattern)
//         }
//         lowerLimit += 1;
//       }
      
    
    

//     }
//   }
  
//   return snailPattern;
  
// }

console.log(snail([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));