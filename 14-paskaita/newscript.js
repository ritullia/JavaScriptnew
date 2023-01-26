




if(personAge < 17){
    document.getElementById("can").innerHTML = personAge + " " + "metų, alkoholis ir energetinis gėrimai pirkti draudžiama";
    document.getElementById('can').style.backgroundColor = 'red'
    document.getElementById('can').style.fontSize = '32px'
    document.getElementById('can').style.paddingBottom = '32px'
    document.getElementById('can').style.width = '420px';

} else if(personAge >= 18 && personAge <= 20){
    document.getElementById("can").innerHTML = personAge + " " + "metai, galima įsigyti energetinius gėrimus";
    document.getElementById('can').style.backgroundColor = 'orange'
    document.getElementById('can').style.fontSize = '32px'
    document.getElementById('can').style.paddingBottom= '32px';
    document.getElementById('can').style.width = '420px'

}  else if(personAge >= 21 && personAge < 100){
    document.getElementById("can").innerHTML = personAge + " " + "metai, galima įsigyti stipriuosius ir energetinius gėrimus";
    document.getElementById('can').style.backgroundColor = 'green'
    document.getElementById('can').style.fontSize = '32px'
    document.getElementById('can').style.paddingBottom= '32px';
    document.getElementById('can').style.width = '420px'

} else if(NaN !== personAge){
    document.getElementById("can").innerHTML = personAge + " " + "tai ne skaičius. Įrašykite skaičių";
    document.getElementById('can').style.backgroundColor = 'yellow'
    document.getElementById('can').style.fontSize = '32px'
    document.getElementById('can').style.paddingBottom = '32px';
    document.getElementById('can').style.width = '420px'

}