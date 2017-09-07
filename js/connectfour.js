var PLAYER_ONE = 'red';
var PLAYER_TWO = 'black';

function startGame(){
  document.currentPlayer = PLAYER_ONE;
  updateGameStatus();
}

function fillCircle(circle){
  if(!isCircleAlreadyFilled(circle)){
    var selectedColumn = circle.id.charAt(3);

    for (var i = 5; i >= 0; i--) {
      if(document.getElementById('r' + i + 'c' + selectedColumn).style.backgroundColor != PLAYER_ONE ||
         document.getElementById('r' + i + 'c' + selectedColumn).style.backgroundColor != PLAYER_TWO){
           if(!isCircleAlreadyFilled(document.getElementById('r' + i + 'c' + selectedColumn))){
             document.getElementById('r' + i + 'c' + selectedColumn).style.backgroundColor = document.currentPlayer;
             checkForWinner();
             switchPlayer();
             break;
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

  for(i = 5; i >= 0; i++){
    for(j = 0; j < 7; j++){

    }
  }

}
