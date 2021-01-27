
window.addEventListener("DOMContentLoaded", () => {
})

//global variables 



///DOM elements

const clicked = document.querySelector('button').addEventListener('click', (e)=> {
    console.log('this is working');
})




///functions


//function to creats the inital player window information

const generatePlayerName = 
    document.querySelector("button").addEventListener('click', (e)=> {
        document.querySelectorAll("li")[0].innerHTML = "awesome programmer"
})
const generatePlayerLives = document.querySelector("button").addEventListener("click", (e) => {
        document.querySelectorAll("li")[1].innerHTML = "lives: 3"
})


//function that identifies when pairs are matched/identified or not

const pairCompair = () => {
    //will need to grabe both cards that are clicked
    //change the background color of the cards clicked
    //compair if the inner text is equal to eachother
    //if equal
        //triggers the generatePairWindow
    //otherwise
        //trigger the miss function 
}

//function that generates pop-out window with the syntax information triggered when a pair is made
const generatePairWindow = () => {
    //create a window element with innerHTML language describing the syntax of the pair made
    //change the background color of both cards that were paired-- with a button to close the window
} 

//function that triggers on miss and subtracts a life from the player board when 2 cards do not match and returns the original background color
const missPair = () => {
    //subtract 1 from the lives in the player window
    //return the background color of both cards to original 
}


//function that generates the "winner" window when all pairs are made on the board
const generateWinner = () => {
    //create a window with innerHTML declairing game won
    //replace all cards backgrounds to original color
}

//function that generates the game over window when lives = 0;
const gameOver = () => {
    //if lives === 0 
    //generate window declaring game over 
    //reset all backgrounds to original 
}

