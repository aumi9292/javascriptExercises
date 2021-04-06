let str = "This text contains letters, numbers, punctuation, \
whitespace, and even newline characters. 99988222. \
Everything in it should match the /./ pattern."

console.log(str.match(/\w+/mg));

let str2 = "reds and blues \
the lazy cat sleeps";

console.log(str2.match(/\s...\s/g));

let str3 = "The big red box.";

console.log(str3.match(/\s...\s/g));

let str4 = "Hello 4567 bye CDEF - cdef\
0x1234 0x5678 0xABCD\
1F8A done"

console.log(str4.match(/\s[\dA-F][\dA-F][\dA-F][\dA-F]\s/ig));

let str5 = "The red d0g chases the b1ack cat.\
a_b c_d";

console.log(str5.match(/[a-z][a-z][a-z]/gi));