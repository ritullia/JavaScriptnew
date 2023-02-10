console.log('veikia')

//https://stackoverflow.com/questions/11508463/javascript-set-object-key-by-variable

let url = 'https://httpdump.app/dumps/5a83f64a-5ea9-433b-8aba-ee360d1d1cea'


// 1. Paspaudziam ant mygtuko paleidziam formos funkcija.

async function formSubmit(event) {

    event.preventDefault()
   

    // sukuriu kintamaji inputu grupei paimti. 
    let infoCards = document.querySelectorAll('.infos')

    console.log(infoCards)

    //  naujas div kur imesim sukurta info
    let newDiv = document.getElementById('card-wrapper');
    let seconDiv = document.createElement('div')
    seconDiv.innerHTML = '';

    // susikuriu tuscia masyva kuris bus panaudotas objekto kurimui for loop vuduje

    let cardArr = [];


    // infocrads inputu for loop (gauta sarasa isimetam i for loop arba i forEach) 
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
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(cardArr),
        }).then(function (response) {
            return response.json()
        }).catch(error => console.error('Error:', error));
    }

    let name = document.createElement('h3')
    name.textContent = 'Name:'
    let city = document.createElement('h3')
    city.textContent = 'City:'
    let brand = document.createElement('h3')
    brand.textContent = 'Brand:'
    let model = document.createElement('h3')
    model.textContent = 'Model:'

    seconDiv.append(name, city, brand, model)
    console.log(seconDiv)
    

    console.log(cardArr)
    newDiv.append(seconDiv)
    
}

// formos paleidimas, turi buti submit formoai paleisti
let btn = document.querySelector('#my-form');
btn.addEventListener('submit', formSubmit)