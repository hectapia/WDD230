
const ul = document.querySelector('ul');
//const input = document.querySelector('input');
const button = document.querySelector('button');

document.getElementById("favchap").focus();

button.addEventListener('click', () => {
    const item = document.getElementById("favchap").value;
    if (item != "") {

        document.getElementById("favchap").value = "";
        
        const li = document.createElement('li');
        const span = document.createElement('span');
        const deleteButton = document.createElement('button');

        deleteButton.textContent = '❌'
        li.textContent = item;
        ul.appendChild(li);
        li.appendChild(span);
        li.appendChild(deleteButton);
        deleteButton.setAttribute('aria-label','Remove chapter')
        document.getElementById("favchap").focus();

        deleteButton.addEventListener('click', () => {
            ul.removeChild(li);
            document.getElementById("favchap").focus();
        });
    };
});