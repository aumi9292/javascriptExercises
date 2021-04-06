let heading = document.body.children[1];
let main = document.body.firstElementChild;
let title = document.querySelector('main h1');
let navbar = document.querySelector('nav');

document.body.insertBefore(heading, main);
heading.insertBefore(title, navbar);

let [baby, chinStick] = document.querySelectorAll('img');

let [fig1, fig2] = document.querySelectorAll('figure');

let fig2Caption = document.querySelectorAll('figcaption')[1];

fig1.insertBefore(chinStick, baby);
fig2.insertBefore(baby, fig2Caption);

let article = document.querySelector('article');

article.appendChild(fig1);
article.appendChild(fig2);