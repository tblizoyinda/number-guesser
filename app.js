let min = 1,
    max = 10,
    winningNum = getRandomNum(min, max),
    guessesLeft = 3;

const game =  document.getElementById('game'),
      minNum  = document.querySelector('.min-num'); 
      maxNum = document.querySelector('.max-num');
      guessBtn = document.querySelector('#guess-btn');
      guessInput = document.querySelector('#guess-input');
      msg = document.querySelector('.msg');

minNum.textContent = min;
maxNum.textContent = max;

game.addEventListener('mousedown', function(e){
    if(e.target.className === 'play-again'){
        window.location.reload();
    }
});

guessBtn.addEventListener('click',function(){
    let guess = parseInt(guessInput.value);
    
    if(isNaN(guess) || guess < min || guess > max || guess == ""){
        setMsg(`Please enter a number between ${min} and ${max}`,'red');
    } else if (guess == winningNum){
        guessInput.disabled = true;
        guessInput.style.borderColor = 'green';
        setMsg(`${winningNum} is correct, You win !!!`,'green');
        playAgain();
    } else {
        guessesLeft -=1;
        if(guessesLeft == 0){
            ///Game Over Lost....
            guessInput.disabled = true;
            guessInput.style.borderColor = 'red';
            setMsg(`Game Over, you didn't guess right. The correct number was ${winningNum}`,'red')
            playAgain();
        } else {
            //Game Continues --- Answer Wrong
            guessInput.style.borderColor = 'red';
            setMsg(`${guess} is not correct, ${guessesLeft} guesses left`,'red');
           guessInput.value = "";
        }
    }
});

function setMsg(msgs,color){
    msg.style.color = color;
    msg.textContent = msgs;
}

function playAgain(){
    guessBtn.value = 'Play Again';
    guessBtn.className += 'play-again';
}

function getRandomNum(min, max){
    return Math.floor(Math.random()*(max-min+1)+min);
}