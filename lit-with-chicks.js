'use strict'

function chickQuestion() {
    var correctAnswer = 12;
    var playGame = prompt('Want a chicken question?');
    while(playGame === 'yes'){
        for (var i = 0; i < 5; i = i + 1){
            var userGuess = parseInt(prompt("In an ideal environment how many years can a chicken live up to?"));
            if(userGuess === correctAnswer){
                alert('Congratulations! You are correct!')
                break;
            } else if (userGuess < correctAnswer){
                alert('Hm... that is little too young to die')
            }else if (userGuess > correctAnswer){
                alert('I WISH they lived that long! :( Try again...')
            }
            if(i === 4){
                alert('Chickens can live up to' + correctAnswer + ' years maximum in an ideal environment! :D')
            }
        }
        playGame = prompt('Do you think you can remember that?');
    }
}

chickQuestion();

function verifyAge() {
    var age; 
    var ok = confirm('Please press "OK" if you are 18+ in order to adopt a chicken.')
    if (ok == true) {
        age = '<section>' + 'Welcome to the Nest!' + '</section>'
} else {
        age = '<section>' + 'A chick cannot adopt a chick!' + '</section>'
    }
    document.getElementById("java").innerHTML = age;
} 

verifyAge();

object.style.backgroundColor = "color|transparent|initial|inherit"
