let str = "Mr. Miller: hello jacob my phone number is 720-292-7829 and my name is austin miller, I'm a doctor?";

let lastNameMatcher = /miller/gi;

console.log(lastNameMatcher.test(str));
console.log(str.match(lastNameMatcher));

console.log(str.match(/\?/gi));
console.log(str.search(/\./g));

let longer = "cat, catalog, copycat, scatter, the lazy cat, CAT, cast -d-d-292";

console.log(longer.match(/-\d{3}/g));
console.log(str.match(/\d{3}-\d{3}-\d{4}/g));
console.log(str.match(/Miller|jacob/g));

let complex = "1, 3:5, 6-10";

console.log(complex.match(/(.:.|.-.)/g));