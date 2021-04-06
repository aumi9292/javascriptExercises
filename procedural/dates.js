let today = new Date(); 
console.log(today)



function dateSuffix(date) {
  let ending = ''
  strDate = String(date)
  switch (strDate) {
    case '11':
    case '12': 
    case '13':
      ending += 'th';
      if (ending) return ending; 
  }

    switch (strDate[strDate.length - 1]) {
      case '1': 
        ending += 'st'
        break; 
      case '2': 
        ending += 'nd'
        break; 
      case '3': 
        ending += 'rd'; 
        break; 
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
      case '0':
        ending += 'th'
      break; 
  }
  return ending; 
}

function formDay(dt) {
  date = dt.getDate(); 
  return String(date) + dateSuffix(date); 
}

function dayOfWeek(today) {
  let daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  return daysOfWeek[today.getDay()]; 
}

function month(today) {
  let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return months[today.getMonth()]; 
}

function formattedDate(today) {
  let day = dayOfWeek(today)
  let mo = month(today)
  let date = formDay(today)
  console.log(`Today is ${day}, ${mo} ${date}`)
}

formattedDate(today)

console.log(today.getFullYear()); 
console.log(today.getYear()); 

console.log((new Date).getTime());  

let tomorrow = today; 
tomorrow.setDate(22)
console.log(tomorrow)

let nextWeek = new Date(today); 
console.log(today.toDateString() === nextWeek.toDateString())
nextWeek.setDate(nextWeek.getDate() + 7); 
console.log(nextWeek); 
console.log(today.toDateString() === nextWeek.toDateString())

function formatTime(date) {
  let hour = String(date.getHours()); 
  let minute = String(date.getMinutes());
  if (hour.length === 1) hour = '0' + hour; 
  if (minute.length === 1) minute = '0' + minute; 
  return `${hour}:${minute}`; 
}
console.log(today)
console.log(formatTime(today)); 
console.log(formatTime(new Date(`December 21, 1995, 03:01:00`))); 