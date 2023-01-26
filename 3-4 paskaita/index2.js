// let box1 = document.getElementsByClassName('box1');
// let box2 = document.getElementById('box2');
// let box3 = document.getElementById('box3');
// let box4 = document.getElementById('box4');

// box1[1].textContent = 'cia naujas sakinys'; // textContent naudojam pakeisti teksta elemente
// box2.innerHTML = '<h1> Idejau i div elementa h1</h1>' // su .innerHTML idedam nauja elementa i div elementa



// box1[2].textContent += ' ir Visiskai Naujos dezutes tekstas';  // = pakeiciamas rtekstas nauju, jei naudojam += tai naujas tekstas pridedamas prie seno tame elemento
// box1[0].textContent = 'Pakeistas tekstas i nauja';


// box2.innerHTML = '<h1> Idejau i div elementa h1</h1>' 
// box3.innerHTML = '<p> Idejau i div elementa p</p>'
// box4.innerHTML = '<div> Idejau i div elementa nauja div</div>'

// console.log(box1[0]);
// console.log(box1[1]);
// console.log(box1[2]);
// console.log(box2);
// console.log(box3);
// console.log(box4);


// let box1 = document.getElementsByClassName('box1');
// let box2 = document.getElementById('box2');


// // let box1 = document.querySelector('.box1');
// let box1 = document.querySelectorAll('.box1');
// console.log(box1)
// let box2 = document.querySelector('#box2');
// console.log(box2)


function takeName(vardas) {
    console.log('tiesiog kas paduota: ' + vardas)
}


takeName('Saule')

function takeNameSurname(vardas, pavarde) {
    console.log('tiesiog kas paduota: ' + vardas + ' ' + pavarde)
}

takeNameSurname('Petras', 'Petrauskas');

function mainInfo(vardas, pavarde, miestas) {
    console.log(
        'tiesiog kas paduota: ' + vardas + ' ' + pavarde + ' ' + miestas
    )
}

mainInfo('Saule', 'Saulinyte', 'Kaunas');

console.log('---------------------------------------------------')

// FUNKCIJOS

function daugyba(numberOne, numberTwo, numberTree) {
    let numbers = (numberOne * numberTwo) / numberTree;

    console.log(`parinkti skaiciai: ${numberOne} padauginta is ${numberTwo} ir padalinta is ${numberTree}`);

    console.log(`Atsakymas: ${numbers}`);

    return numbers;
}

let manoParinktiSkaiciai = daugyba(3, 44, 2);

console.log(manoParinktiSkaiciai);


console.log('---------------------------------------------------')

let btn1 = document.getElementsByClassName('button1')[0];
let btn2 = document.getElementsByClassName('button2')[0];

let boxes = document.getElementsByClassName('box1')
console.log(boxes);



let box = document.getElementById('box3')
console.log(box)

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


boxes[2].addEventListener('click', function () {
    // console.log('paspaudei ant 1 mygtuko')

    // boxes[2].textContent = 'Pakeiciau tekstus su 1 mygtuku';

    // boxes[2].style.backgroundColor= getRandomColor();

    // console.log(getRandomColor())

    // --------------------------------



    if (boxes[2].innerText == 3) {
        boxes[2].style.backgroundColor = getRandomColor();
    }

    boxes[2].textContent = 89;

    console.log(boxes[2].innerText)



});


btn2.addEventListener('dblclick', function () {
    console.log('paspaudei ant 2 mygtuko');

    boxes[0].textContent = 'Pakeiciau tekstus su 2 mygtuku';

    boxes[0].style.backgroundColor = getRandomColor();

    // box.innerHTML = '<p>PAKEISTAS TEKSTAS</p>'
})


console.log(btn1);
console.log(btn2);


console.log('---------------------------------------------------')


const myForm = document.getElementById('my-form');

myForm && myForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(myForm);


    const nameValue = formData.get('first-name');
    const ageValue = formData.get('age');

    console.log(ageValue)

    const outputEl = document.getElementById('output');
    console.log();


    outputEl.textContent = nameValue + ', ' + ageValue;
})

