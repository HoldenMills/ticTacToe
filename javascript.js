$(document).ready(function() {

  var game = {
    board: ['','','','','','','','',''],
    token: 'X'
  };

  $(".board").on("click",":button",function() {

    var checkColumns = function checkColumns () {
      if (([game.board[0], game.board[3], game.board[6]].every(updateUi)) === game.token ||
         ([game.board[1], game.board[4], game.board[7]].every(updateUi)) === game.token ||
         ([game.board[2], game.board[5], game.board[8]].every(updateUi)) === game.token) {
        return true;
        }
        else {
          return false;
        }
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

      var checkDiagonals = function checkDiagonals () {
        if (([game.board[0], game.board[4], game.board[8]].every(updateUi)) === game.token ||
           ([game.board[2], game.board[4], game.board[6]].every(updateUi)) === game.token) {
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

    var updateBoard = function updateBoard (index) {
      game.board[index] = game.token;
    };
    var updateUi = function updateUi (element) {
        $(element).html(game.token);
    };

    var toggleTurn = function toggleTurn (element) {
    game.token === 'X' ? game.token = 'O' : game.token = 'X';
    };

    var markCell = function markCell () {
      updateBoard($(event.target).data('cell'));
      updateUi(event.target);
      checkWinner(game.board);
      toggleTurn();
    };
    markCell(event.target);
    console.log(game.board);
  });
});

// var checkTie = function checkTie() {
//   if checkWinner === false && game.board.every(!="") {
//     alert("It's a tie!  Play again!");
//   }
// };

// playGame(event.target);






