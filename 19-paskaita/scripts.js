//  localStorage.clear()


// let person = {
//     name: "Saule",
//     surname: "Debesyte",
//     city: "Dangus",
// }


// localStorage.setItem('name', 'Star')
// localStorage.setItem('person', person)
// localStorage.getItem(person);

// let personJson = JSON.stringify(person) // objekta arba arr pasiverciam string'ais

// localStorage.setItem('person', personJson);

// let personFromStorage = JSON.parse(localStorage.getItem('person')) // gautus stringus paverciam obj arba arr

// console.log(personJson)
// console.log(localStorage)
// console.log(personFromStorage)



//uzduotis



const myForm = document.getElementById('data-form')
const savBtn = document.getElementById('save')
const nameInp = document.getElementById('namInp')
const nameCard = document.getElementById('nameNew')
const nameReap = document.getElementById('nameRepeat')


let nameStorage = localStorage.getItem('nameNew') ? JSON.parse(localStorage.getItem('nameNew')) : [];

// name list function
const nameGet = (text) => {
    const nameList = document.createElement('li')
    nameList.innerHTML = text
    nameCard.appendChild(nameList)
}


myForm.addEventListener('submit', (event) => {
    event.preventDefault()
    // console.log('paklikinau')

    // ---- to get data from input using .push() & .stringify

    nameStorage.push(nameInp.value);

    localStorage.setItem('nameNew', JSON.stringify(nameStorage))
    nameGet(nameInp.value)

    nameInp.value = '';
    
    console.log(localStorage.getItem('nameNew'))

    // for ciklas pereis per nameStorage ir surasys po viena varda
    const nameListRep = document.getElementById('nameRepeat')
    // nameListRep = JSON.stringify(nameStorage)


    nameListRep.innerHTML = '';
    
    for(let i = 0; i < nameStorage.length; i++){
        console.log(nameStorage[i]);
       let p = document.createElement('p');
       p.textContent = nameStorage[i]
       nameListRep.appendChild(p)
    }

    // create new li elm for data
    console.log(nameListRep)
     console.log(JSON.stringify(localStorage));

})


function clearLocalStorage(){
    localStorage.clear();
    console.log('isvaliau:', localStorage)
    console.log(1)
}


document.getElementById('clear').addEventListener('click', clearLocalStorage)



