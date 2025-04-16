let date = new Date();
let timer = document.getElementById("timestampParagraph");

timer.innerText = date.toLocaleDateString();

localStorage.setItem("testString", "25");

console.log(localStorage.getItem("testString"));
