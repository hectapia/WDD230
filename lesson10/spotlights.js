// Script spotlights in home page
var counter = 1; lengthJson = 0; k = 0; uplim = 0;
var arrayKeys = []; indexArray = 0; sortArray = []; goodArray = [];


async function getBusinessData() {
    const response = await fetch("data.json");
    const data = await response.json();
    console.table(data.businesses);
    lengthJson = Object.keys( data.businesses ).length;
    console.log(lengthJson);

    uplim = lengthJson-6;
    

    for (var i=0; i<lengthJson-7; i++) {
      arrayKeys[i] = lengthJson - Math.floor(Math.random() * 10);
    };

    sortArray = arrayKeys.sort(function(a, b){return a - b});

    console.log(sortArray,' Total Array');
    
    for (var j=0; j<lengthJson-7; j++) { 
     if (sortArray[j+1] > sortArray[j]) {
      if (k < 2){
        goodArray[k] = sortArray[j];
        goodArray[k+1] = sortArray[j+1];
        k = k+1;
      }
     }
    };

    console.log(goodArray,' Reduced Array');

    displayBusinesses(data.businesses);  

    
};


getBusinessData();


const displayBusinesses = (businesses) => {
  const cards = document.querySelector('article'); // select the output container element
    
  businesses.forEach((business) => { 

      if (counter == goodArray[indexArray]) {   
          
          

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
          p1.textContent = `${counter} ${business.address}`;
          card.appendChild(p1);

          // Build the p content to show the business.phone
          p2.textContent = business.phone;
          card.appendChild(p2);

          // Build the a content to show the business.phone
          a.textContent = business.name;
          a.setAttribute('href',business.website)
          a.setAttribute('target','_blank')
          card.appendChild(a);

          card.setAttribute('class',`spot-${indexArray+1}`);
          cards.appendChild(card);
          console.log(counter,' Yes! ',indexArray);
          indexArray = indexArray+1;
        
      } else {
        console.log(counter,' No');
      };
      counter = counter+1;  
  }); 
} 


