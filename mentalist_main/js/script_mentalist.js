var secretNumber = parseInt(Math.random() * 11)
console.log(secretNumber)
function handleGuess() {
  var elementResult = document.getElementById('result')
  var guessNumberElement = document.getElementById('guessNumber')
  var guessNumberValue = parseFloat(guessNumberElement.value)
  if (guessNumberValue == secretNumber) {
    elementResult.innerHTML = 'Acertou!'
  } else if (guessNumberValue > 10 || guessNumberValue < 0) {
    alert('Escreva um número de 1 a 10!')
  } else {
    elementResult.innerHTML = 'Errou, o número secreto era ' + secretNumber
  }
}
