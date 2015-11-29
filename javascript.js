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
      $(elementSelected).html('X');
      getWinner(lastSelected);
        lastSelected = 'O';
        //Step 5: add the X or O to boxes
        box[cellNumberClicked] = 'X';
    }
    //If previous element was O then return X
    else {
      $(elementSelected).html('O');
      getWinner(lastSelected);
        lastSelected = 'X';
        box[cellNumberClicked] = 'O';
    }
  });
  //Step 6: check for winner
  // Checks for all possible winning combinations with X or O

  var boxes = $('#grid').children();

  var getWinner = function getWinner(lastSelected) {
     //rows
    for(var index = 0; index < 3; index++) {
      if (boxes.eq(3 * index).text() === lastSelected &&
        boxes.eq(3 * index + 1).text() === lastSelected &&
        boxes.eq(3 * index + 2).text() === lastSelected &&
        boxes.eq(3 * index).text() !== '')
        {
        alert('Player ' + lastSelected + ' won!');
        return true;
      }
    }

  // cols
   for (index = 0; index < 3; index++) {
     if (boxes.eq(index).text() === lastSelected &&
        boxes.eq(index + 3).text() === lastSelected &&
        boxes.eq(index + 6).text() === lastSelected &&
        boxes.eq(index).text() !== '')
        {
        alert('Player ' + lastSelected + ' won!');
        return true;
        }
    }

 // diag
   if ((boxes.eq(0).text() === lastSelected &&
      boxes.eq(4).text() === lastSelected &&
      boxes.eq(8).text() === lastSelected &&
      boxes.eq(8).text() !== '') ||
      (boxes.eq(2).text() === lastSelected &&
      boxes.eq(4).text() === lastSelected &&
      boxes.eq(6).text() === lastSelected &&
      boxes.eq(2).text() !== ''))
      {
      alert('Player ' + lastSelected + ' won!');
      return true;
    }

      if getWinner === false && (boxes.every.text() !== '')
        alert('You\'re all miserable and weak!  Tie game' )
    };
  else {
    return false;
  }
};

});
