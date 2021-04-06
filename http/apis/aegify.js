const URL = "https://api.agify.io";
let xhr = new XMLHttpRequest();
xhr.open("GET", URL + "?name=bella")
xhr.addEventListener("load", (event) => {
  console.log(xhr.response);
});

xhr.send();

