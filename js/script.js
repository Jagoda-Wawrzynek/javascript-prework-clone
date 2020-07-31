/**
 * Describe this function...
 */

function getMoveName(argMoveNumber) {
    if (argMoveNumber == 1) {
    return 'kamień';
  } else if (argMoveNumber == 2) {
    return 'papier';
  } else if (argMoveNumber == 3) {
    return 'nożyce';
  } else {
    printMessage('Nie znam ruchu o id ' + argMoveNumber + '.');
    return 'nieznany ruch';
  }
}
let randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('wylosowana liczba to: ' + randomNumber);

let computerMove = getMoveName(randomNumber);
console.log('Ruch komputera to: ' + computerMove);
printMessage('Ruch komputera to: ' + computerMove);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
console.log('Gracz wpisał: ' + playerInput);

let playerMove = getMoveName(playerInput);
console.log('Ruch gracza to: ' + playerMove);
printMessage('Twój ruch to: ' + playerMove)


if(computerMove == 'kamień' && playerMove == 'papier'){
  printMessage('Ty wygrywasz!');
} else if (computerMove == 'papier' && playerMove == 'nożyce'){
  printMessage('Ty wygrywasz!');
} else if (computerMove == 'nożyce' && playerMove == 'kamień'){
  printMessage('Ty wygrywasz!');
} else if (computerMove == 'kamień' && playerMove == 'kamień'){
  printMessage('Remis. Zagraj jeszcze raz');
} else if (computerMove == 'papier' && playerMove == 'papier'){
  printMessage('Remis. Zagraj jeszcze raz');
} else if (computerMove == 'nożyce' && playerMove == 'nożyce'){
  printMessage('Remis. Zagraj jeszcze raz');
} else {
  printMessage('Przegrałeś. Spróbuj jeszcze raz.')
}