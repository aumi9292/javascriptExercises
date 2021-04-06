'use strict';
//return the degrees as degrees
//multiply the decimal by 60, that integer is the minutes
//if there is a decimal in that calculation, multiply it by 60 
//dms(76.73);        // 76°43'48"

function format(num) {
  return String(num).length === 1 ? '0' + num : num;
}

function handleNonsensicalDegrees(degs) {
  const CIRCLE = 360;
  const remainderMath = function(degrees) {
    return (CIRCLE + (degrees % CIRCLE)) % CIRCLE;
  };

  return degs < 0 || degs > CIRCLE ? remainderMath(degs) : degs;
}

function dms(degrees) {
  const MINS_SECS = 60;
  const DEG = "\u00B0";

  degrees = handleNonsensicalDegrees(degrees);

  let degs = Math.floor(degrees);
  let baseConvert = (degrees - degs) * MINS_SECS;
  let mins = Math.floor(baseConvert);
  let secs = Math.floor(((baseConvert) - mins) * MINS_SECS);

  [degs, mins, secs] = [format(degs), format(mins), format(secs)];

  return `${degs}${DEG}${mins}'${secs}"`;
}

console.log(dms(76.73))
console.log(dms(30));           // 30°00'00"
console.log(dms(76.73));        // 76°43'48"
console.log(dms(254.6));        // 254°35'59"
console.log(dms(93.034773));    // 93°02'05"
console.log(dms(0));            // 0°00'00"
console.log(dms(360));          // 360°00'00" or 0°00'00"
console.log(dms(400));          // 360°00'00" or 0°00'00"