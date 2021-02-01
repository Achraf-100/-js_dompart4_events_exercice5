let recup = document.querySelectorAll('input')[0];

let test = () => {
    recup.style.backgroundColor = 'blue';
}

recup.addEventListener('focus',test);




let recup1 = document.querySelectorAll('input')[1];

let test1 = () => {
    recup1.style.backgroundColor = 'blue';
}
let test11 = () => {
    recup1.style.backgroundColor = 'red';
}

recup1.addEventListener('focus',test1);
recup1.addEventListener('focusout',test11)



// Exo 3
let recupP1 = document.getElementsByClassName("premierParagraphe")[0];
let recupP2 = document.getElementsByClassName("secondParagraphe")[0];
let recupP3 = document.getElementsByClassName("dernierParagraphe")[0];
let recupButton = document.getElementsByClassName("buttonExo")[0];

recupButton.addEventListener("click", () => {
  recupP1.textContent = recupP2.textContent;
  recupP3.textContent = recupP2.textContent;
});

// Exo 4

let myInputExo4 = document.querySelectorAll("input")[2];
let recupButtonExo4 = document.getElementsByClassName("buttonExo")[1];
let nameExo4 = document.querySelector("#exo4");
recupButtonExo4.addEventListener("click", () => {
  nameExo4.innerText = myInputExo4.value;
});

// Exo 5
let btn3 = document.getElementsByClassName("btn")[2];
let img1 = document.getElementsByClassName("img-responsive")[0];
let exo5P = document.getElementsByTagName("p")[4].innerText;

btn3.addEventListener("click", () => {
  // Récupère l'index du point dans la chaine de caractère "Chemin : ./src/image/tartine.png" et stock cet index dans la variable indexPoint
  let indexPoint = exo5P.indexOf(".");
  // On ce sert de la methode slice sur la chaine de caractère "Chemin : ./src/image/tartine.png" pour ne garder que le texte a partir de l'index contenu dans la variable indexPoint
  let cheminExo5P = exo5P.slice(indexPoint);

  img1.src = cheminExo5P;
});

//6
let imgSecond = document.querySelectorAll("img")[1];
let imgthird = document.querySelectorAll("img")[2];
let stock = "";

let stockimg = () => {
  stock = imgSecond.attributes[1].value;
};
let remplaceimg = () => {
  imgthird.attributes[1].value = stock;
};

imgSecond.addEventListener("click", stockimg);
imgthird.addEventListener("click", remplaceimg);

// Exo 7
let exo7Button = document.querySelectorAll("button.btn")[3];
let exo7P1 = exo7Button.previousElementSibling;
let exo7P2 = exo7Button.nextElementSibling;
let exo7Temp = "";

let interChange = () => {
  exo7Temp = exo7P1.innerText;
  exo7P1.innerText = exo7P2.innerText;
  exo7P2.innerText = exo7Temp;
};

exo7Button.addEventListener("click", interChange);
