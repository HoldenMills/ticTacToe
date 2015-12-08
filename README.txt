The three main componenets of my code can be found on index.html, javascript.js, and style.css.  The rest are pieces of non-functioning code I used or tried to use while designing my game.

I started with the html document to design the layout.  I decided to use buttons since I thought it would be easier to click on them because of their set properties (I was wrong).

My biggest challenge was breaking down the problem into smaller steps.  I tried to figure out how to get each button on my game board to show an 'X' or 'O', but got sidetracked by trying to add a 'player' variable that would determine whether to display an X or O.  I learned to work from the top of a document (when it loads) to the bottom.  Start simple and overwrite code then simplify afterwards instead of trying to add undefined variables.

I could not get the getWinner function to work.  No matter how pedantic I was nothing seemed to work.  I laid everything out to the bare elements of arrays, but it still wouldn't cooperate.  The website loads without any error messages.

I have refactored the code and added styling.
I believe the winner alerts are repeated because I invoke the checkWinner function twice.
