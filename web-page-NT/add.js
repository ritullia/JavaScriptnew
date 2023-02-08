console.log('veikia')

const ENDPOINT = "https://robust-safe-crafter.glitch.me/"


async function sendData() {

    const img = document.getElementById('image-input').value;
    // console.log(img)

    const price = document.getElementById('price-input').value;
    // console.log(price)

    const description = document.getElementById('description-input').value;
    // console.log(description)

    const city = document.getElementById('city-input').value;
    // console.log(city)

    const dataToSend = {
        image: img,
        city: city,
        price: parseInt(price),
        description: description
    }

    // console.log(dataToSend)

    const response = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json' 
        },
        body: JSON.stringify(dataToSend)
    });
    const result = await response.json();

}

document.addEventListener('çlick', sendData)