let str = "Let's move out a little further into the regex waters, knee-deep, by wading into character classes, which are patterns that let you specify a set of characters that you want to match. We'll stick to the simple character class information in this section; later, we'll explore some handy shortcut patterns you can use to specify some of the most commonly needed classes. Right now, though, understanding how to construct elementary classes yourself is paramount*.";

console.log(str.match(/[abc]/g));
console.log(str.match(/[a][sn]/g));
console.log(str.match(/[^a-by-z]/g))

let str2 = "Kitchen Kaboodle" +
  "Reds and blues" +
  "kitchen Servers";

console.log(str2.match(/[kKs]/g));

let str3 = "My cats, Butterscotch and Pudding, like to sleep on my cot with me, but they cut my sleep short with acrobatics when breakfast time rolls around. I need a robotic cat feeder.";

console.log(str3.match(/[cb][aou]t/gi));

let str4 = "0xDEADBEEF 1234.5678 Jamaica plow ahead";


let base20 = /[0-9a-j]/gi;

console.log(str4.match(base20));

let str5 = "0x1234 Too many XXXXXXXXXXxxxxxxXXXXXXXXXXXX to count. The quick brown fox jumps over the lazy dog THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG";

console.log(str5.match(/[a-wy-z]/gi).length);

let str6 = "0x1234abcd 1,000,000,000s and 1,000,000,000s. THE quick BROWN fox JUMPS over THE lazy DOG!";

console.log(str6.match(/[^a-z]/gi).length);

let challengeStr = "The regex /[^a-z]/i matches any character that is not a letter. Similarly, /[^0-9]/ matches any non-digit while /[^A-Z]/ matches any character that is not an uppercase letter. Beware: /[^+-<]/ is at best obscure, and may even be wrong.";

console.log(challengeStr.match(/\[\^[a-z0-9]-[a-z0-9]\]/gi));