let request = new XMLHttpRequest();
request.open('GET', 'http://localhost:8080/api/schedules');
request.responseType = 'json';
request.addEventListener('error', event => {
  console.log(request.origin);
  console.log('loaded');
});

request.addEventListener('loadend', () => {
  console.log('still works')
})
request.send();