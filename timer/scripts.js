console.log('veikia')

//Užduotis:

//Sukurti Chronometrą su JS.
//1. Sukurti 'start/stop' mygtuką, kuris paleistų ir sustabdytų chronometrą.
//2. Sukurti 'reset' mygtuką, kuris sustabdytų ir panaikintų chronometro reikšmes ('nunulintų').
//3. Sukurti 'lap' mygtuką, kurį paspaudus laikas išsisaugotų ir būtų matomas apačioje. Šį mygtuką galima spausti kelis kartus ir taip užfiksuoti laikus (pvz. lenktynėse). Sukurti ir 'delete times' mygtuką, kuris šiuos laikus ištrintų.//4. Išsaugoti laikai su 'lap' funkcija turi būti matomi net ir perkrovus puslapį.

const startBtn = document.querySelector('.timer-button');
const timeH = document.querySelector('.timer-part');


let countTime; // pasidarom kintamaji funkcijos isoreje;
let myTime = 0; // kintamaji persikeliam i isore;


let flag = false; // elementas su false booleen kad galima butu sustabdyti start mygtuka

startBtn.addEventListener('click', startTime)

function startTime() {
    console.log('paleidziu laika');

    if (flag) {
        clearInterval(countTime)
        flag = false
        changeButton()
    } else {

        showTime(myTime)
        // timeH.innerHTML = `${myTime}`

        countTime = setInterval(() => {
            myTime++;
            showTime(myTime)
            if (myTime === 0) {
                clearInterval(countTime)
            }
        }, 100);

        flag = true;
        changeButton()

    };

}

const resetBtn = document.querySelector('.reset-button')
resetBtn.addEventListener('click', resetTime)


// funkcija laiko skaiciavimui 

function showTime(seconds) {
    const hour = Math.floor(seconds / 60)
    const min = Math.floor(seconds / 60)
    const sec = Math.floor(seconds / 60);
    const milSec = Math.floor(seconds % 60)
    timeH.innerHTML = `${min < 10 ? '0' : ''}${hour} : ${min < 10 ? '0' : ''}${min} : ${sec < 10 ? '0' : ''}${sec} : ${sec < 10 ? '' : ''}${milSec}`
}


function changeButton() {
    flag != flag

    if (flag) {
        startBtn.innerHTML = 'STOP'
        startBtn.style.backgroundColor = 'red'
        startBtn.style.borderRadius = '8px'
        startBtn.style.border = '1px'
    } else {
        startBtn.innerHTML = 'START'
        startBtn.style.backgroundColor = 'grey';
        startBtn.style.borderRadius = '8px';
        startBtn.style.border = '1px'
    };
}


function resetTime() {
    console.log('paspaudziau reset');
    clearTimeout(countTime)
    myTime = 0
    timeH.textContent = `00 : 00 : 00 : 00`
}

