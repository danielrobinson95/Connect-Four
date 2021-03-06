var PLAYER_ONE = 'red';
var PLAYER_TWO = 'black';

function startGame(){
  clearBoard();
  document.currentPlayer = PLAYER_ONE;
  document.terminateApp = false;
  updateGameStatus();
}

function fillCircle(circle){
  if(!document.terminateApp){
    if(!isCircleAlreadyFilled(circle)){
      var selectedColumn = circle.id.charAt(3);

      for (var i = 5; i >= 0; i--) {
        if(document.getElementById('r' + i + 'c' + selectedColumn).style.backgroundColor != PLAYER_ONE ||
           document.getElementById('r' + i + 'c' + selectedColumn).style.backgroundColor != PLAYER_TWO){
             if(!isCircleAlreadyFilled(document.getElementById('r' + i + 'c' + selectedColumn))){
               document.getElementById('r' + i + 'c' + selectedColumn).style.backgroundColor = document.currentPlayer;
               if(checkForWinner()){
                 document.terminateApp = true;
                 document.getElementById('game_status').innerText = 'Game over, ' + document.currentPlayer + ' wins.';
               } else {
                 switchPlayer();
               }
               break;
             }
        }
      }
    }
  }

}

function switchPlayer(){
  if(document.currentPlayer == PLAYER_ONE){
    document.currentPlayer = PLAYER_TWO;
  } else{
    document.currentPlayer = PLAYER_ONE;
  }
  updateGameStatus();
}

function isCircleAlreadyFilled(circle){
  if(circle.style.backgroundColor == PLAYER_ONE ||
     circle.style.backgroundColor == PLAYER_TWO){
       updateGameStatus();
       return true;
     } else{
       return false;
     }
}

function updateGameStatus(){
  if(arguments.callee.caller.toString().includes("startGame")){
    document.getElementById('game_status').innerText =
    capitalizeFirstLetter(document.currentPlayer) + ' gets to start, good luck!';
  } else if(arguments.callee.caller.toString().includes("switchPlayer")){
    document.getElementById('game_status').innerText = 'It\'s ' +
    capitalizeFirstLetter(document.currentPlayer) + '\'s turn.';
  } else if (arguments.callee.caller.toString().includes("isCircleAlreadyFilled")){
    document.getElementById('game_status').innerText = 'That spot is already taken, try again.';
  }
}

function capitalizeFirstLetter(string){
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function checkForWinner(){
 var horizontalWinner = 0;
 var verticalWinner = 0;
 var diagnolWinner = 0;

  //r5c6

  //Check for horizontal winner
  //Loop through rows
  for (i = 0; i < 6; i++) {
    //Loop through columns
    for (j = 0; j < 7; j++) {
      if(document.getElementById('r' + i + 'c' + j).style.backgroundColor == document.currentPlayer){
        horizontalWinner++;
        if(horizontalWinner == 4){
          return true;
        }
      } else {
        horizontalWinner = 0;
      }

    }
  }
  //Check for vertical winner
  //loop trough columns
  for (i = 0; i < 7; i++) {
    //Loop through rows
    for (j = 0; j < 6; j++){
      if(document.getElementById('r' + j + 'c' + i).style.backgroundColor == document.currentPlayer){
        verticalWinner++;
        if(verticalWinner == 4){
          return true;
        }
      } else{
        verticalWinner = 0;
      }
    }
  }

  // Check for diagnol winner.
  //Loop through rows

  for(var j = 0; j < 3; j++){
    for (var i = 0; i < 6; i++) {
      if(document.getElementById('r' + (i+j) + 'c' + i) != null){
        if(document.getElementById('r' + (i+j) + 'c' + i).style.backgroundColor == document.currentPlayer){
          diagnolWinner++;
          if(diagnolWinner == 4){
            return true;
          }
        }  else{
          diagnolWinner = 0;
        }
      }
    }
  }


  for(var j = 0; j < 4; j++){
    for (var i = 0; i < 6; i++) {
      if(document.getElementById('r' + i + 'c' + (i+j)) != null){
        if(document.getElementById('r' + i + 'c' + (i+j)).style.backgroundColor == document.currentPlayer){
        diagnolWinner++;
        if(diagnolWinner == 4){
          return true;
        }
      } else {
        diagnolWinner = 0;
      }
    }
  }
}

for(var row = 0; row < 3; row++){
  var tempRow = row;
  for(var column = 6; column >= 0; column--){
    if(column != 0 && row <= 5){
      if(document.getElementById('r' + row++ + 'c' + column).style.backgroundColor == document.currentPlayer){
        diagnolWinner++;
        if(diagnolWinner == 4){
          return true;
        }
      } else {
        diagnolWinner = 0;
      }
    }
  }
  row = tempRow;
}


var counter = 0;

for(var row = 0; row < 3; row++){
  row = 0;
  for(var column = 5; column >= 0; column --){
    if((column - counter) >= 0){
      if(document.getElementById('r' + row++ + 'c' + (column - counter)).style.backgroundColor == document.currentPlayer){
        diagnolWinner++;
        if(diagnolWinner == 4){
          return true;
        }
      } else {
        diagnolWinner = 0;
      }
    }
  }
  row = 0;
  counter++;
  if(counter == 3){
    break;
  }
}
return false;
}

function clearBoard(){
  for(var row = 0; row < 6; row++){
    for(var column = 0; column < 7; column++){
      document.getElementById('r' + row + 'c' + column).style.backgroundColor = "";

    }
  }
}
