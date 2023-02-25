
    // https://hectapia.github.io/wdd230/superheroes.xml
    let xmlContent = '';
    let headerInfo = document.getElementById('heroInfo');
    let sectionInfo = document.getElementById('members');
    fetch('xml/superheroes.xml').then((response)=> {
        response.text().then((xml)=>{
            xmlContent = xml;

            let parser = new DOMParser();
            let xmlDOM = parser.parseFromString(xmlContent, 'application/xml');
            let squadInfo = xmlDOM.querySelectorAll('heroSquadInfo');
            let members = xmlDOM.querySelectorAll('member');
            let superPowers = xmlDOM.querySelectorAll('powers');

            populateHeader(squadInfo);
            //populateHeroes(members);
      
            function populateHeader(obj) {
                const header = document.querySelector('header');
                const myH1 = document.createElement('h1');
                myH1.textContent = obj.squadName;
                header.appendChild(myH1);
          
                const myPara = document.createElement('p');
                myPara.textContent = `Hometown: ${obj.homeTown} // Formed: ${obj.formed}`;
                header.appendChild(myPara);
              }
        })
    }) 