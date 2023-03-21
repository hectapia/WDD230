// Header date manipulation
const dateField = document.querySelector(".date");
const now = new Date();
const numberDay = now.getDay();
const fulldateUK = new Intl.DateTimeFormat("en-UK", {	dateStyle: "full" }).format(now);
dateField.innerHTML = `<em>${fulldateUK}</em>`;

// A banner between days in the header
var banner = document.querySelector(".banner");
if (numberDay == 1 || numberDay == 2) { 
    banner.style.display = 'block';
    banner.innerHTML = `<p>🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.</p>`;
} else {
  banner.style.display = 'none';
}


// Toggling between primary navigation and hamburger menu navigation
function toggleMenu() {
  document.getElementById("primaryNav").classList.toggle("open");
  document.getElementById("hamburgerBtn").classList.toggle("open");
}
const x = document.getElementById("hamburgerBtn");
x.onclick = toggleMenu;


// Join page: Value of hidden input
const lastFormSubmit = document.getElementById('lastFormSubmit');
if (lastFormSubmit) lastFormSubmit.value = new Date();

// Last Updated
let date = new Date();
let year = date.getFullYear();
document.getElementById('currentyear').innerHTML = year;
document.getElementById('lastupdated').textContent = `Last Updated: ${document.lastModified}`;


// notes:

// Header date manipulation variation: Intl.DateTimeFormat
//const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(now);
//dateField.innerHTML = `<em>${fulldate}</em>`;