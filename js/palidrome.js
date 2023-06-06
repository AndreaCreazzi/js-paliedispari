// controllo js
console.log(`JS OK`);

// funzione parola polindroma
function wordPalindrome(word) {

    // lungezza della parola
    const len = word.length;

    // ciclo per la parola
    for (let i = 0; i < len / 2; i++) {

        // controllo della lettera inziale e finale
        if (word[i] !== word[len - 1 - i]) {
            return 'non è un nome polindromo';
        }
    }
    return 'è un nome polindromo';
}

// risposta dell'utente
const word = prompt('Dimmi il tuo nome');

// richiamo della funzione
const result = wordPalindrome(word);

console.log(result);