console.log('---------------------------------------------------')

const ageForm = document.getElementById('age-form');

console.log(ageForm);

ageForm && ageForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(ageForm);

    const ageValue = formData.get('my-age');
    console.log(ageValue);

    const yearValue = new Date();
    const year = yearValue.getFullYear()

    const outputElm = document.getElementById('age-output');
    console.log();

    outputElm.textContent = year - ageValue;
});


console.log('---------------------------------------------------')

// Coffee form

const coffeeForm = document.getElementById('coffee-form');

console.log(coffeeForm);

if (coffeeForm) {
    coffeeForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Check if sugar is needed first! (radio buttons)

        const needSugarEl = document.querySelector('[name=need-sugar]:checked')
        const needSugar = needSugarEl.value === 'true' ? true : false;

        //  Get starting word
        const doesNeedSugarText = `${needSugar ? 'Does' : "Doesn't"}`

        // Get alue from checkbox
        const needExtraSugarEl = document.getElementById('extra');
        const needExtraSugar = needExtraSugarEl.checked;

        // Format the rest of message
        const dosNeedExtra = needExtraSugar ? ', also need some extra sugar.' : '.'
        const message = `${doesNeedSugarText} need sugar ${needSugar ? dosNeedExtra : '.'}`


        alert(message)
    })
};

console.log('---------------------------------------------------');

// Drive form

const driveForm = document.getElementById('drive-form');

console.log(driveForm);

if (driveForm) {
    driveForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = new FormData(driveForm);

        const yourNameValue = formData.get('your-name');
        console.log(yourNameValue);

        const yourAgeValue = formData.get('your-age');
        console.log(yourAgeValue);

        const canDrive = yourAgeValue >= 18 ? true : false

        const youCanDrive = `${canDrive ? `${yourNameValue} can drive` : `${yourNameValue} to young to drive`}`;

        const outputElDrive = document.getElementById('can-drive');
        console.log();

        outputElDrive.textContent = youCanDrive;

    });
};

console.log('---------------------------------------------------');


const tempForm = document.getElementById('temp-form');

console.log(tempForm);


tempForm && tempForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(tempForm)


    const tempValue = formData.get('celsius');
    console.log(tempValue)


    const convertToF = tempValue * 9 / 5 + 32;

    console.log(convertToF);

    const outputToF = document.getElementById('convert-to-F');
    console.log();

    outputToF.textContent = `${convertToF} F`;

});

console.log('---------------------------------------------------');

// Bonus calculate form

const bonusForm = document.getElementById('bonus-form');

console.log(bonusForm);

if (bonusForm) {
    bonusForm.addEventListener('submit', (e) => {
        e.preventDefault();

        let xmasBonus = 50;
        let total = 0;

        const formData = new FormData(bonusForm);

        const workYearIn = formData.get('work-time');
        console.log(workYearIn);

        if (workYearIn <= 20) {
            rate = 2
            console.log(rate)
        } else if (workYearIn >= 20) {
            rate = 4
            console.log(rate)
        } else {
            alert('Neįvestas darbo stažas')
        };

        total = xmasBonus * rate;

        const outputBonus = document.getElementById('bonus-to-get');
        console.log();

        outputBonus.textContent = `${total} €`;



    })
}

console.log('---------------------------------------------------');

const input = document.getElementById('text');


input && input.addEventListener('input', function (event) {
    console.log(event)

    const output = document.getElementById('output-text')

    if (output) {
        output.textContent = event.target.value;

    }

});


/* IIFE */

// const name = 'Rita';

// function sayName(){
//     console.log(name)
//     const anotherName = 'Jonas'
// };

// console.log(anotherName)(()=> {
//     console.log(name)
// })

// (() => {
//     console.log('IIFE worked')
// })();


// (function () {
//     console.log('also IIFE worked')
// })();


