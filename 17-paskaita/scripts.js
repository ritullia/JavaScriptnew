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

            let card = document.querySelector('#card')
            let img = document.createElement('img');
            img.style.width = '320px'
            img.style.height = 'auto'
            img.style.backgroundColor = 'grey'
            img.style.objectFit = 'contain'
            
            img.src = this.image

            card.prepend(img)
            console.log(img)

            let divSecond = document.querySelector('.card-body')
            console.log(divSecond)

            let brandTx = document.querySelector('.carText1')
            
            let brandh2 = document.createElement("p")
            brandh2.textContent = this.brand
            brandTx.appendChild(brandh2)

            let modelTx = document.querySelector('.carText2')

            let modelh2 = document.createElement("p")
            modelh2.textContent = this.model
            modelTx.appendChild(modelh2)

            let mileTx = document.querySelector('.carText3')

            let mileageh2 = document.createElement("p")
            mileageh2.textContent = this.mileage
            mileTx.appendChild(mileageh2)

            let priceTx = document.querySelector('.carText4')

            let priceh2 = document.createElement("p")
            priceh2.textContent = this.price
            priceTx.appendChild(priceh2)

            
            card.append(divSecond)
         

          document.querySelector('#card').append(card)

           card.addEventListener('click', () => {
            alert(`Price is ${this.price}`)})
    }



}

function createCarObject(event) {
    event.preventDefault()

    const carInfoData = document.querySelectorAll('.data')
    console.log(carInfoData[1].value)
    

    if (carInfoData.length > 0) {

        const carData = {}
        const carDataList = []

        

        let brand = ''
        let model = "";
        let mileage = "";
        let price = "";
        let image = "";

        console.log(brand)


        // console.log(carInfoData.value)


        for (let i = 0; i < carInfoData.length; i++) {

            let data = carData[carInfoData[i].getAttribute('name')] = carInfoData[i].value;

            // carDataList.push({[carData[carInfoData[i].getAttribute('name')]]:carInfoData[i].value})

            if (carDataList == '') {
                brand += ' ' + carInfoData[0].value
                model += ' ' + carInfoData[1].value
                mileage += ' ' + carInfoData[2].value
                price += ' ' +  carInfoData[3].value
                image += ' ' +  carInfoData[4].value

            } else {
                console.log(`Nepavyko kazkas`)
            }

           console.log(data)

        }

        console.log(carInfoData)
    
        const car = new Car(brand, model, mileage, price, image)
        console.log(car)
        car.addToCard()

      

    } else {

        alert(`Nesupildete duomenu`)
    }

}

document
    .querySelector('#car-form > button')
    .addEventListener("click", createCarObject)




