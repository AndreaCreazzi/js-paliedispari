// controllo js
console.log(`JS OK`);

// funzione per il random
function randomizer(min , max){
    return Math.floor(Math.random() * (max - min) + min);
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
const result = userNumber + cpuNumber;
console.log(`il totale è:` , result);

// funzione per i numeri pari e dispari
let winner = ``;
function evenOdd(winner){
    winner = `ha vinto il computer`;
    if(result % 2 == 0) {
        console.log(`il numero è pari`)
        if(userChoice === `pari`){
            winner = `hai vinto`;
        }
    }
    else {
        console.log("il numero è dispari");
        if(userChoice === `dispari`){
            winner = `hai vinto`;
        }
    }
    return winner;
}

// dichiarazione vincitore
console.log(evenOdd());

