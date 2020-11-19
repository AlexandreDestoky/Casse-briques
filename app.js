let dvd = document.querySelector(".dvd svg");
dvd.style.position = "relative";
dvd.style.top = "0px";
dvd.style.left = "0px";
dvd.style.fill = "rgb(24,32,45)";
let test = true;
let test2 = true;

//GENERATION DE LA COULEUR DU LOGO
let couleurAleatoire = () => {
  let rouge = Math.floor(Math.random() * 256);
  let vert = Math.floor(Math.random() * 256);
  let bleu = Math.floor(Math.random() * 256);
  dvd.style.fill = `rgb(${rouge},${vert},${bleu})`;
};

couleurAleatoire();

let hauteurDocument = document.body.offsetHeight;
let largeurDocument = document.body.offsetWidth;

let hauteurMax = hauteurDocument - 107;
let largeurMax = largeurDocument - 211;

setInterval(() => {
  mouvement();
}, 8);

let mouvement = () => {
  if (parseFloat(dvd.style.top) < hauteurMax && test == true) {
    dvd.style.top = parseFloat(dvd.style.top) + 1 + "px";
  } else {
    test = false;
    dvd.style.top = parseFloat(dvd.style.top) - 1 + "px";
    parseFloat(dvd.style.top) == 0 ? (test = true) : (test = false);
  }

  if (parseFloat(dvd.style.left) < largeurMax && test2 == true) {
    dvd.style.left = parseFloat(dvd.style.left) + 1 + "px";
  } else {
    dvd.style.left = parseFloat(dvd.style.left) - 1 + "px";
    parseFloat(dvd.style.left) == 0 ? (test2 = true) : (test2 = false);
  }

  if (
    parseFloat(dvd.style.top) == 0 ||
    parseFloat(dvd.style.left) == 0 ||
    parseFloat(dvd.style.left) == largeurMax ||
    parseFloat(dvd.style.top) == hauteurMax
  ) {
    couleurAleatoire();
  }
};
