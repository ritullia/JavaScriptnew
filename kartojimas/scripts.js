console.log('veikia')

console.log('----------------------------ES6----------------------------')

// https://www.geeksforgeeks.org/differences-between-es6-class-and-es5-function-constructors/

class ClassUser {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    print() {
        console.log(`${this.name} has an age of 
        ${this.age} and gender of ${this.gender}`);
    }

    combineNameAgeGender(extra = 'default') { //funkcija ES6 
        console.log(
            this.name + ' '
            + this.age + ' '
            + this.gender + ' '
            + extra
        )
    }
}


const ClassRoy = new ClassUser('Roy', '19', 'Male');
ClassRoy.print();
console.log(ClassRoy)
ClassRoy.combineNameAgeGender()
ClassRoy.combineNameAgeGender('Rokas cia buvo irasytas')


console.log('----------------------------ES5----------------------------')


// ES5 funkcija konstruktorius

function User(name, age, gender) {
    this.age = age;
    this.name = name;
    this.gender = gender;


    this.print = function () {
        console.log(
            `${this.name} has an age of ${this.age} 
            and gender of ${this.gender}`
        );
    };

    this.combineNameAgeGender = function (extra = 'Irasom viska kai paduoda extra') {
        console.log(extra)
    }
}

const Roy = new User('Roy', '19', 'Male');
Roy.combineNameAgeGender();

console.log('----------------------------uzduotis----------------------------')

// susikurti klase/konstruktoriu
// kalse/konstruktorius priims 3 argumentus: Audi, 2012, juoda
// klaseje/konstruktoriuje bus funkcija/metodas 'uzvesti masina' ir jis priims argumenta kas uzvede masina
// uzvedam masina ir graziname i console uzvesta: Audi, 2012, juoda = kas uzves


class Car {
    constructor(brand, year, color) {
        this.brand = brand;
        this.year = year;
        this.color = color;
    }

    print() {
        console.log(`${this.brand} ${this.year} ${this.color}`);
    }

    uzvestiMasina(extra = 'default') {
        console.log(
            this.brand + ' '
            + this.year + ' '
            + this.color + ' '
            + extra

        )


    }

}


const MyCar = new Car('Audi', "2012", 'black');
console.log(MyCar)
MyCar.print();
MyCar.uzvestiMasina('masina uzvede Rita')


console.log('----------------------------uzduotis su ES5----------------------------')

// susikurti klase/konstruktoriu
// kalse/konstruktorius priims 3 argumentus: Audi, 2012, juoda
// klaseje/konstruktoriuje bus funkcija/metodas 'uzvesti masina' ir jis priims argumenta kas uzvede masina
// uzvedam masina ir graziname i console uzvesta: Audi, 2012, juoda = kas uzves

function MyLittleCar(marke, metai, spalva) {
    this.marke = marke;
    this.metai = metai;
    this.spalva = spalva;

    // this.print = function(){
    //     console.log(`${this.marke} ${this.metai} ${this.spalva}`)
    // }

    this.uzvestiManoMasiniuka = function (extra = 'As uzvedziau') {
        console.log(`${extra} ${this.marke} ${this.metai} ${this.spalva} `);

    }
}


const MyNewLittleCar = new MyLittleCar('Toyota Aygo', 2023, 'geltona');
console.log(MyNewLittleCar);
MyNewLittleCar.uzvestiManoMasiniuka();
MyNewLittleCar.uzvestiManoMasiniuka('Jonas uzvede');
MyNewLittleCar.uzvestiManoMasiniuka('Petras uzvede');
MyNewLittleCar.uzvestiManoMasiniuka('Geriau Jonas butu neuzvedes, nes Petras uzvede');

console.log('--------------------------------------------------------')

function myName(vardas, antrasVardas) {
    console.log('funkcija vardas');
    console.log(vardas, antrasVardas)
}

myName('Lukas', 'Burbulas')

console.log('-----------------------------UZDUOTIS---------------------------')

