// Primitive types:
// String
// Number
// Boolen
// null
// undefined

// Objektai - bevek viskas, kas nera primitive type.

const names = [
    "Lukas",
    "Ieva",
    "Rokas", 
    "Saule"
];



names[4] = 'Rita'  // pridedam papildomus duomenis (varda) i objekta

names.push('Lukas')  //priima viena parametra, varda ir ideda ji gale

names.pop()  // pasalina viena elementa esanti paskutini objekte

names.pop()

const poppedName = names.pop();

console.log("Popped name", poppedName)

names.shift('Gitana')

names.unshift('Karolis') // prdeda propertie i objekto pradzia

names[names.length] // tokiu budu irgi galima prideti info i objekta.

names[names.length] = 'Vytas'

console.log( names)

if(names[0]){
    console.log(`Found`)
} else {
    console.log("Not found")
}


console.log('---------------------------------------------------');

// Uzduotis

// const allNums = [11, 22, 33, 46, 75, 86, 97, 98];


// console.log(allNums);

// const evenNumbers = [];

// let sum = 0

// // Falsy value: empty string, 0, null, undefined

// for(let i=0; i < allNums.length; i++){
  
//     const currentNum = allNums[i] // susikuriam nauja constanta masyvui

//     if ( currentNum % 2 === 0){
//         evenNumbers.push(currentNum ** 2) // i naujai parinkta masyva evenNumbers sudedam gautus lyginius skaicius kuriuos pakeliam kvadratu
//     } 

//    sum += currentNum
// }

// console.log(evenNumbers, sum)


console.log('---------------------------------------------------');


// Objects

const place = {
    // <key>: <value>
    //<property name>: <property value>
    country: 'Lithuania',
    flagColors: ['yellow', 'green', 'red'],
    first: {
        second: {
            third: 'hello'
        }
    },
    addUpp: function(a, b){
        return a + b;
    }
};


place.first.second.third = 10000; // pakeiciam property value 

place.first.second.someElse = 'confusing' // pridedam i objekta nauja value

place.nationalDish = 'Cepelinai' // pridedam nauja value


console.log(place.first.second.third)
console.log(place)
console.log(place.addUpp(4, 5))
    




