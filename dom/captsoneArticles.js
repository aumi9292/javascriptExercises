// JS code used at https://launchschool.com/videos, DOM searching
// let articles = [...document.querySelector('div #main-content').querySelectorAll('article')]
// let capstoneArticleNodes = articles.filter(article => /Capstone (presentation)|(Project Presentation)/.test(article.getAttribute('data-content')))
// let capstoneArticles = capstoneArticleNodes.map(article => article.textContent);

let fs = require('fs');
let capstoneArticles = '';

try {
  let data = fs.readFileSync('./launchschool.com-1614146483523.log', 'utf8');
  capstoneArticles += data;
} catch(e) {
  console.log('Error:', e.stack);
}

// console.log(capstoneArticles);

let capstoneWordCounts = {};
const fillers = ['a', 'to', 'and', 'the', 'of', 'is', 'that', 'by', 'for', 'an', 'your', 'can', 'as', 'it', 'their', 'with', 'on', 'it', 'so', 'you', 'are', 'about', 'be', 'has', 'it\'s', '↵', 'jan', 'apr'];

let words = capstoneArticles.toLowerCase().split(/\s+/);
words.forEach(word => {
  capstoneWordCounts[word] = (capstoneWordCounts[word] || 0) + 1;
});

let sortedCountsTemp = Object.entries(capstoneWordCounts).sort((a, b) => {
  return b[1] - a[1];
});

sortedCountsTemp = sortedCountsTemp.filter(pair => {
  return !fillers.includes(pair[0]) && pair[1] >= 4;
});

let sortedCounts = Object.fromEntries(sortedCountsTemp);

console.log(sortedCounts);
