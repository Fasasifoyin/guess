let mostrandom = Math.ceil(Math.random() * 19) + 1;
mostrandom = Number(mostrandom)

let score = document.getElementById('score');
let highscore = document.getElementById('highscore');
highscore.innerHTML = 0

count = 20

document.getElementById("roll").onclick = function() {
    let words = document.getElementById("words");
    let number = document.getElementById('guess').value;
    number = Number(number)
   
    document.getElementById("random").innerHTML = mostrandom

    if(number > mostrandom && number <= 20 && number >= 0){
        words.innerHTML = 'High'
        document.getElementById("green").style.background = 'red'
        document.getElementById("line").style.background = 'red'
        count--
        score.innerHTML = count
    } 
    else if(number == ''){
        words.innerHTML = 'No number was inputed'
    }
    else if(number < mostrandom && number <= 20 && number >= 0){
        words.innerHTML = 'Low'
        document.getElementById("green").style.background = 'yellow'
        document.getElementById("line").style.background = 'yellow'
        count--
        score.innerHTML = count
    }
    else if(number == mostrandom){
        words.innerHTML = "You've guessed right"
        document.getElementById("your").innerHTML = 'YOUR SCORE:'
        document.getElementById("green").style.background = 'green'
        document.getElementById("line").style.background = 'green'
        score.innerHTML = count
             if(score.innerHTML > highscore.innerHTML){
            highscore.innerHTML = count
             }
    } 
    else if(number < 0){
        words.innerHTML = 'Choose between 1 and 20'
        document.getElementById("green").style.background = 'white'
        document.getElementById("line").style.background = 'white'
    }
    else if(number > 20){
        words.innerHTML = 'Choose between 1 and 20'
        document.getElementById("green").style.background = 'white'
        document.getElementById("line").style.background = 'white'
    }
    
}

document.getElementById("again").onclick = function() {
    mostrandom = Math.round(Math.random() * 20)
    score.innerHTML = 20
    count = 20
    words.innerHTML = 'Start guessing...'
    document.getElementById("green").style.background = 'white'
    document.getElementById("line").style.background = 'white'
    document.getElementById("your").innerHTML = 'Score:'
}