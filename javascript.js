//ruby -r un -e httpd . -p 5000//

*$(document).ready(function() {
 var boxes = ['','','','','','','','','']
//$('main-button').html('Click to Play')

})
});

var myFunction =

var boardArray = document.getElementsByClassName(board);

$.each(function(boardArray, changeText) {
});

  function changeText() {
    button.addEventListener("click", myFunction);

function myFunction() {
    button.innerHTML = button.Attribute("X");
  }

  /*var button = $("button");
button.on("click", function() {
  button.text(X);



  /*var boardArray =

   var boxClickedOn = event.target;
   var boxClickedId = $(boxClickedOn).button('box');
    console.log("id is ", boxClickedId);
    boxes[boxClickedId] = "X";
    $(boxClickedOn).value("X");

    clicked = new Array();
  content = new Array();
  winningCombinations = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

  for(var l = 0; l <= 8; l++){
    clicked[l] = false;
    content[l]='';

  /*function onclick(boxNumber){

  theBoard = "button"+boxNumber;
  c = document.getElementById(theBoard);

  if(clicked[boxNumber-1] ==false) {
    if(turn%2==0){
      value[boxNumber] = 'X';
    }
    else{
    value[boxNumber] = 'O';
    }

//Global Variables

/*var clicked;
var content;
var winningCombinations;
var turn = 0;
var theBoard;
var c;
var boxesFilled = 0;

window.onload=function() {

  clicked = new Array();
  content = new Array();
  winningCombinations = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

  for(var l = 0; l <= 8; l++){
    clicked[l] = false;
    content[l]='';
  }
}

function onclick(boxNumber){

  theBoard = "button"+boxNumber;
  c = document.getElementById(theBoard);

  if(clicked[boxNumber-1] ==false) {
    if(turn%2==0){
      value[boxNumber] = 'X';
    }
    else{
    value[boxNumber] = 'O';
    }

    turn++;
    clicked[boxNumber-1] = true;
    squaresFilled++;
    content = checkForWinners(content[boxNumber-1);

    if(boxesFilled==9){
    alert("THE GAME IS OVER!");
    location.reload(true);
    }
  }
    else{
    alert("THAT SPACE IS ALREADY OCCUPIED");
    }
}

function checkForWinners(symbol){
  for(var a = 0; a < winningCombinations.length; a++){
    if(content[winningCombinations[a][0]]==symbol&&content[winningCombinations[a][1]]== symbol&&content[winningCombinations[a][2]]==symbol){
      alert(symbol+ " WON!");
      playAgain();
    }
  }
}

function playAgain() {

  y=confirm("PLAY AGAIN?");

  if(y==true){
    alert("OKAY!");
    location.reload(true);
  }

  else{
    alert("SO LONG!");
  }
}
