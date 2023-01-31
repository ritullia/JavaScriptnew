console.log('veikia')

let url = 'https://httpdump.app/dumps/5c76271d-4b1a-4d89-961e-b6c5abd6b2ba'


// fetch('url')
//   .then(response => {
//     //handle response            
//     console.log(response);
//   })
//   .then(data => {
//     //handle data
//     console.log(data);
//   })
//   .catch(error => {
//     //handle error
//   });


// 1. Paspaudziam ant mygtuko paleidziam funkcija.

async function clickButton() {
    let myTxt = document.getElementById('firstName')
    let myProf = document.getElementById('profession')
    // console.log(myTxt.value)

    // 2. Modifikuoju issiunciamus duomenis
    let newTxt = myTxt.value;
    let newProf = myProf.value;
    console.log(newTxt, newProf)

    // 3. Susikuriam objekta kuris bus siunciamas fetch

    let objText = {
        name: '',
        profession: '',
    };
    objText.name = newTxt;
    objText.profession = newProf;
    
    // 4. Issiunciam i servesi info
    fetch(url, {
        method: 'POST',
        body: JSON.stringify(objText),
    }).then(function (response) {
        return response.json()
    }).catch(error => console.error('Error:', error));
}



let btn = document.querySelector('#btn');
btn.addEventListener('click', clickButton)