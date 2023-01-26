
// function giveName() {
//     console.log("Rita")

// }

// giveName()


//patikrinti kiek metu su prompt (pilnametis kuris gali pirkti energetini (geltona), 
//pilnametis kuris gali pirkti alkoh0li(zalia), 
//nieko negali pirkti(raudona))
//tada atsakyma dedam į HTML, kad būtų galima matyti ir panaudoti spalvą :)


// let personAge = prompt('Irasykite amziu')

// console.log(personAge);


let btn = document.getElementById('btn')

btn.style.width = "80px"
btn.style.backgroundColor = "grey";
btn.style.borderRadius = "50px";
btn.style.marginTop = "50px";
btn.style.color = "orange";
btn.style.border = "none";
btn.style.padding = "5px"

btn.addEventListener('click', personCanDrink)

function clearElements() {
    const elements = document.querySelectorAll('.simple');
    console.log(elements)
    for (let i = 0; i < elements.length; i++) {
        elements[i].remove()
    }
}

function personCanDrink() {

    clearElements()

    let personAge = prompt('Irasykite amziu');

    const newElm = document.getElementById('can');
    const newText = document.createElement('p');
    newText.setAttribute('class', 'simple');


    if (isNaN(personAge)) {
        newText.innerHTML = personAge + " " + "tai ne skaičius. Įrašykite skaičių";
        newText.style.backgroundColor = 'yellow';
        newText.style.fontSize = '32px';
        newText.style.padding = '10px';
        newText.style.width = '420px';

    } else if (personAge > 0 && personAge < 17) {
        newText.innerHTML = personAge + " " + "metų, alkoholis ir energetinis gėrimai pirkti draudžiama";
        newText.style.backgroundColor = 'red';
        newText.style.fontSize = '32px';
        newText.style.padding = '10px';
        newText.style.width = '420px';

    } else if (personAge >= 18 && personAge <= 20) {
        newText.innerHTML = personAge + " " + "metai, galima įsigyti energetinius gėrimus";
        newText.style.backgroundColor = 'orange';
        newText.style.fontSize = '32px';
        newText.style.padding = '10px';
        newText.style.width = '420px';

    } else if (personAge >= 21) {
        newText.innerHTML = personAge + " " + "metai, galima įsigyti stipriuosius ir energetinius gėrimus";
        newText.style.backgroundColor = 'green';
        newText.style.fontSize = '32px';
        newText.style.padding = '10px';
        newText.style.width = '420px';


    } else if (personAge < 0) {
        newText.innerHTML = personAge + " " + "tokio amžiaus nėra. Įrašykite amžių";
        newText.style.backgroundColor = 'yellow';
        newText.style.fontSize = '32px';
        newText.style.padding = '10px';
        newText.style.width = '420px';


    }

    newElm.prepend(newText);
    console.log(newElm)

}






const newBody = document.getElementById('container')

const navBar = document.createElement('nav');
navBar.style.padding = '15px'
navBar.style.backgroundColor = 'grey'

newBody.prepend(navBar);



let navItems = [

    { name: 'Home' },
    { name: 'About' },
    { name: 'Gallery' },
    { name: 'Contacts' },

]


for(let e = 0; e < navItems.length; e++){
    console.log(navItems[e].name)

    navItems = document.createElement('ul');
    navBar.prepend(navItems)
  
    
}



console.log(navBar)


