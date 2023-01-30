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


console.log('----------------------------------------------------------------------');


// .reduce()   ledzia suploti masyva. Jeigu turim daug skaiciu, tai su siuo metodu suskaiciuosim eju suma. Jis taip pat turi callback.


const numSum = [1, 3, 5, 2, 3, -1, 6, 8, 18, 4, 50, 64, 13, 75, 49, 55, 98];




console.log(numSum.reduce((total, value) => {
    return total += value
}, 0));


// Sukurk array su daug skaičių. Grąžink didžiausią skaičių iš array naudojant reduce.

const numBigArr = [1, 3, 5, 2, 3, -1, 6, 8, 1002, 18, 4, -10, 50, 64, 13, 75, 49, 55, 98, 502];

let maxNum = numBigArr.reduce((total, value) => {
    return Math.max(total, value)
}, 0)

console.log(maxNum)

let minNum = numBigArr.reduce((total, value) => {
    return Math.min(total, value)
}, 0)

console.log(minNum);


// .sort()   metodas

const car = ['BMW', 'AUDI', 'VW', 'Volvo', 'SAAB', 'Toyota',];

console.log(car.sort((a, b) => {

    if (a.toLowerCase() < b.toLowerCase()) {
        return -1;
    } else if (a.toLowerCase() > b.toLowerCase()) {
        return -1;
    } else{
        return 0
    }
}));



const numberR = [11, 202, 2]

console.log(
    numberR.sort((number1, number2) => {
        // if (number1 - number2 > 0) {
        //     return 1;
        // } else if (number1 - number2 < 0) {
        //     return -1;
        // } else {
        //     return 0;
        // }

        return number1 - number2
    })
);

// Isfiltruoti kad rodytu tik pilnamecius:

const people = [
    {
      name: "Petras",
      age: "18"
    },
    {
      name: "Jonas",
      age: 15
    },
    {
      name: "Antanas",
      age: 20
    },
    {
      name: "Urtė",
      age: 10
    },
    {
      name: "Diana",
      age: 25
    },
    {
      name: "Ieva",
      age: 16
    }
  ];


  console.log(people)

  for(let i = 0; i < people.length; i++){
       console.log(people[i])
  }

  const oldest = people.sort((person1, person2) => 
     (person1.age < person2.age) ? 1 : (person1.age > person2.age) ? -1 : 0)

console.log(oldest.filter((person) => person.age >= 18).map((person) => person.name).sort((person) => person.age));



//Sukurkite funkciją. Ji priims vieną argumentą - array su objektais, kurie turės du parametrus - name ir price. Grąžins - brangiausią ir pigiausią prekes. Turi veikti padavus neribotą kiekį elementų (pavyzdyje apačioje - tik du).


let products = [
    {
      "product_name": "Lemonade",
      "price": 2.20
    },
    {
      "product_name": "Lime",
      "price": 0.58
    },
    {
      "product_name": "Towel",
      "price": 12 
    },
    {
      "product_name": "Bread",
      "price": 2.50
    },
  ]
   

  console.log(products)

 const allSort = products.sort((p1, p2) => p1.price - p2.price);

 console.log(allSort[0])
 console.log(allSort[allSort.length-1])

  console.log(products)


