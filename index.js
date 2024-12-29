var imgAtual1 = "../assets/creatina.jpg";
var imgAtual2 = "../assets/preTreino.png";
var imgAtual3 = "../assets/whey.jpg";

var imgPosterior1 = "../assets/creatina2.jpg";
var imgPosterior2 = "../assets/preTreino2.webp";
var imgPosterior3 = "../assets/whey2.jpg";

function trocar() {
    document.getElementById("primeiraImagem1").src = imgAtual1;
    let aux1 = imgAtual1;
    imgAtual1 = imgPosterior1;
    imgPosterior1 = aux1

    document.getElementById("primeiraImagem2").src = imgAtual2;
    let aux2 = imgAtual2;
    imgAtual2 = imgPosterior2;
    imgPosterior2 = aux2

    document.getElementById("primeiraImagem3").src = imgAtual3;
    let aux3 = imgAtual3;
    imgAtual3 = imgPosterior3;
    imgPosterior3 = aux3
}

