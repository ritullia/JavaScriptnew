// // Uzduotis

// //Susikurkite konstruktorių car, kuris priims brand, model, engine ir turės metodą 'turnOn' - kuris alertins 'vrooom'. Sukurkite du objektus ir patikrinkite ar veikia.


// // Pakoreguokite šį konstruktorių ir pridėkite papildomą property 'basePrice' ir metodą 'getPrice'. basePrice propertį įrašys sukuriant objektą, tačiau getPric priklausimai nuo variklio išmes kokia yra galutinė kaina. Jei variklis 'electric' - kaina bus +10,000; jei 'diesel' +5,000; jei 'petrol' - kaina tokia kokia ir basePrice.


// // Class syntax

// class Car {                                   // to create a new object with all the listed methods
//     constructor(brand, model, engine, basePrice){        // we can initialize the object there.
//         this.brand = brand;
//         this.model = model;
//         this.engine = engine;
//         this.basePrice = basePrice;
//     };

//     turnOn(){
//         alert(`Vroom vroom vroom ${this.brand} ${this.model} ${this.engine}`)
//     };

//     getPrice(){

//         if(this.engine === 'diesel'){
//            console.log( `${this.basePrice + 5000}`)
//         } else if(this.engine ==='electric'){
//            console.log( `${this.basePrice + 10000}`)
//         } else if(this.engine === 'petrol') {
//             console.log(`${this.basePrice}`)
//         } else {
//             console.log(`Unknoen car engine`)
//         };
//     }
// };

// const car = new Car('Toyota', 'RAV4', 'diesel', 15000); // sukuriamas naujas objektas 
// const car2 = new Car('Toyota', 'Corolla', 'hibryd', 20000);
// const car3 = new Car('BMV', 'X5', 'petrol', 16000);
// const car4 = new Car('Volvo', 'XC90', 'electric', 18500);

// // car.turnOn();  // iskvieciam susikurta metoda objektui
// // car2.turnOn() ;

// console.log(car)
// console.log(car.__proto__)

// // function syntax 

// function MyCar (brand, model, engine){
//     this.brand = brand;
//     this.model = model;
//     this.engine = engine;

//     this.turnOn = function(){
//         alert(`Vroom vroom vroom ${this.brand} ${this.model} ${this.engine}`); 
//     }
// }

// const newCar = new MyCar('Toyota', 'Avensis', 'diesel')

// // newCar.turnOn()

// // alert(`Vroom vroom vroom ${newCar.brand} ${newCar.model} ${newCar.engine}`); 
// console.log(newCar)
// console.log(newCar.__proto__)


// 2023.01.18

// let objectArr = []

// class Person {
//     constructor(name, surname) {
//         this.name = name;
//         this.surname = surname;
//         this.age = Math.floor(Math.random() * 100)
//     };

//     addToTable() {
//         let row = document.createElement("tr")

//         let nameTd = document.createElement('td')
//         nameTd.textContent = this.name

//         let surnameTd = document.createElement('td')
//         surnameTd.textContent = this.surname;

//         row.append(nameTd, surnameTd)

//         document.querySelector('#table > tbody').append(row)

//         row.addEventListener('click', () => {
//             alert(`Age is ${this.age}`)
//         });
//     }

// }


// function createPersonObject(event) {
//     event.preventDefault();


//     const nameSurname = document.querySelector('#forma > input').value
//    console.log(nameSurname.value);

//     if (nameSurname.trim().length > 0) {


//         const nameSurnameArr = nameSurname
//             .trim()
//             .split(/[ ]+/)
//             .filter((text) => text).map((text) => text.charAt(0).toUpperCase() + text.slice(1).toLowerCase()
//             )

//         const name = nameSurnameArr[0];
//         let surname = '';


//         for (let i = 1; i < nameSurnameArr.length; i++) {
//             if (i == 1) {
//                 surname += nameSurnameArr[i]
//             } else {
//                 surname += ' ' + nameSurnameArr[i]
//             }
//         }

//         const person = new Person(name, surname)

//         person.addToTable()

//         objectArr.push(person)

//     } else {
//         alert(`Įrašykite vardą ir pavardę`)
//     }




// }



// document
//     .querySelector('#forma > button')
//     .addEventListener("click", createPersonObject)





// 2023-01-25

// Jums paskambino pažinčių portalas – jiems reikia greitai sukurti front-endą, kuris pasiimtų duomenis iš https://randomuser.me/api/ ir juos atvaizduotų juos puslapyje. Svarbu atvaizduoti nuotrauką, vardą, amžių ir el. pašto adresą.