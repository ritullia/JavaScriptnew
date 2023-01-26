function alertName(name) {
    alert(name)
};

function sumNumbers(num1, num2) {
    let sum = name + num1 + num2;
    console.log(sum)
}
function consoleName(name) {
    console.log(name)
}


function coreFunction(name, functionParam) {
    functionParam(name)
}


coreFunction('Matas', sumNumbers)


let arr = [1, 3, 5, 3, 6, 8, 18, 4, 64, 13, 75];
let arrString = ['a', 'b', 'c'];

let sum = 0;

for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
}

console.log(sum);

let sumaForEach = 0;

arr.forEach((value, index, array) => {
    sumaForEach += value
})

console.log(sumaForEach);

// forEach() metodas ji negrazina nieko

const cars = ['BMV', 'VW', 'Audi', 'Volvo'];

let carsArr = 0;

cars.forEach((car) => {
    console.log(car)

})


// map() metodas grazina nauja masyva 

let mapArr = arr.map((value) => {
    // return value + 1;    //prie naujai sukurto masyvo reiksmiu prideda po viena
    return value + ' ' + 'naujas';
});

console.log(mapArr)

//Sukurk Array su savo draugų vardais, raidžių kapitalizaciją pamiksuok (t.y. "peTras", "Jonas", "aNTanaS" ir t.t.). Naudojant map metodą, padaryk, kad susikurtų naujas array (ir jį atspausdink), kuriame vardai surašyti teisinga kapitalizacija (pvz. "peTras" => "Petras").


const nameArr = ['vaiDa', 'TaDas', 'DaRius', 'irMa', 'sauLIUS', 'LiNas'];

nameArr.push('Rita')

console.log(nameArr)

let newNameArr = nameArr.map((word) => {
    return word[0].toUpperCase() + word.substring(1).toLowerCase();
})

console.log(newNameArr);


// .includes()  metodas

console.log(newNameArr.includes('Tadas'));

// .filter() metodas

const arrNum = [1, 3, 5, 3, 6, 8, 18, 4, 64, 13, 75];

const arrFilter = arrNum.filter((num) => {
    return num >= 50
})

console.log(arrFilter)



// Uzduotis: sukurti masyvą su skaičiais ir išfiltruoti skaičius didesnius už 10 ir mažesnius už 50;

const numArrays = [1, 3, 5, 2, 3, -1, 6, 8, 18, 4, 50, 64, 13, 75, 49, 55, 98];


const numNewArrays = numArrays.filter((num) => {
    return num >= 10 && num <= 50
})

console.log(numNewArrays);


//  .some()  bent vienas elementas turi atitikti salyga

const newNum = numArrays.some((num) => {
    return num <= 10
})

console.log(newNum);

//  .every() ar visi elementai atitinka salyga

const newNu = numArrays.every((num) => {
    return num > 0
})

console.log(newNu);


// Array.from() sukuria masyva is paduotos reiksmes. I si metoda paduodam visus iteruojamas reiksmes 

const newArr = Array.from("Rita");

console.log(newArr);

console.log('----------------------------------------------------------------------');
// Array.of() 

const newArr1 = Array.of('R', 'i', 't', 'a');

console.log(newArr1);

console.log('----------------------------------------------------------------------');
// .pop()  .push()

const numbers = [1, 3, 5, 2, 3, -1, 6, 8, 18, 4, 50, 64, 13, 75, 49, 55, 98];

console.log(numbers.pop())
console.log(numbers.push())
console.log(numbers.shift()) // grazina isimta elementa is masyvo 
console.log(numbers.unshift(10)) // prideda elementa masyvo pradzioje
console.log(numbers);

console.log('----------------------------------------------------------------------');

const mapNew = new Map([
    ['Vardas', 'Rita'],
    ['Pavarde', 'Cincileviciene'],
    ['Miestas', 'Vilnius'],
])

console.log(mapNew)
console.log(mapNew.get('Vardas', 'Pavarde'))
console.log(mapNew.values());
console.log(Array.from(mapNew.keys()));

// Set()

const numberArrays = [1, 1, 2, 3, 1, 4, 5, 1];

const numSet = new Set(numberArrays);

console.log(numSet);

console.log('----------------------------------------------------------------------');




function uniqueFilter(myArr) {

    let uniqueNumLeter = ['ABCDE', 'DDEB', 'BED', 'CCA', 'BAC']

    // ['88', '999', '9988', '9898']
    // ['abb', 'abc', 'abcdb', 'aea', 'bbb']
    // ['ABCDE', 'DDEB', 'BED', 'CCA', 'BAC']

    const newUnique = uniqueNumLeter.map((unique) => {

        const elemArr = Array.from(unique)
        const uniqueSet = new Set(elemArr);

        if (elemArr.length == uniqueSet.size) {
            return unique
        }

    })

    console.log(typeof newUnique)
    console.log(newUnique)

    const oneUnique = newUnique.filter((numLet) => {
        return numLet != myArr;
    })

   console.log(oneUnique)

}

uniqueFilter()







