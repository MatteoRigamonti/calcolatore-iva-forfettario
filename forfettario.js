// v0.2

// Inserisci guadagno annuale
let guadagnoAnnuale = 65000;

// Inserisci il coefficiente
let coefficiente = 78;

// Inserisci l'imposta sostitutiva
let impSostitut = 15;

// Calcolo reddito imponibile
let redImp = (guadagnoAnnuale * coefficiente) / 100;
console.log(redImp);

// Imposta da pagare
let imposta = (redImp * impSostitut) / 100;
console.log("Imposta sostitutiva al " + impSostitut + "%: " + imposta + "€");

document.getElementById("guadagno-annuale").textContent = "Guadagno inserito: " + guadagnoAnnuale + "€";
document.getElementById("imposta").textContent = "Imposta da pagare: " + imposta + "€";
