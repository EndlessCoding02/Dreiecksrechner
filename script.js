const leinwand = document.getElementById("graf");
const rechnerfeld = document.getElementById("rechner");
const zeichnung = leinwand.getContext("2d");
const winkelbeta = document.getElementById("beta");
const Galpha = document.getElementById("Gegegenkathete_Alpha");
const Aalpha = document.getElementById("Ankathete_Alpha");

var leinwandBreite;
var leinwandHoehe = 200;
var randabstand = 10;


// *** funktion die geladen werden beim aufrufen der Website
window.onload = function () {
  console.log('Dokument geladen');
  leinwandBreite = rechnerfeld.clientWidth;
  leinwand.width = leinwandBreite;
  leinwand.height = leinwandHoehe;
  simpleTriangle();
}

// *** function zum berechnen vom Winkel Beta, Gegenkathete von Alpha und Ankathete von Alpha
function script() {

  var winkelumme = 180;
  var rechterwinkel = 90;
  var winkelalpha = document.getElementById("alpha").value;
  winkelbeta.value = winkelumme - rechterwinkel - winkelalpha;
  let HYPOTHENUSE = document.getElementById("hypothenuse").value;

  Galpha.value = HYPOTHENUSE*Math.sin((Math.PI/180)*winkelalpha).toFixed(2);
  Aalpha.value = HYPOTHENUSE*Math.cos((Math.PI/180)*winkelalpha).toFixed(2);

}

// *** function zum zeichen des Dreiecks
function simpleTriangle() {
  zeichnung.lineWidth = 3;
  zeichnung.strokeStyle = "Blue";
  zeichnung.beginPath();
  zeichnung.moveTo(leinwandBreite - randabstand, leinwandHoehe - randabstand);
  zeichnung.lineTo(300, randabstand);
  zeichnung.lineTo(randabstand, leinwandHoehe - randabstand);
  zeichnung.lineTo(leinwandBreite, leinwandHoehe);
  zeichnung.stroke();
}