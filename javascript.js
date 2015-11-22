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
  }
  //Step 6: check for winner
  // Checks for all possible winning combinations with X or O
  );

 var boxes = $('#grid').children();

  var getWinner = function getWinner(lastSelected) {
     //rows
    for(var index = 0; index < 3; index++) {
      if (boxes.eq(3 * index).text() === lastSelected &&
         boxes.eq(3 * index + 1).text() === lastSelected &&
         boxes.eq(3 * index + 2).text() === lastSelected &&
         boxes.eq(3 * index).text() !== '')
         {
          console.log(lastSelected + 'won rows');
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
        console.log(lastSelected + 'won cols');
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
      console.log(lastSelected + 'won diags');
      return true;
  }
  return false;
};

  $(function(){
  'use strict';
  var sa = '//localhost:3000';
  $('#login').on('click', function(){
    $.ajax({
      url: sa + '/login',
      contentType: 'application/json',
      processData: false,
      data: JSON.stringify({
        credentials: {
          email: $('#email').val(),
          password: $('#password').val()
        }
      }),
      dataType: 'json',
      method: 'POST'
    }).done(function(data, textStatus, jqxhr) {
      $('#token').val(data['token']);
    }).fail(function(jqxhr, textStatus, errorThrown){
      $('#token').val('login failed');
    });
  });
  $('#register').on('click', function(){
    $.ajax(sa + '/register', {
      contentType: 'application/json',
      processData: false,
      data: JSON.stringify({
        credentials: {
          email: $('#email').val(),
          password: $('#password').val()
        }
      }),
      dataType: 'json',
      method: 'POST'
    }).done(function(data, textStatus, jqxhr) {
      $('#result').val(JSON.stringify(data));
    }).fail(function(jqxhr, textStatus, errorThrown){
      $('#result').val('registration failed');
    });
  });

  $('#games-index').on('click', function(){
    $.ajax(sa + '/games', {
      dataType: 'json',
      method: 'GET',
      headers: { Authorization: 'Token token=' + $('#token').val() }
    }).done(function(data, textStatus, jqxhr) {
      $('#result').val(JSON.stringify(data));
    }).fail(function(jqxhr, textStatus, errorThrown){
      console.log(errorThrown);
    });
  });

  $('#games-create').on('click', function(){
    $.ajax(sa + '/games',{
      contentType: 'application/json',
      processData: false,
      data: JSON.stringify({}),
      dataType: 'json',
      method: 'POST',
      headers: { Authorization: 'Token token=' + $('#token').val() }
    }).done(function(data, textStatus, jqxhr) {
      $('#result').val(JSON.stringify(data));
    }).fail(function(jqxhr, textStatus, errorThrown){
      console.log(errorThrown);
    });
  });

  $('#game-show').on('click', function(){
    $.ajax(sa + '/games/' + $('#id').val(), {
      dataType: 'json',
      method: 'GET',
      headers: { Authorization: 'Token token=' + $('#token').val() }
    }).done(function(data, textStatus) {
      data.game.cells.forEach(function(cell, i){
        $('#' + i).val(cell);
      });
      $('#result').val(JSON.stringify(data));
    }).fail(function(jqxhr, textStatus, errorThrown){
      console.log(errorThrown);
    });
  });

  var gamePatch = function(done, game) {
    $.ajax(sa + '/games/' + $('#id').val(), {
      contentType: 'application/json',
      processData: false,
      data: JSON.stringify(game),
      dataType: 'json',
      method: 'PATCH',
      headers: { Authorization: 'Token token=' +
      $('#token').val() }
    }).done(done).fail(function(jqxhr, status, errorThrown) {
      console.log(errorThrown);
    });
  };

  $('#game-join').on('click', function() {
    gamePatch(function(data, status, jqxhr) {
      $('#result').val(JSON.stringify(data));
    }, {game: {} });
  });

  $('#board').on('change', function(e) {
    var cell = {index: -1, value: ''};
    var $target = $(e.target);
    cell.index = $target.attr('id');
    cell.value = $target.val();
    gamePatch(function(data, status, jqxhr) {
      $('#result').val(JSON.stringify(data));
    }, {game: {cell: cell} });
  });

  $('#game-watch').on('click', function() {
    var game = resourceWatcher(sa + '/games/' +
      $('#id').val() + '/watch', {
          Authorization: 'Token token=' + $('#token').val(),
          timeout: 60
    });
    game.on('change', function(d){
      var data = JSON.parse(d);
      if (data.timeout) {
        game.close();
        return console.warn(data.timeout);
      }
      var gameData = data.game;
      var cell = gameData.cell;
      $('#' + cell.index).val(cell.value);
    });
    game.on('error', function(e){
      console.error(e);
    });
  });
});


    /*if (box[0] == 'O' && box[1] == 'O' && box[2] == 'O') {
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
      alert("Player O Wins");
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
      alert("Player X Wins");*/
    // }

    // else {
    //   alert("Nobody Wins!");
    // }
  // };
});
