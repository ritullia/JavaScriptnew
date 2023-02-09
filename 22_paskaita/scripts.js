console.log('veikia')

//https://stackoverflow.com/questions/11508463/javascript-set-object-key-by-variable

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

async function formSubmit(event) {

    event.preventDefault()
   

    // sukuriu kintamaji inputu grupei paimti. 
    let infoCards = document.querySelectorAll('.infos')

    console.log(infoCards)

    //  naujas div kur imesim sukurta info
    let newDiv = document.getElementById('main-container');
    let seconDiv = document.createElement('div')
    seconDiv.innerHTML = '';

    // susikuriu tuscia masyva kuris bus panaudotas objekto kurimui for loop vuduje

    let cardArr = [];


    // infocrads inputu for loop
    for (let i = 0; i < infoCards.length; i++) {
        // console.log(infoCards[i].querySelectorAll('.info'))

        let cardInp = infoCards[i].querySelectorAll('input');
        // console.log('Prasideda korteles inputai')

        let cardObj = {};

        cardInp.forEach(input => {
            // console.log(input)
            const typeInp = input.getAttribute('name')
            const valInp = input.value

            // console.log(typeInp, valInp)


            cardObj[typeInp] = valInp;
        
        })

        cardArr.push(cardObj);


        // 4. Issiunciam i serveri info objekto
        // fetch(url, {
        //     method: 'POST',
        //     body: JSON.stringify(cardArr),
        // }).then(function (response) {
        //     return response.json()
        // }).catch(error => console.error('Error:', error));
    }
    console.log(cardArr)

    newDiv.append(JSON.stringify(cardArr))
}



let btn = document.querySelector('#my-form');
btn.addEventListener('submit', formSubmit)