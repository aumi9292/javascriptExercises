let count = [1, 2, 3, 4, 5];
let doubled = count.map((el, idx, arr) => {
  return {doubled: el * 2, index: idx, arr: arr};
});

console.log(doubled);


function myMap(array, func) {
  let mapped = [];
  array.forEach((el, idx, arr) => {
    mapped.push(func(el));
  });
  return mapped;
}

let plusOne = n => n + 1;
let try1 = myMap([1, 2, 3, 4], plusOne);       // [ 2, 3, 4, 5 ]
console.log(try1);

function getBooksTitle(books) {
  return myMap(books, getTitle);
}

let books = [
  {
    title: 'JavaScript and JQuery: Interactive Front-End Web Development',
    author: 'Jon Ducket',
    edition: '1st',
  },
  {
    title: 'Eloquent JavaScript: A Modern Introduction to Programming',
    author: 'Haverbeke',
    edition: '2nd',
  },
  {
    title: "Learning Web Design: A Beginner's Guide to HTML, CSS, JavaScript, and Web Graphics",
    author: 'Jennifer Niederst Robbins',
    edition: '4th',
  },
];

function getTitle(book) {
  return book['title'];
}

console.log(getBooksTitle(books));
  
[
  "JavaScript and JQuery: Interactive Front-End Web Development",
  "Eloquent JavaScript: A Modern Introduction to Programming",
  "Learning Web Design: A Beginner's Guide to HTML, CSS, JavaScript, and Web Graphics"
]