var PLAYER_ONE = 'red';
var PLAYER_TWO = 'blue';

function startGame(){
  document.currentPlayer = PLAYER_ONE;
  updateGameStatus();
}

function fillCircle(circle){
  if(!isCircleAlreadyFilled(circle)){
    circle.style.backgroundColor = document.currentPlayer;
    checkForWinner();
    switchPlayer();
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
  }
}

function capitalizeFirstLetter(string){
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function checkForWinner(){
 var horizontalWinner = 0;
 var verticalWinner = 0;
 var diagnolWinner = 0;

  for(i = 0; i < 6; i++){
    for(j = 0; j < 7; j++){
    }

  }

}
