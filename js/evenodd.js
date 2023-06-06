// controllo js
console.log(`JS OK`);

// funzione per il random
function randomizer(min , max){
    return Math.floor(Math.random() * (max - min) + min);
}

// funzione per i numeri pari e dispari
function evenOdd(){
    if(sum % 2 == 0) {
        console.log("ha vinto il pari");
    }else {
        console.log("ha vinto il dispari");
    }
}

// scelta utente tra pari o dispari
const userChoice = prompt(`Pari o Dispari`);
console.log(userChoice);

// scelta utente tra 1 a 5
const userNumber = parseInt(prompt(`scegli tra 1 a 5`));
console.log(`numero user:` , userNumber);

// numero per la CPU
const cpuNumber = randomizer(1 , 5);
console.log(`numero CPU:` , cpuNumber);

// somma dei numeri dell'utente e CPU
const sum = userNumber + cpuNumber;
console.log(`il totale è:` , sum);

// controllo e dichiarazione del vincitore
if(sum === evenOdd());