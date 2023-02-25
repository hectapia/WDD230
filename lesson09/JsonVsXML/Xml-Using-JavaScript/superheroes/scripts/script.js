
    let xmlContent = '';
    let headerInfo = document.getElementById('heroInfo');
    let sectionInfo = document.getElementById('members');
    fetch('https://hectapia.github.io/wdd230/lesson09/JsonVsXML/xmlfiles/superheroes.xml').then((response)=> {
        response.text().then((xml)=>{
            xmlContent = xml;

            let parser = new DOMParser();
            let xmlDOM = parser.parseFromString(xmlContent, 'application/xml');
            let squadInfo = xmlDOM.querySelectorAll('heroSquadInfo');
            let members = xmlDOM.querySelectorAll('member');
            let superPowers = xmlDOM.querySelectorAll('powers');

            squadInfo.forEach(XmlNode => {   

                let h1 = document.createElement('h1');
                h1.innerText = XmlNode.children[0].innerHTML;
                headerInfo.appendChild(h1);

                let parag = document.createElement('p');
                parag.innerText = ` Hometown: ${XmlNode.children[1].innerHTML} - `;
                parag.innerText +=`Formed: ${XmlNode.children[2].innerHTML} - `;
                parag.innerText +=`Secret Base: ${XmlNode.children[3].innerHTML}`;
                headerInfo.appendChild(parag);

            })

            members.forEach(XmlNode => {   

                let articl= document.createElement('article');
                let h2= document.createElement('h2');
                h2.innerText = XmlNode.children[0].innerHTML;
                articl.appendChild(h2);

                let parag1 = document.createElement('p');
                let parag2 = document.createElement('p');
                let parag3 = document.createElement('p');
                let mylist = document.createElement('ul');

                parag1.innerText = `Secret identity: ${XmlNode.children[2].innerHTML}`;
                parag2.innerText = `Age: ${XmlNode.children[1].innerHTML}`;
                parag3.innerText = 'Superpowers:';

                 var item, listItem;
                 item = 0;
                 
                superPowers.forEach(XmlNodes => {                      
                    listItem  = document.createElement('li');
                    listItem.innerText = `${XmlNodes.children[item].innerHTML}`;
                    mylist.appendChild(listItem);
                    item += 1;
                });

                //for(var i=0;i<superPowers.length;i++)
                //{
                //    listItem  = document.createElement('li');
                //    listItem.innerText=`${superPowers.children[i].innerHTML}`;
                //    mylist.appendChild(listItem);
                //}

                articl.appendChild(parag1);
                articl.appendChild(parag2);
                articl.appendChild(parag3);
                articl.appendChild(mylist);

                sectionInfo.appendChild(articl);

            })

        })
    })                   