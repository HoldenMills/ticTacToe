'use strict';

$(document).ready(function() {
  var game = {
    board: ['','','','','','','','',''],
    token: 'X'
  };
  numMoves = 0;
  var box = function (cell) {
        return cell === game.token;
      };

  var checkColumns = function checkColumns () {
    if (([game.board[0], game.board[3], game.board[6]].every(box)) ||
       ([game.board[1], game.board[4], game.board[7]].every(box)) ||
       ([game.board[2], game.board[5], game.board[8]].every(box)) ) {
      return true;
      }
      else {
        return false;
      }
    };

  var checkRows = function checkRows () {
    if (game.board.slice(0, 3).every(box) ||
        game.board.slice(3, 6).every(box) ||
        game.board.slice(6, 9).every(box) ) {
    return true;
    }
    else {
    return false;
    }
  };

  var checkDiagonals = function checkDiagonals () {
    if (([game.board[0], game.board[4], game.board[8]].every(box)) ||
       ([game.board[2], game.board[4], game.board[6]].every(box)) ) {
    return true;
    }
    else {
      return false;
    }
  };

  var checkWinner = function() {
    if (checkColumns() !== false || checkRows() !== false || checkDiagonals() !== false) {
    alert('Player ' + game.token + ' wins!');
    return true;
    }
    else {
    return false;
    }
  };
  // var playGame = function (element) {
  var checkTie = function checkTie() {
    if (checkWinner === false && ([game.board.every(box) !== "" {
      alert("It's a tie!  Play again!");
    };


{
if(xTurn)
{
numMoves++;
}
else if(computerTurn == true)
{
status.innerHTML = 'X\'s turn';
xTurn = true;
computerTurn = false;
numMoves++;
square.value = 'O';
}
}
else
{
alert('That square has already been played.');
}

  var gameCount = function gameCount() {
    for (i=0; i<10 ;i++) {}
  };

  var updateBoard = function updateBoard (index) {
    game.board[index] = game.token;
  };
  var updateUi = function updateUi (element) {
      $(element).html(game.token);
  };

  var toggleTurn = function toggleTurn () {
  game.token === 'X' ? game.token = 'O' : game.token = 'X';
  };

  var markCell = function markCell (event) {
    updateBoard($(event.target).data('cell'));
    updateUi(event.target);
    checkWinner();
    checkTie();
    toggleTurn();
  };
  $(".board").on("click",":button",function(event) {
    markCell(event);
    console.log(game.board);
  });
});



// playGame(event.target);






