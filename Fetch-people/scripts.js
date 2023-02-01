console.log('veikia'
)

////Sukurti UI pavaizduotą paveikslėlyje.
//Vardą įrašius į input laukelį ir paspaudus submit,
//turi atsirasti Vardas kurį įrašėmė, ir tikimybės su
//progress bar'ais. Šios tikimybės nurodo kokia tikimybė,
//kad žmogus turintis tokį vardas bus iš tos šalies.
//Nationality vietoje galima nurodyti tik šalies kodą.
//Duomenis pasiimti iš čia: https://api.nationalize.io/?name=vardas.
//"vardas" pakeistį tą vardą kuris bus įrašytas input laukelyje.


async function getName() {
    try {
        const nameInput = document.getElementById('textInput').value
        console.log(nameInput)
        let response = await fetch('https://api.nationalize.io/?name=' + nameInput, {
            method: 'GET',
            
        })
        
        
        if (response.ok) {
            let user = await response.json()
            console.log(user)

            let card = document.querySelector('.container')
            card.textContent - 'Labas'

            


        }
        
       

    } catch (err) {
        console.error(err)
    }
}


let btn = document.getElementById("select");

btn.addEventListener('click', getName)