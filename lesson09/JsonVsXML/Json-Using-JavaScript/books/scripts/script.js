async function populate() {

    const requestURL = 'json/books.json';
    const request = new Request(requestURL);

    const response = await fetch(request);
    const library = await response.json();

    populateHeroes(library);

  }

  function populateHeroes(obj) {
    const rows = document.querySelector('tbody');
    const books = obj.catalog;

    for (const book of books) {
      const row = document.createElement('tr');
      const td1 = document.createElement('td');
      const td2 = document.createElement('td');
      const td3 = document.createElement('td');
      const td4 = document.createElement('td');


      td1.textContent = book.author;
      td2.textContent = book.title ;
      td3.textContent = book.price;
      td4.textContent = book.description;


      row.appendChild(td1);
      row.appendChild(td2);
      row.appendChild(td3);
      row.appendChild(td4);
      rows.appendChild(row);
    }
  }

  populate();
