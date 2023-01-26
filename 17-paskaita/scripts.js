// Sukurkite HTML formą, kurioje vartotojas galės įrašyti (į input laukelius): car brand, model, mileage, price ir image (url laukelis). Per konstruktorių, sukuriams objektas ir jis atvaizduojamas po forma (CSS rašykite CSS'e) Paspaudus ant automobilio nuotraukos- turi alert išmesti kainą.

//1. Susikurti HTML formą su reikalingais input laukeliais

//2. Susikurti klasę Car

//3. Pasirašyti funkciją kuri sukurs objektą pagal klasę ir iškvies jo metodą (kuris pridės car kortelę į HTML su reikiamais duomenimis)

//  3.1. Iš pradžių susikurti funkciją, kuri išspausdins formoje įvestus duomenis į konsolę.

//  3.2. Papildyti/pakeisti funkciją taip, kad sukurtų car objektą ir iškviestų to objekto metodą.

//4. Car klasėje sukurti metodą, kuris pridėtų visus objekto duomenis į HMTL (sukurtų kortelę su duomenimis ir ją atvaizduotų puslapyje.)

let carObject = []

class Car {
    constructor(brand, model, mileage, price, image) {
        this.brand = brand;
        this.model = model;
        this.mileage = mileage;
        this.price = price;
        this.image = image
    }

    //  sukurti auto kortele u=pildzius forma
    // 

    addToCard() {
        // sukuriam kortelei div elementus prisidedam klases, ir ikeliam css stiliu
        let cardContainer = document.querySelector('#cardContainer')
        let card = document.createElement('div')
        card.setAttribute.className = 'card';
        // card.setAttribute('id', 'card'); // prisidedam id elementui
        card.classList.add('card');

        // susikuriam img elementa kortelei
        let imgCard = document.createElement('img');
        imgCard.setAttribute.className = 'card-img-top';
        imgCard.classList.add('card-img-top');
        imgCard.src = this.image

        card.appendChild(imgCard)
        console.log(card)

        // susikuriam papildoma div elementa kitiems duomenims
        let cardBody = document.createElement('div')
        cardBody.setAttribute.classList = 'card-body'
        cardBody.classList.add('card-body')

        card.appendChild(cardBody)

        // I cardBody elementa susikuriam teksto elementus

        let elmBrand = document.createElement('h5');
        elmBrand.setAttribute.className = 'card-title';
        elmBrand.classList.add('card-title');
        elmBrand.textContent = 'Brand:';

        let elmMod = document.createElement('h5');
        elmMod.setAttribute.className = 'card-title';
        elmMod.classList.add('card-title');
        elmMod.textContent = 'Model:';

        let elmMile = document.createElement('h5');
        elmMile.setAttribute.className = 'card-title';
        elmMile.classList.add('card-title');
        elmMile.textContent = 'Mileage:';

        let elmPrice = document.createElement('h5');
        elmPrice.setAttribute.className = 'card-title';
        elmPrice.classList.add('card-title');
        elmPrice.textContent = 'Price €:';


        card.append(elmBrand, elmMod, elmMile, elmPrice)



        document.querySelector('#cardContainer').prepend(card)

        imgCard.addEventListener('click', () => {
            alert(`Price is ${this.price} €`)
        })
    }

}

function createCarObject(event) {
    event.preventDefault()

    const carInfoData = document.querySelectorAll('.data')
    console.log(carInfoData[1].value)


    if (carInfoData.length > 0) {

        let brand = carInfoData[0].value;
        let model = carInfoData[1].value;
        let mileage = carInfoData[2].value;
        let price = carInfoData[3].value;
        let image = carInfoData[4].value;

        const car = new Car(brand, model, mileage, price, image)
        console.log(car)
        car.addToCard()



    } else {

        console.log('')
    }


}

document.querySelector('#car-form > button').addEventListener("click", createCarObject)