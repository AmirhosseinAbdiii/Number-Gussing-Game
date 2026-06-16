const guessInput = document.getElementById("guessInput");
const message = document.getElementById("message");
const guessBtn = document.getElementById("guessbtn");
const Resetbtn = document.getElementById("resetbtn");


const minNum = 1;
const maxNum = 100;
let answer = Math.floor(Math.random() * (maxNum-minNum +1 )) + minNum

function Guesscheck(){
    const guess = Number(guessInput.value);
    if(!guess){
        message.textContent = "Enter a valid Number!"
        return;
    }
     if(guess===answer){
        message.textContent = "well done , you guessed true🎉"
    }
    else if(guess > answer){
        message.textContent = "Too High , try again!"
    }
    else if(guess < answer){
        message.textContent = "Too Low , try again!"
    }
}

function resetGame(){
    answer = Math.floor(Math.random() * (maxNum-minNum +1 )) + minNum;
    guessInput.value ="";
    message.textContent = "Game Reset ! Start Again."
}

guessbtn.addEventListener("click",Guesscheck);
resetbtn.addEventListener("click",resetGame);


