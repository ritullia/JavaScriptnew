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
    let myTxt = document.getElementById('firstName')
    let myProf = document.getElementById('profession')
    // console.log(myTxt.value)

    // 2. Modifikuoju issiunciamus duomenis
    let newTxt = myTxt.value
    let newProf = myProf.value;
    // console.log(newTxt, newProf)

    // 3. Susikuriam objekta kuris bus siunciamas fetch

    // let objText = {
    //     name: '',
    //     profession: '',
    // };
    // objText.name = newTxt;
    // objText.profession = newProf;

    let personInfo = document.querySelector('.info').value
    let newDiv = document.getElementById('main-container');
    let seconDiv = document.createElement('div')
    seconDiv.innerHTML = '';


    let newObj = {};

    for (let i = 0; i < personInfo.length; i++) {

        newObj = {
            name: newTxt,
            profession: newProf
        }

        let p = document.createElement('p');
        p.textContent = newObj
        seconDiv.appendChild(p)

    }

    newDiv.append(JSON.stringify(newObj))


    // 4. Issiunciam i serveri info objekto
    fetch(url, {
        method: 'POST',
        body: JSON.stringify(newObj),
    }).then(function (response) {
        return response.json()
    }).catch(error => console.error('Error:', error));


}

let btn = document.querySelector('#btn');
btn.addEventListener('click', clickButton)