// funckija sukuria h1, ideda paduota teksta ir grazina h1
// function susikuriuh1(ateinaKazkoksTekstas) {
//     let h1 = document.createElement('h1')
//     h1.textContent = ateinaKazkoksTekstas
//     return h1
// }
// function vardas(vardas, antrasVardas, kurIdeti) {
//     // cia gaunu jau sukurta h1 su mano paduotu teksta
//     let sukurtasH1 = susikuriuh1(vardas + ' ' + antrasVardas)
//     // cia appendu savo h1 i elemta
//     kurIdeti.appendChild(sukurtasH1)
// }
// // elemetas example
// let example = document.getElementById('example')
// let darVienasH1 = susikuriuh1('cia tas kitas h1')
// let darVienasH2 = susikuriuh1('cia tas kitas h2')
// let darVienasH3 = susikuriuh1('cia tas kitas h3')
// let darVienasH4 = susikuriuh1('cia tas kitas h4')
// // example.appendChild(darVienasH1)
// // example.appendChild(darVienasH2)
// // example.appendChild(darVienasH3)
// // example.appendChild(darVienasH4)
// // // paduodu vardus ir elemeta
// vardas('Rokas', 'Petras', example)


// <form>



//     <button type="submit" className="btn btn-primary">Submit</button>
// </form>
// pasileidziam funkcija kuri sukuria forma ir ideda i html
// joje turit panaudoti tris funkcijas kuri sukuria email input, suskuria password input, sukuria checkbox
// funkcija sukuria email input, mes i ja norim paduoti: Email address ,We'll never share your email with anyone else.
//funkcija kuri suskuria password inputpaduoti: Password
//funnkcija sukuria checkbox paduoti: Check me out



// pasileidziam funkcija kuri sukuria forma ir ideda i html
// joje turit panaudoti tris funkcijas kuri sukuria email input, suskuria password input, sukuria checkbox

function createForm() {

    let myForm = document.createElement('form');
    myForm.setAttribute('class', 'email-form');
    myForm.classList.add('email-form')

    createEmailInputs(myForm)
    createPassInputs(myForm)
    createCheckInputs(myForm)
    createButton(myForm)
    // console.log(myForm)
    document.querySelector('.container').append(myForm)
    return myForm

}

//     <div className="mb-3">
//         <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
//         <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
//             <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
//     </div>
function createEmailInputs(myForm) {
    let divMb3 = document.createElement('div');
    divMb3.setAttribute('class', 'mb-3')
    let emLabel = document.createElement('label');
    emLabel.textContent = 'Email adress: '
    emLabel.setAttribute('class', 'form-label')
    let emInput = document.createElement('input')
    emInput.setAttribute('type', 'email')
    emInput.setAttribute('class', 'form-control')
    emInput.setAttribute('id', 'exampleInputEmail1')
    divMb3.append(emLabel, emInput);
    myForm.append(divMb3)
   
}


//     <div className="mb-3">
//         <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
//         <input type="password" className="form-control" id="exampleInputPassword1">
//     </div>
function createPassInputs(myForm) {
    let divMb3 = document.createElement('div');
    divMb3.setAttribute('class', 'mb-3')
    let emLabel = document.createElement('label');
    emLabel.textContent = 'Password: '
    emLabel.setAttribute('class', 'form-label')
    emLabel.setAttribute('for', 'exampleInputPassword1')
    let emInput = document.createElement('input')
    emInput.setAttribute('type', 'password')
    emInput.setAttribute('class', 'form-control')
    emInput.setAttribute('id', 'exampleInputPassword1')
    divMb3.append(emLabel, emInput);
    myForm.append(divMb3)
    
}


//     <div className="mb-3 form-check">
//         <input type="checkbox" className="form-check-input" id="exampleCheck1">
//         <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
//     </div>
function createCheckInputs(myForm) {
    let divFcheck = document.createElement('div');
    divFcheck.setAttribute('class', 'mb-3 form-check');
    let emInput = document.createElement('input')
    emInput.setAttribute('type', 'checkbox')
    emInput.setAttribute('class', 'form-check-input')
    emInput.setAttribute('id', 'exampleCheck1')
    let emLabel = document.createElement('label');
    emLabel.textContent = 'Check me out'
    emLabel.setAttribute('class', 'form-check-label')
    emLabel.setAttribute('for', 'exampleCheck1');
    divFcheck.append(emLabel, emInput)
    myForm.append( divFcheck);
    // console.log(divFcheck)
}

function createButton(myForm){
    let btnSub = document.createElement('button');
    btnSub.textContent = "Submit"
    btnSub.setAttribute('class', 'btn btn-primary')
    btnSub.setAttribute('type', 'submit')
    myForm.append(btnSub);
    btnSub.addEventListener('click', clickButton)
}

function clickButton(e){
    document.querySelector('.email-form').myForm = e.target.value
    alert("paspaudziau")
    console.log(myForm)
}


createForm()





