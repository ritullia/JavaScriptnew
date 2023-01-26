
let i = 0; 
let manoSkaicius = 15;

while (i <= manoSkaicius) {
    console.log("Gavau skaiciu " + i) 
    i++;
  };

// do{} while() ciklas

  do {
    console.log("Iskrito skaicius " + i);
    i++;
  }
  while(i < manoSkaicius) // ciklas eis tol kol neiskrs didesnis skaicius;


console.log('-------------------------------------');

let animals = ['Suo', 'Kate', 'Bebras', 'Meskenas', 'Dramblys'];

let a = 0;

// for(;animals[a];) {
//     console.log(`Gyvunas ${animals[a]}`);
//     a++;
// }

while(animals[a]){
    console.log(`Gyvunas ${animals[a]}`);
    a++;
};  // ciklas naudojamas gauti informacija ie array 


console.log('-------------------------------------');

// JS HTML DOM 