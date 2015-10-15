//ruby -r un -e httpd . -p 5000//

//Step 1: determine when page loads
//runs function after (document) loads treats page like a giant function
$(document).ready(function() {

  //Step 2: create an array of squares
  // creates array of empty strings
  var box = ['','','','','','','','',''];

//$('main-button').html('Click to Play')
  //sets X to last clicked (selected) box
  var lastSelected = 'X';
//Step 3: Attach a click hander to each square
//Attaches click handler to parent 'grid'
//# denotes id element which is a child of div class board
//.on is the click handler,  "click" is action?
//$ represents jquery getting elemment from index.html
  $( "#grid").on( "click", function(event) {
    // determine the element that saw the click event, it's a button
    //event is the click handler, target is the button
    var elementSelected = event.target;
    //Step 4: Get the cell number clicked
    //getting cell number selected by the click from line 15
    var cellNumberClicked = $(elementSelected).data('cell');

    console.log("click" + cellNumberClicked);
    //Step 5: Change the cell HTML to X or O
    //This code alternates between X and O
    if(lastSelected === 'X') {
      $(elementSelected).html('O');
        lastSelected = 'O';
        //Step 5: add the X or O to boxes
        box[cellNumberClicked] = 'O';
    }
    //If previous element was O then return X
    else {
      $(elementSelected).html('X');
        lastSelected = 'X';
        box[cellNumberClicked] = 'X';
    }
  }
  //Step 6: check for winner
  // Checks for all possible winning combinations with X or O
  );
  var winner = function getWinner() {
    if (box[0] == 'O' && box[1] == 'O' && box[2] == 'O') {
      console.log("Player O Wins");
    }
    else if (box[3] == 'O' && box[4] == 'O' && box[5] == 'O') {
      console.log("Player O Wins");
    }
    else if (box[6] == 'O' && box[7] == 'O' && box[8] == 'O') {
      console.log("Player O Wins");
    }
    else if (box[0] == 'O' && box[3] == 'O' && box[6] == 'O') {
      console.log("Player O Wins");
    }
    else if (box[1] == 'O' && box[4] == 'O' && box[7] == 'O') {
      console.log("Player O Wins");
    }
    else if (box[2] == 'O' && box[5] == 'O' && box[8] == 'O') {
      console.log("Player O Wins");
    }
    else if (box[0] == 'O' && box[4] == 'O' && box[8] == 'O') {
      console.log("Player O Wins");
    }
    else if (box[2] == 'O' && box[4] == 'O' && box[6] == 'O') {
      console.log("Player O Wins");
    }

    else if (
        $box[0] === 'X' && $box[1] === 'X' && $box[2] === 'X' ||
        box[3] === 'X' && box[4] === 'X' && box[5] === 'X' ||
        box[6] === 'X' && box[7] === 'X' && box[8] === 'X' ||
        box[0] === 'X' && box[3] === 'X' && box[6] === 'X' ||
        box[1] === 'X' && box[4] === 'X' && box[7] === 'X' ||
        box[2] === 'X' && box[5] === 'X' && box[8] === 'X' ||
        box[0] === 'X' && box[4] === 'X' && box[8] === 'X' ||
        box[2] === 'X' && box[4] === 'X' && box[6] === 'X') {
      //return("Player X Won!");
      console.log("Player X Wins");
    }

    else {
      alert("Nobody Wins!");
    }
  };
});
