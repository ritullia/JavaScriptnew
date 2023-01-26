// console.log('veikia')

// const networkRequest = () => {
//     setTimeout(() => {
//         console.log("Async code")
//     }, 2000)
// }


// let promise = new Promise((resolve, reject)=>{
//     // if(okay){
//     //     resolve(value)
//     // } else {
//     //     reject(error)
//     // }

//     setTimeout(() => {
//         resolve('Viskas, ok')
//     }, 5000);


//     // if(false){
//     //     resolve('Viskas ok');
//     // } else {
//     //     reject("Viskas ne ok")
//     // }

//     // resolve('Viskas ok');
//     // // console.log("kazkas")
//     // reject("Viskas ne ok")
// });

// promise.then(
//     (result) => {alert(result)}, 
//     (error)=>{alert(error)}
// )




// Parašykite pažadą, kuris visada resolve'insis po 5 sekundžių. Jam resolve - išoka alert "yes, veikia!". Pažado aprašyme teks naudoti setTimeOut.

// Pakoreguokite pirmą pratimą, kad būtų:
// -----  4/5 tikimybė, jog resolve'ins po 5 sekundžių, ir
// -----  1/5 tikimybė, kad po 5 sekundžių bus reject.

// Then bendrauja su kitu then. Pakoreguokite antrą pratimą, kad jei resolve'inasi pirmas pažadas - pasileidžia then(), kuris paprasčiausiai grąžina žinutę "this is a message", šią žinutę pagauna antrasis then() ir ją alertina. Prisiminkime - ką then() returnina, tą pasigauna kitas then() kaip parametrą.


let promise = new Promise((resolve, reject) => {

    if(Math.floor(Math.random() * (10) + 1) <= 8){
        setTimeout(() => {
            resolve('yes, veikia')
        }, 5000);
    } else {
        setTimeout(() => {
            reject('Neveikia')
        }, 5000);
    }


})

promise
    .then((result)=>{return 'This is message'})
    .then((result) => {
        alert(result);
        return 'this is not a message'
    })
    .catch((error) => alert(error))
// console.log('kazkas')



