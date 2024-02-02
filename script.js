const clueImg = document.getElementById("clueImg");
const clue = document.getElementById("clue");
const inputs = document.querySelector(".inputs");
let typingInput = document.querySelector(".typing-input");

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
        } else {
            console.log("incorrect guess");
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

