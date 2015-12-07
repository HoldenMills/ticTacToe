$(document).ready(function() {
  $(".board").on("click",":button",function(event) {

var game = {
  board: ['','','','','','','','',''],
  token: 'X'
};

var markCell = function markCell (element) {
  updateBoard($(element).data('cell'));
  updateUi(element);
};
var updateBoard = function updateBoard (index) {
  game.board[index] = game.token;
};

var updateUi = function updateUi (element) {
  $(element).html(game.token);
};

var toggleTurn = function toggleTurn () {
  game.token === 'O' ? game.token = 'X' : game.token = 'O';
};



var checkRows = function checkRows () {
  game.board.slice(0, 3).every(function (cell) {
    return cell === game.token;
  });

  game.board.slice(3, 6).every(function (cell) {
    return cell === game.token;
  });

  game.board.slice(6, 9).every(function (cell) {
    return cell === game.token;
  });

  return false;
};

var checkColumns = function checkColumns () {
  if (([game.board[2], game.board[5], game.board[8]].every(updateBoard)) === game.token ||
     ([game.board[2], game.board[5], game.board[8]].every(updateBoard)) === game.token ||
     ([game.board[2], game.board[5], game.board[8]].every(updateBoard)) === game.token) {
    return true;
    }
  else {
    return false;
  }
};

var checkDiagonals = function checkDiagonals () {
  if (([game.board[0], game.board[4], game.board[8]].every(updateBoard)) === game.token ||
     ([game.board[2], game.board[4], game.board[6]].every(updateBoard)) === game.token) {
  return true;
  }
  else {
    return false;
  }
};

var checkWinner = function checkWinner () {
  // check functions should return a token or null
  if (checkRows() || checkColumns() || checkDiagonals()) {
    alert(game.token + ' is the winner!');
  }
};



  markCell(event.target)
  toggleTurn();

  checkWinner();
});
});

