// v0.1

// Inserisci guadagno annuale
var guadagnoAnnuale = 65000;

// Inserisci il coefficiente
var coefficiente = 78;

// Inserisci l'imposta sostitutiva
var impSostitut = 15;

// Calcolo reddito imponibile
var redImp = (guadagnoAnnuale * coefficiente) / 100;
console.log(redImp);

// Imposta da pagare
var imposta = (redImp * impSostitut) / 100;
console.log("Imposta sostitutiva al " + impSostitut + "%: " + imposta + "€");
