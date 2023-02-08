console.log('veikia')

let url = 'https://httpdump.app/dumps/914575c1-af2a-4e83-bc36-c575c00d8a97'

// fetch('url')
//   .then(response => {
//     //handle response            
//     console.log(response);
//   })
//   .then(data => {
//     //handle data
//     console.log(data);
//   })
//   .catch(error => {
//     //handle error
//   });

// 1. Paspaudziam ant mygtuko paleidziam funkcija.

async function clickButton() {
    // let myTxt = document.getElementById('firstName')
    // let myProf = document.getElementById('profession')

    // 2. Modifikuoju issiunciamus duomenis
    // let newTxt = myTxt.value
    // let newProf = myProf.value;
    // console.log(newTxt, newProf)

    // 3. Susikuriam objekta kuris bus siunciamas fetch

    let personInfo = document.querySelectorAll('.info')

    console.log(personInfo)
    let newDiv = document.getElementById('main-container');
    let seconDiv = document.createElement('div')
    seconDiv.innerHTML = '';

    let myObj = {};

    
    personInfo.forEach(e => {
        
        const person = e.value
        const data = e.dataset.type
        console.log(data, person)
  
    })

  


    for (let i = 0; i < personInfo.length; i++) {
        console.log(personInfo[i].getAttribute('data-type'))

        let type =  personInfo[0].dataset.type
        let person = personInfo[1].dataset.type

        myObj = {
            name: type,
            city: person
            
        }

        console.log(myObj.name)
    
        let p = document.createElement('p');
        p.textContent = myObj
        seconDiv.appendChild(p)
    }

    newDiv.append(JSON.stringify( myObj))


    // 4. Issiunciam i serveri info objekto
    fetch(url, {
        method: 'POST',
        body: JSON.stringify(myObj),
    }).then(function (response) {
        return response.json()
    }).catch(error => console.error('Error:', error));

    newDiv.append(JSON.stringify(myObj))


}

let btn = document.querySelector('#btn');
btn.addEventListener('click', clickButton)