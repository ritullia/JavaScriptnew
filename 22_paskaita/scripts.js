console.log('veikia')

let url = 'https://httpdump.app/dumps/9616ec06-cb23-4b76-9824-c682175ba10e'


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


// 1. Paspaudziu ant mygtuko paleidziu funkcija.

async function clickButton() {
    let myTxt = document.getElementById('message')
    // console.log(myTxt.value)

    // 2. Modifikuoju issiunciamus duomenis
    let newTxt = myTxt.value
    console.log(newTxt)

    // 3. Susikuriam objekta kuris bus siunciamas fetch

    let objText = {
        name: '',
    };
    objText.name = newTxt;
    
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