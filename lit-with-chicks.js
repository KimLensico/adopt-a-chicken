'use strict'
// chicken question

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

//verifying age 

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

// background changes

object.style.backgroundColor = "color|transparent|initial|inherit"

function redBackg() {
    document.body.style.backgroundColor = "#A8231A";
  }

  function beigeBackg() {
    document.body.style.backgroundColor = 
    "#E8CAAF";
  }
 
  function orangeBackg() {
    document.body.style.backgroundColor = 
    "#DCA01E";
  }

  function whiteBackg() {
    document.body.style.backgroundColor = 
    "#FFFFFF";
  }

  function blackBackg() {
    document.body.style.backgroundColor = 
    "#000000";
  }

//Get the button

var mybutton = document.getElementById("myBtn");
    
// When the user scrolls down 20px from the top of the document, show the button

window.onscroll = function() {scrollFunction()};
      
function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          mybutton.style.display = "block";
        } else {
          mybutton.style.display = "none";
        }
      }
      
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      }