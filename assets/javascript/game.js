$(document).ready(function() {

//Declaro las variables
var randomScore = getRndInteger(19,120);
var wins = 0;
var losses = 0;
var totalScore = 0;
var resetGame = false;

//Creo variables ligadas a un ID
var randomNumberText = $("#randomNumber-text");
var winsText = $("#wins-text");
var lossesText = $("#losses-text");
var totalScoreText = $("#totalScore-text");


//Display de los resultados en el HTML
winsText.text(wins);
lossesText.text(losses);
totalScoreText.text(totalScore);
totalScore = parseInt(totalScore);

//Reset Game
function reset() {
    totalScore = 0;
    totalScoreText.text(totalScore);
    totalScore = parseInt(totalScore);
    randomScore = getRndInteger(19,120);
    console.log(randomScore);
    randomNumberText.text(randomScore);
    randomScore = parseInt(randomScore);

    $(".col-md-3").each(function() {

        //Make the computer pick a number between 1 and 12
        var randomCrystals = Math.floor(Math.random() * 12) + 1;
        console.log(randomCrystals);
        randomCrystals = parseInt(randomCrystals);
    
        //Using the keyword this we can get the value for the clicked button
        $(this).val(randomCrystals);
    });

}

//Genera un numero random entre 19 y 120
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
console.log(randomScore);
randomNumberText.text(randomScore);
randomScore = parseInt(randomScore);

//Genera un numero random para cada uno de los cristales
$(".col-md-3").each(function() {

    //Make the computer pick a number between 1 and 12
    var randomCrystals = Math.floor(Math.random() * 12) + 1;
    console.log(randomCrystals);
    randomCrystals = parseInt(randomCrystals);

    //Using the keyword this we can get the value for the clicked button
    $(this).val(randomCrystals);
})

//Sumar los valores de cada crystal
$(".col-md-3").on("click", function() {
    var valorCrystal = $(this).val();
    valorCrystal = parseInt(valorCrystal);
    var total = totalScore + valorCrystal;
    totalScore = totalScore + valorCrystal;
    totalScoreText.text(total);  
    checkWin ();
    if (resetGame == false){
        checkLoss ();    
    }  
    resetGame = false;  
})

// Validar si ganas o pierdes y actualizar el contador
function checkWin() {
if (randomScore == totalScore) {
    wins++;    
    resetGame = true;
    winsText.text(wins);
    $("#result-text").html("<p>You won!!!</p>");  
    reset ();  
    }
}

function checkLoss() {
    if (randomScore < totalScore) {
    losses++;    
    resetGame = true;
    lossesText.text(losses);
    $("#result-text").html("<p>You lost!!!</p>");
    reset ();
    }
}

});