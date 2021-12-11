// this function keeps track of who's turn it is (X or O)
function startGame()
{
    document.turn = "X";
    document.winner=null;
    setMessage(document.turn + " gets to start.");
}

// this function displays the message inside HTML (“ X turn”, “O turn, "Congratulations you have won the game”)
function setMessage(msg)
{
    document.getElementById("message").innerText = msg;
}

// this function assigns the next move
function nextMove(square) 
{
    if (square.innerText == "") 
    {
        square.innerText = document.turn;
        console.log(square);
        switchTurn();
    } 
    else 
    {
        setMessage("That square is already used.");
    }
}
   
// switch the turn
function switchTurn() 
{
    if (checkForWinner(document.turn)) 
    {
        setMessage("Congratulations, " + document.turn + "! You win!");
    } 
    else if (document.turn == "X") 
    {
        document.turn = "O";
        setMessage("It's " + document.turn + "'s turn!");
    } 
    else {
        document.turn = "X";
        setMessage("It's " + document.turn + "'s turn!");
    }
}


// this function checks for the winner
function checkForWinner(move) 
{
    // variable is declared and initialized to false
    var result = false;
    if (checkRow(1, 2, 3, move) || checkRow(4, 5, 6, move) || checkRow(7, 8, 9, move) || checkRow(1, 4, 7, move) ||
        checkRow(2, 5, 8, move) || checkRow(3, 6, 9, move) || checkRow(1, 5, 9, move) || checkRow(3, 5, 7, move)) 
    {
        result = true;
    }
    return result;
}

// this function checks if the row meets the winning requirements
function checkRow(a, b, c, move)
{
    // variable is declared and initialized to false 
    var result = false;

    if (getBox(a) == move && getBox(b) == move && getBox(c) == move) 
    {
        result = true;
    }
    return result;
}



// this function gets the button value
function getBox(number) 
{
    return document.getElementById("s" + number).innerText;
}

// this function clears the box values to blank
function clearBox(number) 
{
    document.getElementById("s" + number).innerText = "";
}

function startGame() {
    for (var i = 1; i <= 9; i = i + 1) {
    clearBox(i);
    }
    document.turn = "X";
    if (Math.random() < 0.5) {
    document.turn = "O";
    }
    document.winner = null;
    setMessage(document.turn + " gets to start.");
    }