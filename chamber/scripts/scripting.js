function toggleMenu() {
  document.getElementById("primaryNav").classList.toggle("open");
  document.getElementById("hamburgerBtn").classList.toggle("open");
}
const x = document.getElementById("hamburgerBtn");
x.onclick = toggleMenu;


// Header date manipulation
const datefield = document.querySelector(".date");
const now = new Date();
const meetday = now.getDay();
//const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(now);
//datefield.innerHTML = `<em>${fulldate}</em>`;
const fulldateUK = new Intl.DateTimeFormat("en-UK", {	dateStyle: "full" }).format(now);
datefield.innerHTML = `<em>${fulldateUK}</em>`;

var banner = document.querySelector(".banner");
if (meetday == 1 || meetday == 2) { 
    banner.style.display = 'block';
    banner.innerHTML = `<p>🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.</p>`;
} else {
  banner.style.display = 'none';
}


let date = new Date();
let year = date.getFullYear();
document.getElementById('currentyear').innerHTML = year;
document.getElementById('lastupdated').textContent = `Last Updated: ${document.lastModified}`;
