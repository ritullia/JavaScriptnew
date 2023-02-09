console.log('veikia')

let url = 'https://httpdump.app/dumps/3444c85b-2476-4ca1-a7dd-3c142e992349'

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

    // sukuriu kintamaji inputu grupei paimti. 
    let infoCards = document.querySelectorAll('.infos')

    console.log(infoCards)

    //  naujas div kur imesim sukurta info
    let newDiv = document.getElementById('main-container');
    let seconDiv = document.createElement('div')
    seconDiv.innerHTML = '';

    // susikuriu tuscia objekta kuris bus panaudotas objekto kurimui for loop vuduje

    let cardObj = {};
    let cardArr = [];


    // infocrads inputu for loop
    for (let i = 0; i < infoCards.length; i++) {
        console.log(infoCards[i])

        // kintamasis inputams infos inputuose pasiekti
        let personInfo = document.querySelectorAll('.info');


        // console.log(personInfo)

        // pasiimam piurmus inputus pagal id
        let person = document.getElementById('random')
        let city = document.getElementById('random2')

        //pasinaudojam gauti savo data-type atributus

        const type = person.getAttribute('data-type')
        const val = city.getAttribute('data-type')

        console.log(type, val)

        cardObj = {

        }


        // console.log(cardObj)
        cardArr.push(cardObj)

        let p = document.createElement('p');
        p.textContent = cardArr
        seconDiv.appendChild(p)
        // newDiv.append(newObj)

        // 4. Issiunciam i serveri info objekto
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(cardArr),
        }).then(function (response) {
            return response.json()
        }).catch(error => console.error('Error:', error));


    }


    newDiv.append(JSON.stringify(cardArr))
}








let btn = document.querySelector('#btn');
btn.addEventListener('click', clickButton)