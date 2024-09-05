 let randomNumber1 = Math.floor(Math.random() * 6)+1;
 let randomDice   = "dice" + randomNumber1 + ".png";
 let randomImage = randomDice;

let player1 = document.querySelectorAll("img")[0];
player1.setAttribute("src", randomImage);

let randomNumber2 = Math.floor(Math.random() * 6) + 1;
let randomDice2 = "dice" + randomNumber2 + ".png";
let player2 = document.querySelectorAll("img")[1];
player2.setAttribute("src", randomDice2);

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML ="Weldone player1, u get "+ randomNumber1+ "point";
}else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML ="Weldone player2, u get "+ randomNumber1+ "point";
}else{
   document.querySelector("h1").innerHTML ="Draw "+ randomNumber1+ "point each";
}