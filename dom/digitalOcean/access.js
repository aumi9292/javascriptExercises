let idEl = document.getElementById('demo');
idEl.style.border = '1px solid purple';
console.log(idEl);

let demoClasses = document.getElementsByClassName('demo');

[...demoClasses].forEach(el => el.style.border = '1px solid red')

let demoTags = document.getElementsByTagName('article');

[...demoTags].forEach(el => el.innerHTML += ' This is a selected article');