console.log('---------------------------------------------------');

// 2. Sukurkite programą, kurioje reikia įvesti elektroninį paštą ir pažymėti checkbox'ą "sutinku gauti laiškus". Suvedus duomenis, jei checkbox'as "sutinku" nepažymėtas - išmeta - "Registracija nesėkminga". Jei pasirinktas - išmeta "El. paštas [paštas] sėkmingai užregistruotas"


const emailForm = document.getElementById('email-form');

console.log(emailForm);

emailForm &&
    emailForm.addEventListener('click', event => {
        event.preventDefault();

        const form = event.target

        // const formData = new FormData(event.target);

        const emailVal = form.querySelector('[name=email]');
        console.log(emailVal);
        const isChecked = form.querySelector("[name=agree]")

        if (!isChecked) {
            alert("Must agree with terms to continue");

            return;
        }
        console.log(emailVal)
       
    });

    console.log('---------------------------------------------------');

// BMI Calculator

const getWeightCategory = (bmi) => {
    if(bmi < 18.5){
        return 'Underweight'
    }
    if(bmi >= 18.5 && bmi < 25){
        return 'Normal weight'
    }
    if(bmi >= 25 && bmi < 30){
        return 'Owerweight'
    }
    
    return "Obesity";
}

const bmiForm =  document.getElementById('bmi-form');

bmiForm && bmiForm.addEventListener('submit', function(event){
    event.preventDefault();

    console.log(event);

    const form = event.target;

    const weightInput = form.querySelector('[name=weight]');
    const heightInput = form.querySelector('[name=height]');

    const weight = parseInt(weightInput.value);
    const height = parseInt(heightInput.value);

    const heightInMeters = height / 100;

    const bmi = Math.round( (weight / heightInMeters ** 2) * 10) / 10;



    const outputF = form.querySelector('#bmi-output');

    const category = getWeightCategory(bmi);

    if(outputF && bmi) {
        outputF.textContent = `Your BMI: ${bmi} (${category})`
    }


});

console.log('---------------------------------------------------');
/* 
1.

Sukurkite programą, kurioje bus du inputai - vardas (text) 
ir skaičius (number) bei tuščias <ul>. Įrašius formoje duomenis, 
po apačia turi susikurti list itemų tiek, kiek kokį skaičių nurodėte. 

List itemuose turi būti vertė iš vardo laukelio.

*/

const listItemForm = document.getElementById('list-item');
console.log(listItemForm)


listItemForm && 
    listItemForm.addEventListener('submit', event =>{
        event.preventDefault();

        const form = event.target;

        const nameEl = form.querySelector('[name=my-name]');
        const numEl = form.querySelector('[name=my-number]');
        console.log(nameEl);

        const nameVal = nameEl && nameEl.value;
        const numVal = numEl ? parseInt(numEl.value) : 0;

        const output = form.querySelector('#list-output');

        let result = '';

        for(let i= 0; i < numVal; i++){
            result += `<li>${nameVal}</li>`
        }

        if(output){
            output.innerHTML = result
        }

    })



console.log('---------------------------------------------------');



/* 
3. 

Sukurkite input (be mygtuko), į kurį įrašius vardą ir nulipus
nuo input (t.y. blur event), vardas atsiras apačioje tvarkingame 
sąraše (su kableliais):

Pvz.: Petras, Jonas, Mantas, Antanas.
*/
const nameList = document.getElementById('name-list');
console.log(listItemForm)


nameList && 
    nameList.addEventListener('submit', event =>{
        event.preventDefault();

        const form = event.target;

        const nameElm = form.querySelector('[name=name-log]');
        
        console.log(nameElm);

        const nameValue = nameElm && nameElm.value;
        

        const output = form.querySelector('#name-lists-output');

        let results = '';

        for(let i= 0; i < nameValue; i++){
            results += `<li>${nameValue}</li>`
            console.log(results)
        }

        if(output){
            output.innerHTML = results
        }

    })