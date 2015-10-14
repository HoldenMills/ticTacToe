$(document).ready(function() {
 var squares = ['','','','','','','','','']
$('main-button').html('Click to Play')

$('board').on('click', function(event){
  console.log
})
}

console.log("The target of the click event was ", event.target);
   var squareClickedOn = event.target;
   console.log("dkjfdkj");
   var squareClickedId = $(squareClickedOn).data('square');
    console.log("id is ", squareClickedId);
    squares[squareClickedId] = "X";
    $(squareClickedOn).html("X");
