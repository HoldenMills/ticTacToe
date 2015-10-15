//ruby -r un -e httpd . -p 5000//

$(document).ready(function() {
  var boxes = ['','','','','','','','','']
//$('main-button').html('Click to Play')

  var lastSelected = 'X';
//Attaches click handler to parent 'grid'
  $( "#grid").on( "click", function(event) {
    // determine the element that saw the click event, it's a button
    var elementSelected = event.target;
    var cellNumberClicked = $(elementSelected).data('cell');

    console.log("clicked " + cellNumberClicked);

    if(lastSelected === 'X'){
      $(elementSelected).html('O');
        lastSelected = 'O';
        boxes[cellNumberClicked] = 'O';
    } else {
      $(elementSelected).html('X');
        lastSelected = 'X';
        boxes[cellNumberClicked] = 'X';
    }

    console.log("boxes is " + boxes);
  });

});



