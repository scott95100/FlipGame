
window.addEventListener("DOMContentLoaded", () => {
})

const htmlIds = ["#DOM", "#DOMmatch", "#boolean", "#booleanMatch", "#Object", "#ObjectMatch", "#HTML", "#HTMLmatch"]

const cards = document.querySelectorAll(".card")
////test area///
console.log(cards)

const pairCompair = () => {
    for(let j = 0; j < cards.length; j++) {
        
    }
}

pairCompair()




///end test area










///DOM elements

const clicked = document.querySelector('button').addEventListener('click', (e)=> {
    console.log('this is working');
})




///functions


//function to makes the playing cards flip when clicked




const flipCard =()=>{
    for(let i = 0; i < htmlIds.length; i++){
        
        if(htmlIds[i] === "#DOM"){
            cards[0].addEventListener('click', (e)=> {
                document.querySelector('#DOM').style.background = 'black'
                document.querySelector('#DOM').style.color = "white" 
            })
        }
        if(htmlIds[i] === "#HTML"){
            cards[3].addEventListener('click', (e)=> {
                document.querySelector('#HTML').style.background = 'black'
                document.querySelector('#HTML').style.color = "white"
            })
        }
        if(htmlIds[i] === "#boolean"){
            cards[1].addEventListener('click', (e)=> {
                document.querySelector('#boolean').style.background = 'black'
                document.querySelector('#boolean').style.color = "white"
            })
        }
        if(htmlIds[i] === "#Object"){
            cards[2].addEventListener('click', (e)=> {
                document.querySelector('#Object').style.background = 'black'
                document.querySelector('#Object').style.color = "white"
            })
        }
        if(htmlIds[i] === "#booleanMatch"){
            cards[4].addEventListener('click', (e)=> {
                document.querySelector('#booleanMatch').style.background = 'black'
                document.querySelector('#booleanMatch').style.color = "white"
            })
        }
        if(htmlIds[i] === "#ObjectMatch"){
            cards[5].addEventListener('click', (e)=> {
                document.querySelector('#ObjectMatch').style.background = 'black'
                document.querySelector('#ObjectMatch').style.color = "white"
            })
        }
        if(htmlIds[i] === "#DOMmatch"){
            cards[6].addEventListener('click', (e)=> {
                document.querySelector('#DOMmatch').style.background = 'black'
                document.querySelector('#DOMmatch').style.color = "white"
            })
        }
        if(htmlIds[i] === "#HTMLmatch"){
            cards[7].addEventListener('click', (e)=> {
                document.querySelector('#HTMLmatch').style.background = 'black'
                document.querySelector('#HTMLmatch').style.color = "white"
            })
        }
        
    }
}
flipCard()


//generates the user information screen
const generatePlayerName = 
    document.querySelector("button").addEventListener('click', (e)=> {
        document.querySelectorAll("li")[0].innerHTML = "awesome programmer"
})
const generatePlayerLives = document.querySelector("button").addEventListener("click", (e) => {
        document.querySelectorAll("li")[1].innerHTML = "lives: 3"
})


//function that identifies when pairs are matched/identified or not

// const pairCompair = () => {
    
// }

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

