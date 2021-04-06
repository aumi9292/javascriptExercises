let test1 = "'hello,' she said. \"hey,\" he said back. 'What about me??' the little thing said.";

console.log(test1.match(/(['"]).+?\1/g));

let text = 'We read "War of the Worlds".';
console.log(text.replace(/(['"]).+\1/, '$1The Time Machine$1'));
// outputs: We read "The Time Machine".

