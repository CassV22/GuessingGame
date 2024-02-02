const clueImg = document.getElementById("clueImg");
const clue = document.getElementById("clue");
const inputs = document.querySelector(".inputs");
let typingInput = document.querySelector(".typing-input");
const guesses = document.getElementById("guesses");
let guessesInitial = 6;
const intialScore = document.getElementById("score");
let score = 100;
const wrongGuesses = document.getElementById("wrong");
let wrongLetters = [];


//need typingInput to capture what user types; pressing a key tells the document to listen for typing, then typingInput event listener initiates game
typingInput.addEventListener("input", initGame);
document.addEventListener("keydown", () => typingInput.focus());

let word;
//function to get data
function getRandomObj() {
    let randObj= wordList[Math.floor(Math.random() * wordList.length)];

    word = randObj.word;
    
    clue.innerHTML = randObj.clue;
    clueImg.src = randObj.image;
    console.log(word);

    //need to add more inputs according to randObj.word.length
    let html = "";
    for(let i=0; i<word.length; i++) {
        html += '<input type="text" disabled>';
    }
    inputs.innerHTML = html;
}

//function to start gameplay
function initGame(e) {
    //sets the event trigger (key pressed) to a variable
    let key = e.target.value;
    console.log(key);
    if(key.match(/^[A-Za-z]+$/)) {      //checks to ensure a valid key has been pressed (letters only)
        console.log(key);
        if(word.includes(key)) {        //checks if the letter entered matches any of the letters within the word
            for(let i=0; i< word.length; i++) {
                if(word[i] === key) {
                    inputs.querySelectorAll("input")[i].value = key;
                }
            }
        } else {      //needs scoring; for each round lost, lose 10 points get down to 70, you lose
            alert("Incorrect guess");
            guessesInitial -= 1;
            guesses.innerText = guessesInitial; 
            wrongLetters.push(key);
            wrongGuesses.innerHTML = wrongLetters;           
            if (guessesInitial === 0) {
                alert(`You didn't find the word. The correct word was ${word}.`);
                score -= 10;
                //if score gets to 70; alert: You should study your tools more; game over
                getRandomObj();
                guessesInitial = 6;
                guesses.innerText = guessesInitial;
                intialScore.innerText = score;
                wrongLetters = [];
                wrongGuesses.innerHTML = wrongLetters;
            }          
        }
    }
    typingInput.value = "";     //resets input after a letter is pressed
}


//data is retrieved on button click
const button = document.getElementById("resetBtn");
button.addEventListener("click", ()=> {
    alert("click");
    getRandomObj();    
    
});

