

$(document).ready(function() {
 var squares = ['','','','','','','','','']
$('main-button').html('Click to Play')

$('board').on('click', function(event){
  console.log
})
});

   var squareClickedOn = event.target;
   console.log("dkjfdkj");
   var squareClickedId = $(squareClickedOn).data('square');
    console.log("id is ", squareClickedId);
    squares[squareClickedId] = "X";
    $(squareClickedOn).html("X");
