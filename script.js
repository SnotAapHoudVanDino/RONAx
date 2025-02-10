// Toegangscode en de functie die de code verifieert
const correctCode = "28/07/2024";

// Functie om de alert met de boodschap "Ik hou van je!" te tonen
function showLoveAlert() {
  alert("Ik hou van je, Robin! ❤️");
}

// Functie om te controleren of de ingevoerde code juist is
function checkAccessCode() {
  const enteredCode = document.getElementById("access-code").value;

  if (enteredCode === correctCode) {
    // Als de code correct is, verberg de toegangscode sectie en toon de hoofdinhoud
    document.getElementById("access-section").style.display = "none";
    document.getElementById("main-content").style.display = "block";
  } else {
    // Als de code fout is, laat een foutmelding zien
    document.getElementById("access-error").style.display = "block";
  }
}
