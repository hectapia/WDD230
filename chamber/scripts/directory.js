
// Script to directory page

const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");

async function getBusinessData() {
    const response = await fetch('data.json');
    const data = await response.json();
    console.table(data.businesses);  // note that we reference the prophet array of the data object given the structure of the json file
    displayBusinesses(data.businesses)
  }
  
getBusinessData();

const displayBusinesses = (businesses) => {
const cards = document.querySelector('article'); // select the output container element

businesses.forEach((business) => {
	// Create elements to add to the article element
	let card = document.createElement('section');
	let image = document.createElement('img');
	let h3 = document.createElement('h3');
	let p1 = document.createElement('p');
	let p2 = document.createElement('p');
	let a = document.createElement('a');

	// Build the image content
	image.src = business.imgfile;
	image.setAttribute('alt', business.name);
	card.appendChild(image);

	// Build the h3 content to show the business.name
	h3.textContent = business.name;
	card.appendChild(h3);

	// Build the p content to show the business.address
	p1.textContent = business.address;
	card.appendChild(p1);

	// Build the p content to show the business.phone
	p2.textContent = business.phone;
	card.appendChild(p2);

	// Build the a content to show the business.phone
	a.textContent = business.name;
	a.setAttribute('href',business.website)
	a.setAttribute('target','_blank')
	card.appendChild(a);

	cards.appendChild(card);
}) // end of forEach loop
} // end of function expression

listbutton.addEventListener("click", ()=> {
    display.classList.replace("grid", "list")
});

gridbutton.addEventListener("click", ()=> {
    display.classList.replace("list", "grid")
});
