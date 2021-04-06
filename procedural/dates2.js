const today = new Date();
let daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

console.log("Today is " + daysOfWeek[today.getDay()] + ' ' + months[today.getMonth()] + " the " + today.getDate() + ', ' + today.getFullYear());

let tomorrow = new Date(today.getTime());
console.log(tomorrow)
tomorrow.setDate(today.getDate() + 1)
console.log(tomorrow)


