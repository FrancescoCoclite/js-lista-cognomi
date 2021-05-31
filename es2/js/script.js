// esercizio 2

// chiedi all’utente il cognome
// inseriscilo in un array con altri cognomi: ‘Bianchi’, ‘Neri’, ‘Rossi’, ‘Verdi’, ‘Gialli’
// stampa la lista ordinata alfabeticamente
// scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova

var cognome = prompt('Inserisci il tuo Cognome');


var cognomeCapitalized = cognome.charAt(0).toUpperCase() + cognome.slice(1).toLowerCase();
console.log(cognomeCapitalized);

var listaCognomi = ['Bianchi', 'Neri', 'Rossi', 'Verdi', 'Gialli'];

listaCognomi.push(cognomeCapitalized);
console.log(listaCognomi);

listaCognomi.sort()
console.log(listaCognomi);
