// v0.3

function calcolaGuadagno() {
	let letVarGuadagn = document.getElementById("guadagno-annuale").value; // Prendere valore nel campo "Guadagno annuale"
	let coefficiente = document.getElementById("coefficiente-redditivita").value; // Prende valore nel campo "Coeffficiente di Redditività"
	console.log(coefficiente);

	let impSostitut = document.getElementById("imposta-sostitutiva").value; // Prendere valore nel campo "Imposta sostitutiva"

	// Calcolo reddito imponibile
	let redImp = (letVarGuadagn * coefficiente) / 100;
	console.log(redImp);

	// Imposta da pagare
	let imposta = (redImp * impSostitut) / 100;
	console.log("Imposta sostitutiva al " + impSostitut + "%: " + imposta + "€");

	document.getElementById("guadagno-annuale").textContent = "Guadagno inserito: " + letVarGuadagn + "€";
	document.getElementById("imposta").textContent = "Imposta da pagare: " + imposta + "€";
}
