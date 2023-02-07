console.log('veikia')

const ENDPOINT = "https://robust-safe-crafter.glitch.me/"

// {
//     image: string,
//     city: string,
//     price: number,
//     description: string
// }

let data;
let filterArr = [];

fetch(ENDPOINT)
    .then(response => response.json())
    .then(result => {
        console.log(result)
        data = result; //susigrazinam kintamaji
        drawCards(data) // paleidziame funkcija i fetch duomen pasiemimui
    })
    .catch((error) => console.error(error));



function drawCards(dataArr) {
    document.getElementById('property-wrapper').innerHTML = '';

    let buttonArr = []
    dataArr.forEach((data) => {
        if(!buttonArr.includes(data.city)){
            buttonArr.push(data.city)
        }
        let cardWrapper = document.createElement('div');


        let imageWrapper = document.createElement('div');
        imageWrapper.classList.add('image-wrapper')

        let image = document.createElement('img');
        image.src = data.image

        imageWrapper.append(image)

        let descriptionWrapper = document.createElement('div');
        descriptionWrapper.classList.add('description-wrapper');

        let price = document.createElement('h3');
        price.textContent = data.price;

        let city = document.createElement('p');
        city.textContent = data.city;

        let description = document.createElement('p');
        description.textContent = data.description;

        descriptionWrapper.append(price, city, description)

        cardWrapper.append(imageWrapper, descriptionWrapper)

        document.getElementById('property-wrapper').append(cardWrapper)

    })

    buttonArr.forEach((buttonName)=> {
        let button = document.createElement('button')
        button.textContent = buttonName;

        document.getElementById('filter-controls').append(button)

    })
}

document.querySelectorAll('#filter-controls > button').forEach // myggtukas filtrui
    ((button) =>
        button.addEventListener('click', () => {

            if (button.classList.contains('active-button')) { //pasidarom mygtuka aktyvus
                button.classList.remove('active-button')
                button.classList.add('inactive-button')
                filterArr = filterArr.filter((filter)=>{
                    return filter !== button.textContent
                })
            } else {
                button.classList.remove('inactive-button')
                button.classList.add('active-button')
                filterArr.push(button.textContent)
            }

            let dataArr = filterData(filterArr);
            drawCards(dataArr)

        }))

function filterData(filterArr) {

    if(filterArr.length > 0){

        let dataArr = data.filter((element) => {
            return filterArr.find((city) => {
                return city == element.city
            })
        })
    
        console.log(dataArr)
        return dataArr
    } else {
        return data
    }

}



