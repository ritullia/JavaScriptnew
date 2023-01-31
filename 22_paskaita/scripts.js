console.log('veikia')

let url = 'https://httpdump.app/dumps/7a40fa53-4c2e-4bd7-b445-0e93dda8014b'

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
    let newTxt = myTxt.value;firstName
    let newProf = myProf.value;
    console.log(newTxt, newProf)

    // 3. Susikuriam objekta kuris bus siunciamas fetch

    let objText = {
        name: '',
        profession: '',
    };
    objText.name = newTxt;
    objText.profession = newProf;
    
    // 4. Issiunciam i serveri info objekto
    fetch(url, {
        method: 'POST',
        body: JSON.stringify(objText),
    }).then(function (response) {
        return response.json()
    }).catch(error => console.error('Error:', error));
}

let btn = document.querySelector('#btn');
btn.addEventListener('click', clickButton)