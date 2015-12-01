$(document).ready(function() {

  var box = ['','','','','','','','',''];
  var lastSelected = 'X';

  $( "#grid").on( "click", function(event) {
    var elementSelected = event.target;
    var cellNumberClicked = $(elementSelected).data('cell');
    console.log("click" + cellNumberClicked);

    if(lastSelected === 'X') {
      getWinner(lastSelected);
      $(elementSelected).html('X');
        lastSelected = 'O';
        box[cellNumberClicked] = 'X';
    }

    else {
      $(elementSelected).html('O');
      getWinner(lastSelected);
        lastSelected = 'X';
        box[cellNumberClicked] = 'O';
    }
  });

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
  };

  // for(var index = 0; index < 9; index++) {
  if (getWinner === false &&
    box[0] !== '' &&
    box[1] !== '' &&
    box[2] !== '' &&
    box[3] !== '' &&
    box[4] !== '' &&
    box[5] !== '' &&
    box[6] !== '' &&
    box[7] !== '' &&
    box[8] !== '' )
    {
      alert('Tie');
      return true;
    };
  return false;
});


