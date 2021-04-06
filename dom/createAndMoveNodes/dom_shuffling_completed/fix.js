let main = document.querySelector('main');
let h1 = document.querySelector('main h1');
let header = document.querySelector('header');
let nav = document.querySelector('nav');

let imgs = [...document.querySelectorAll('#content figure img')];
let [fig1Parent, fig2Parent] = [...document.querySelectorAll('main #content figure')];
let babyClone = imgs[0].cloneNode(false);
let womanClone = imgs[1].cloneNode(false);
let headersToMove = [...document.body.querySelector('header').children];
console.log(headersToMove);

let article = document.querySelector('main #content article');
article.insertBefore(document.createElement('header'), article.firstElementChild);

headersToMove.reverse().forEach(headerEl => article.querySelector('header').appendChild(headerEl))




document.body.insertBefore(header, main);

header.insertBefore(h1, document.querySelector('header h1'));

document.querySelector('header h1').insertAdjacentElement("afterend", nav);
//article.insertBefore(article.querySelector('article'))

// let firstNode = document.querySelector('article figure');
// let fig2 = firstNode.nextElementSibling;
// let fig2caption = document.querySelectorAll('#content fig')

// fig2.insertBefore(fig2, babyClone);
// document.querySelector('footer').previousElementSibling.remove();
fig1Parent.appendChild(womanClone);
fig2Parent.appendChild(babyClone);
fig1Parent.replaceChild(womanClone, fig1Parent.firstElementChild);
fig2Parent.replaceChild(babyClone, fig2Parent.firstElementChild);
// fig2Parent.replaceChild(fig2Parent.firstElementChild, babyClone);