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

    addToCard() {
        // sukuriam kortelei div elementus prisidedam klases, ir ikeliam css stiliu
        let cardContainer = document.querySelector('.container');
        let card = document.createElement('div');
        card.setAttribute.className = 'card';
        card.setAttribute('id', 'card'); // prisidedam id elementui
        card.classList.add('card');
        // susikuriam img elementa kortelei
        let imgCard = document.createElement('img');
        imgCard.setAttribute.className = 'card-img-top';
        imgCard.classList.add('card-img-top');
        imgCard.src = this.image
        card.appendChild(imgCard)
       
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
        let elmBrandName = document.createElement('p')
        elmBrandName.textContent = this.brand
        elmBrand.appendChild(elmBrandName);

        let elmMod = document.createElement('h5');
        elmMod.setAttribute.className = 'card-title';
        elmMod.classList.add('card-title');
        elmMod.textContent = 'Model:';
        let modName = document.createElement('p')
        modName.textContent = this.model;
        elmMod.appendChild(modName);

        let elmMile = document.createElement('h5');
        elmMile.setAttribute.className = 'card-title';
        elmMile.classList.add('card-title');
        elmMile.textContent = 'Mileage:';
        let mileAge = document.createElement('p');
        mileAge.classList.add('card-text')
        mileAge.textContent = this.mileage;
        elmMile.appendChild(mileAge)

        let elmPrice = document.createElement('h5');
        elmPrice.setAttribute.className = 'card-title';
        elmPrice.classList.add('card-title');
        elmPrice.textContent = 'Price €:';
        let carPrice = document.createElement('p');
        carPrice.textContent = this.price;
        elmPrice.appendChild(carPrice)

        console.log(card)


        card.append(imgCard, elmBrand, elmMod, elmMile, elmPrice)
        document.querySelector('.container').append(card)
        imgCard.addEventListener('click', () => {
            alert(`Price is ${this.price} €`)
        })
    }



}

function createCarObject(event) {
    event.preventDefault()

    const carInfoData = document.querySelectorAll('.data')
    console.log(carInfoData[1].value)


    if (carInfoData[1].value != '') {

        let brand = carInfoData[0].value;
        let model = carInfoData[1].value;
        let mileage = carInfoData[2].value;
        let price = carInfoData[3].value;
        let image = carInfoData[4].value;

        console.log(brand)

        console.log(carInfoData)

        const car = new Car(brand, model, mileage, price, image);
        console.log(car);
        car.addToCard();

    } else {
        alert(`Užpildykite reikalingą informaciją!`)
    }

}

document
    .querySelector('#car-form > button')
    .addEventListener("click", createCarObject)




