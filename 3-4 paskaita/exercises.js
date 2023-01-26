 /* -------------------------------
Exercise 1.

Turite masyvą su raidėmis.
Parašykite kodą, kuris suskaičiuos visas "a" raides.
Gautą skaičių išspausdinkite konsolėje.

Rezultatas: 4

Bonus: Sujunkite vertes į vieną 'string'.
Hint: google js join.

*/

const letters = [
  "L",
  "a",
  "b",
  "a",
  " ",
  "d",
  "i",
  "e",
  "n",
  "a",
  ",",
  " ",
  "s",
  "u",
  " ",
  "v",
  "i",
  "š",
  "t",
  "i",
  "e",
  "n",
  "a"
];

console.log(letters);

let currentLetter = [];

for( let i = 0; i < letters.length; i++ ){
  const currentLetters = letters[i]

  if(currentLetters === 'a'){
    currentLetter.push(currentLetters)

  }
}

console.log(currentLetter);

const letterA = currentLetter.toString();

console.log(letterA);

console.log(letters.join(''))




/* 
Exercise 2.

1. Išsirinkite LYGINIUS skaičius ir juos pakelkite kvadratus.
Išspausdinkite naują masyvą
Rezultatas: [484, 2116, 7396, 9604]

2. Naudodami pirminį masyvą, suskaičiuokite visų skaičių
sumą.
Gautą vertę taip pat išspausdinkite
Rezultatas: 468

*/

const allNums = [11, 22, 33, 46, 75, 86, 97, 98];

///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
// Exercise 3.
//
// Objektai netyčia pavirto į spaghetti code! Turime masyvą, kuriame yra
// du atskiri masyvai, anksčiau reprezentavę objektus.
// Jų viduje turime atskirus masyvus su dviem elementais, kurie
// reprezentuoja key - value poras, pavyzdžiui:
//
//    (key)      (value)
// "firstName": "Vasanath"
//
// Parašykite funkciją, kuriai padavus žemiau nurodytą kintamąjį, konsolėje
// būtų atvaizduotas masyvas su jo viduje esančiais dviem objektais.

const spaghettiCode = [
  [
    ["firstName", "Vasanth"],
    ["lastName", "Raja"],
    ["age", 24],
    ["role", "JSWizard"]
  ],
  [
    ["firstName", "Sri"],
    ["lastName", "Devi"],
    ["age", 28],
    ["role", "Coder"]
  ]
];



  const objOne = []

  for(let i=0; i < spaghettiCode.length; i++){
    const newObj = {}
    const currentArr = spaghettiCode[i];
  
    for(let l=0; l < currentArr.length; l++){

      const currentArrNew = currentArr[l]
  
      const propertyName = currentArrNew[0]
      const propertyValue = currentArrNew[1];
    
      newObj[propertyName] = propertyValue;

      
    }
    objOne.push(newObj)
  };

  console.log(objOne)



///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
// Exercise 4.
//
// Suraskite bug'ą "B" obuolio "A" viduje!
// Turite masyvą masyvų, kuriuose kiekvienas elementas yra "A" raidė, tačiau
// kartais gali pasitaikyti vienas bug'as ("B raidė").
//
// Jūsų užduotis - parašyti funkciją, kuri grąžins bug'o koordinates tokiu
// formatu - [x, y].
// Bug'as visada bus tik vienas.
//
// Pavyzdžiui:
// [
//   ["B", "A", "A", "A", "A"], <- Bug'as [0, 0] pozicijoje
//   ["A", "A", "A", "A", "A"],
//   ["A", "A", "A", "A", "A"],
//   ["A", "A", "A", "A", "A"],
//   ["A", "A", "A", "A", "A"]
// ]

const appleOne = [
  ["A", "A", "A", "A", "A"],
  ["A", "A", "A", "A", "A"],
  ["A", "A", "A", "A", "A"],
  ["A", "A", "A", "A", "A"],
  ["A", "A", "A", "B", "A"]
]; // [1, 1]

// const appleOneArr = []

// for(let k=0; k < appleOne.length; k++){
//   const newLetterB = {};
//   const currentLet = appleOne[k]
//   console.log(currentLet)
//   for(let s= 0; s < currentLet.length; s++){
//     const newLetter = currentLet[s]
//     console.log(newLetter)
//   }
//   appleOneArr.push(newLetterB)
// }
// console.log(appleOneArr)

function findLetterB (appleOne, symb){
  const string = appleOne.toString().replace(/,/g, '');

  const findB = string.indexOf(symb);

  const firstB = (appleOne[0] || []).length

  const x = findB % firstB;
  const y = Math.floor(findB / firstB)

  return {x, y}
}

console.log(findLetterB(appleOne, 'B'));



const appleTwo = [
  ["A", "A", "A", "A", "A"],
  ["A", "A", "A", "A", "A"],
  ["A", "A", "A", "A", "A"],
  ["A", "B", "A", "A", "A"],
  ["A", "A", "A", "A", "A"]
]; // [3, 2]

function findSecondLetterB (appleTwo, symbol){

  const stringTwo = appleTwo.toString().replace(/,/g, '');


  const findBTwo = stringTwo.indexOf(symbol);

  const secondB = (appleTwo[0] || []).length

  const x = findBTwo % secondB;
  const y = Math.floor(findBTwo / secondB)

  return{x, y}
}


console.log(findSecondLetterB(appleTwo, 'B'));

// Kitas sprendimo būdas su for loop 


const findBug = (array) =>{
  const cordinates = [];

  for(let y=0; y < array.length; y++){
    const line = array[y];

    for(let x = 0; x < line.length; x++){
      const letter = line[x];

      if (letter === 'B'){
        cordinates.push(x);
        cordinates.push(y);
      }

    }
  };
  return cordinates;
}

const one = findBug(appleOne)
const two = findBug(appleTwo)
console.log(one, two)