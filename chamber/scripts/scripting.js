function toggleMenu() {
  document.getElementById("primaryNav").classList.toggle("open");
  document.getElementById("hamburgerBtn").classList.toggle("open");
}
const x = document.getElementById("hamburgerBtn");
x.onclick = toggleMenu;


// select the elements to manipulate (output to)
//const datefield = document.querySelector(".date");
//const datefieldUK = document.querySelector("aside"); // for european/family history format with day first.

// derive the current date using a date object
//const now = new Date();
//const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
//	now);
//const fulldateUK = new Intl.DateTimeFormat("en-UK", {
//	dateStyle: "full" }).format(now);
// long, medium, short options ... try them



datefield.innerHTML = `<em>${fulldateUK}</em>`;
//datefieldUK.innerHTML = `<em>${fulldateUK}</em>`;


// Header date manipulation
const datefield = document.querySelector(".date");
const now = new Date();
const meetday = now.getDay();
//const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(now);
//datefield.innerHTML = `<em>${fulldate}</em>`;
const fulldateUK = new Intl.DateTimeFormat("en-UK", {	dateStyle: "full" }).format(now);
datefield.innerHTML = `<em>${fulldateUK}</em>`;
  
if (meetday == 6) { 
    chambermeet.innerHTML = `<p>🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.</p>`;
}


let date = new Date();
let year = date.getFullYear();
document.getElementById('currentyear').innerHTML = year;
document.getElementById('lastupdated').textContent = `Last Updated: ${document.lastModified}`;
