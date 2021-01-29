
window.addEventListener("DOMContentLoaded", () => {
})

const htmlIds = ["#DOM", "#DOMmatch", "#boolean", "#booleanMatch", "#Object", "#ObjectMatch", "#HTML", "#HTMLmatch"]

const cards = document.querySelectorAll(".card")

let DOMclicked = false;
let DOMmatchClicked = false;
////test area///

console.log(cards)




///end test area










///DOM elements

const clicked = document.querySelector('button').addEventListener('click', (e)=> {
    console.log('this is working');
})




///functions


//function to makes the playing cards flip when clicked


let allCardsArr = []
let pairsMade = 0
let defaultLives = 3

//card O and 6 flip function (matching DOM's)

const cardOneEvent = (e)=>{
    flippedCard_1 = e.target.getAttribute('extra')
    console.log(flippedCard_1)
    allCardsArr.push(flippedCard_1)
        //right now this only targets the first card to flip
    e.target.style.background = "black"
    e.target.style.color = "white"
    if(allCardsArr.length == 2){
        //do a check
        if(allCardsArr[0] === allCardsArr[1]){
            console.log('its a match')
            allCardsArr = []
            pairsMade ++
            document.querySelectorAll("input")[1].value = pairsMade

        }else {
            allCardsArr = []
            defaultLives --
            document.querySelectorAll("input")[0].value = defaultLives
            
            document.querySelector('#DOM').style.background = 'rgb(44, 12, 12)'
            document.querySelector('#DOMmatch').style.color = "rgb(44, 12, 12)"
            //change styles back 
            //remove everything from the array
            //reset card styling 
        }
    }
}

cards[0].addEventListener('click', cardOneEvent)
cards[6].addEventListener('click', cardOneEvent)

//cards 1 and 4 flip function (matching boolean's)

const cardTwoEvent = (e)=>{
    flippedCard_2 = e.target.getAttribute('extra')
    console.log(flippedCard_2)
    allCardsArr.push(flippedCard_2)
        //right now this only targets the first card to flip
    e.target.style.background = "black"
    e.target.style.color = "white"
    console.log(allCardsArr)
    if(allCardsArr.length == 2){
        //do a check
        if(allCardsArr[0] === allCardsArr[1]){
            console.log('its a match')
            allCardsArr = []
            pairsMade ++
            document.querySelectorAll("input")[1].value = pairsMade

        }else {
            console.log(`this should work`)
            allCardsArr = []
            defaultLives --
            document.querySelectorAll("input")[0].value = defaultLives
            
            document.querySelector('#boolean').style.background = 'rgb(44, 12, 12)'
            document.querySelector('#booleanMatch').style.color = "rgb(44, 12, 12)"
            //change styles back 
            //remove everything from the array
            //reset card styling 
        }
    }
}

cards[1].addEventListener('click', cardTwoEvent)
cards[4].addEventListener('click', cardTwoEvent)

//cards 2 and 5 flip function(matching object's)

const cardThreeEvent = (e)=>{
    flippedCard_3 = e.target.getAttribute('extra')
    console.log(flippedCard_3)
    allCardsArr.push(flippedCard_3)
        //right now this only targets the first card to flip
    e.target.style.background = "black"
    e.target.style.color = "white"
    if(allCardsArr.length == 2){
        //do a check
        if(allCardsArr[0] === allCardsArr[1]){
            console.log('its a match')
            allCardsArr = []
            pairsMade ++
            document.querySelectorAll("input")[1].value = pairsMade

        }else {
            allCardsArr = []
            defaultLives --
            document.querySelectorAll("input")[0].value = defaultLives
            
            document.querySelector('#Object').style.background = 'rgb(44, 12, 12)'
            document.querySelector('#ObjectMatch').style.color = "rgb(44, 12, 12)"
            //change styles back 
            //remove everything from the array
            //reset card styling 
        }
    }
}

cards[2].addEventListener('click', cardThreeEvent)
cards[5].addEventListener('click', cardThreeEvent)

//cards 3 and 7 flip function(match HTML's)

const cardFourEvent = (e)=>{
    flippedCard_4 = e.target.getAttribute('extra')
    console.log(flippedCard_4)
    allCardsArr.push(flippedCard_4)
        //right now this only targets the first card to flip
    e.target.style.background = "black"
    e.target.style.color = "white"
    if(allCardsArr.length == 2){
        //do a check
        if(allCardsArr[0] === allCardsArr[1]){
            console.log('its a match')
            allCardsArr = []
            pairsMade ++
            document.querySelectorAll("input")[1].value = pairsMade

        }else {
            allCardsArr = []
            defaultLives --
            document.querySelectorAll("input")[0].value = defaultLives
            
            document.querySelector('#HTML').style.background = 'rgb(44, 12, 12)'
            document.querySelector('#HTMLmatch').style.color = "rgb(44, 12, 12)"
            //change styles back 
            //remove everything from the array
            //reset card styling 
        }
    }
}

cards[3].addEventListener('click', cardFourEvent)
cards[7].addEventListener('click', cardFourEvent)




//generates the user information screen
const generatePlayerName = 
    document.querySelector("button").addEventListener('click', (e)=> {
        document.querySelectorAll("li")[0].innerHTML = "awesome programmer"
})
const generatePlayerLives = document.querySelector("button").addEventListener("click", (e) => {
        document.querySelectorAll("input")[0].value = 3
})
const generatePlayerPairs = document.querySelector("button").addEventListener("click", (e) => {
    document.querySelectorAll("input")[1].value = 0
})

//function that identifies when pairs are matched/identified or not

// const pairCompair = () => {
    
// }







//function that generates the "winner" window when all pairs are made on the board

// researching event listener .oninput
// const values = document.getAttribute("pairs")
// const generateWinner = (e) => {
//     if(document.querySelectorAll("input")[1].value == 4){
//         console.log('winner')
//     }
//     let currentPairsValue = document.querySelectorAll("input")[1].value
//     console.log(`currently at ${currentPairsValue} pairs`)
//     //create a window with innerHTML declairing game won
//     //replace all cards backgrounds to original color
// }
// values.addEventListener('oninput',generateWinner)

//function that generates the game over window when lives = 0;
const gameOver = () => {
    //if lives === 0 
    //generate window declaring game over 
    //reset all backgrounds to original 
}




///////////////////////////////////




/*
const flipCard =()=>{
       
    for(let i = 0; i < htmlIds.length; i++){
        
        if(htmlIds[i] === "#DOM"){
            cards[0].addEventListener('click', (e)=> {
                flippedCard_1 = "DOM"
                DOMflipArr.push(flippedCard_1)
                document.querySelector('#DOM').style.background = 'black'
                document.querySelector('#DOM').style.color = "white"
                cards[1].addEventListener('click', (e)=>{
                    defaultLives --
                    document.querySelectorAll("input")[0].value = defaultLives
                    DOMflipArr = []
                    booleanFlipArr = []
                    if(booleanFlipArr.length === 0 && DOMflipArr.length === 0){
                        document.querySelector('#boolean').style.background = 'rgb(44, 12, 12)'
                        document.querySelector('#boolean').style.color = "rgb(44, 12, 12)"
                        document.querySelector('#DOM').style.background = 'rgb(44, 12, 12)'
                        document.querySelector('#DOM').style.color = "rgb(44, 12, 12)"
                        
                    }
                    
                })
                
                cards[2].addEventListener('click', (e)=>{
                    defaultLives --
                    DOMflipArr = []
                    objectFlipArr = []
                    
                    document.querySelectorAll("input")[0].value = defaultLives
                    document.querySelector('#DOM').style.background = 'rgb(44, 12, 12)'
                    document.querySelector('#DOM').style.color = "rgb(44, 12, 12)"
                    document.querySelector('#Object').style.background = 'rgb(44, 12, 12)'
                    document.querySelector('#Object').style.color = "rgb(44, 12, 12)"
                })
                cards[3].addEventListener('click', (e)=>{
                    defaultLives --
                    HTMLflipArr = []
                    DOMflipArr = []
                    document.querySelectorAll("input")[0].value = defaultLives
                    document.querySelector('#DOM').style.background = 'rgb(44, 12, 12)'
                    document.querySelector('#DOM').style.color = "rgb(44, 12, 12)"
                    document.querySelector('#HTML').style.background = 'rgb(44, 12, 12)'
                    document.querySelector('#HTML').style.color = "rgb(44, 12, 12)"
                })
                cards[4].addEventListener('click', (e)=>{
                    defaultLives --
                    booleanFlipArr = []
                    DOMflipArr = []
                    document.querySelectorAll("input")[0].value = defaultLives
                    document.querySelector('#DOM').style.background = 'rgb(44, 12, 12)'
                    document.querySelector('#DOM').style.color = "rgb(44, 12, 12)"
                    document.querySelector('#booleanMatch').style.background = 'rgb(44, 12, 12)'
                    document.querySelector('#booleanMatch').style.color = "rgb(44, 12, 12)"
                })
                cards[5].addEventListener('click', (e)=>{
                    defaultLives --
                    objectFlipArr = []
                    DOMflipArr = []
                    document.querySelectorAll("input")[0].value = defaultLives
                    document.querySelector('#DOM').style.background = 'rgb(44, 12, 12)'
                    document.querySelector('#DOM').style.color = "rgb(44, 12, 12)"
                    document.querySelector('#ObjectMatch').style.background = 'rgb(44, 12, 12)'
                    document.querySelector('#ObjectMatch').style.color = "rgb(44, 12, 12)"
                })
                cards[7].addEventListener('click', (e)=>{
                    defaultLives --
                    HTMLflipArr = []
                    DOMflipArr = []
                    document.querySelectorAll("input")[0].value = defaultLives
                    document.querySelector('#DOM').style.background = 'rgb(44, 12, 12)'
                    document.querySelector('#DOM').style.color = "rgb(44, 12, 12)"
                    document.querySelector('#HTMLmatch').style.background = 'rgb(44, 12, 12)'
                    document.querySelector('#HTMLmatch').style.color = "rgb(44, 12, 12)"
                })
                cards[6].addEventListener('click', (e)=>{
                    DOMflipArr.push("DOMmatch")
                    if((DOMflipArr[0] === "DOM" || DOMflipArr[0] ==="DOMmatch") && (DOMflipArr[1] === "DOM" ||DOMflipArr[1] === "DOMmatch")){
                        pairsMade ++
                        document.querySelectorAll("input")[1].value = pairsMade
                        
                    }
                })
              
            })
        }
        
        if(htmlIds[i] === "#boolean"){
            cards[1].addEventListener('click', (e)=> {
                flippedCard_1 = "boolean"
                booleanFlipArr.push(flippedCard_1)
                document.querySelector('#boolean').style.background = 'black'
                document.querySelector('#boolean').style.color = "white"
                cards[0].addEventListener('click', (e)=>{
                    defaultLives --
                    booleanFlipArr = []
                    DOMflipArr = []
                    document.querySelectorAll("input")[0].value = defaultLives
                    document.querySelector('#boolean').style.background = 'rgb(44, 12, 12)'
                    document.querySelector('#boolean').style.color = "rgb(44, 12, 12)"
                    document.querySelector('#DOM').style.background = 'rgb(44, 12, 12)'
                    document.querySelector('#DOM').style.color = "rgb(44, 12, 12)"
                })
                cards[2].addEventListener('click', (e)=>{
                    defaultLives --
                    booleanFlipArr = []
                    objectFlipArr = []
                    document.querySelectorAll("input")[0].value = defaultLives
                    document.querySelector('#boolean').style.background = 'rgb(44, 12, 12)'
                    document.querySelector('#boolean').style.color = "rgb(44, 12, 12)"
                    document.querySelector('#Object').style.background = 'rgb(44, 12, 12)'
                    document.querySelector('#Object').style.color = "rgb(44, 12, 12)"
                })
                cards[3].addEventListener('click', (e)=>{
                    defaultLives --
                    booleanFlipArr = []
                    HTMLflipArr = []
                    document.querySelectorAll("input")[0].value = defaultLives
                    document.querySelector('#boolean').style.background = 'rgb(44, 12, 12)'
                    document.querySelector('#boolean').style.color = "rgb(44, 12, 12)"
                    document.querySelector('#HTML').style.background = 'rgb(44, 12, 12)'
                    document.querySelector('#HTML').style.color = "rgb(44, 12, 12)"
                })
                cards[5].addEventListener('click', (e)=>{
                    defaultLives --
                    booleanFlipArr = []
                    objectFlipArr = []
                    document.querySelectorAll("input")[0].value = defaultLives
                    document.querySelector('#boolean').style.background = 'rgb(44, 12, 12)'
                    document.querySelector('#boolean').style.color = "rgb(44, 12, 12)"
                    document.querySelector('#ObjectMatch').style.background = 'rgb(44, 12, 12)'
                    document.querySelector('#ObjectMatch').style.color = "rgb(44, 12, 12)"
                })
                cards[6].addEventListener('click', (e)=>{
                    defaultLives --
                    booleanFlipArr = []
                    DOMflipArr = []
                    document.querySelectorAll("input")[0].value = defaultLives
                    document.querySelector('#boolean').style.background = 'rgb(44, 12, 12)'
                    document.querySelector('#boolean').style.color = "rgb(44, 12, 12)"
                    document.querySelector('#DOMmatch').style.background = 'rgb(44, 12, 12)'
                    document.querySelector('#DOMmatch').style.color = "rgb(44, 12, 12)"
                })
                cards[7].addEventListener('click', (e)=>{
                    defaultLives --
                    booleanFlipArr = []
                    HTMLflipArr = []
                    document.querySelectorAll("input")[0].value = defaultLives
                    document.querySelector('#boolean').style.background = 'rgb(44, 12, 12)'
                    document.querySelector('#boolean').style.color = "rgb(44, 12, 12)"
                    document.querySelector('#HTMLmatch').style.background = 'rgb(44, 12, 12)'
                    document.querySelector('#HTMLmatch').style.color = "rgb(44, 12, 12)"
                })
                cards[4].addEventListener('click', (e)=>{
                    booleanFlipArr.push("booleanMatch")
                    if((DOMflipArr[0] === "boolean" || DOMflipArr[0] ==="booleanMatch") && (DOMflipArr[1] === "boolean" ||DOMflipArr[1] === "booleanMatch")){
                        pairsMade ++
                        document.querySelectorAll("input")[1].value = pairsMade
                        
                    }
                })
              
            })
        }
        if(htmlIds[i] === "#Object"){
            cards[2].addEventListener('click', (e)=> {
                flippedCard_1 = "object"
                objectFlipArr.push(flippedCard_1)
                document.querySelector('#Object').style.background = 'black'
                document.querySelector('#Object').style.color = "white"
                if((objectFlipArr[0] === "object" || objectFlipArr[0] ==="objectMatch") && (objectFlipArr[1] === "object" ||objectFlipArr[1] === "objectMatch")){
                    pairsMade ++
                    document.querySelectorAll("input")[1].value = pairsMade
                    
                }else{
                    cards[0].addEventListener('click', (e)=>{
                        defaultLives --
                        objectFlipArr = []
                        document.querySelectorAll("input")[0].value = defaultLives
                        document.querySelector('#Object').style.background = 'rgb(44, 12, 12)'
                        document.querySelector('#Object').style.color = "rgb(44, 12, 12)"
                        document.querySelector('#DOM').style.background = 'rgb(44, 12, 12)'
                        document.querySelector('#DOM').style.color = "rgb(44, 12, 12)"
                        
                    })
                    cards[1].addEventListener('click', (e)=>{
                        defaultLives --
                        objectFlipArr = []
                        document.querySelectorAll("input")[0].value = defaultLives
                        document.querySelector('#Object').style.background = 'rgb(44, 12, 12)'
                        document.querySelector('#Object').style.color = "rgb(44, 12, 12)"
                        document.querySelector('#boolean').style.background = 'rgb(44, 12, 12)'
                        document.querySelector('#boolean').style.color = "rgb(44, 12, 12)"
                    })
                    cards[3].addEventListener('click', (e)=>{
                        defaultLives --
                        objectFlipArr = []
                        document.querySelectorAll("input")[0].value = defaultLives
                        document.querySelector('#Object').style.background = 'rgb(44, 12, 12)'
                        document.querySelector('#Object').style.color = "rgb(44, 12, 12)"
                        document.querySelector('#HTML').style.background = 'rgb(44, 12, 12)'
                        document.querySelector('#HTML').style.color = "rgb(44, 12, 12)"
                    })
                    cards[4].addEventListener('click', (e)=>{
                        defaultLives --
                        objectFlipArr = []
                        document.querySelectorAll("input")[0].value = defaultLives
                        document.querySelector('#Object').style.background = 'rgb(44, 12, 12)'
                        document.querySelector('#Object').style.color = "rgb(44, 12, 12)"
                        document.querySelector('#booleanMatch').style.background = 'rgb(44, 12, 12)'
                        document.querySelector('#BooleanMatch').style.color = "rgb(44, 12, 12)"
                    })
                    cards[6].addEventListener('click', (e)=>{
                        defaultLives --
                        DOMflipArr = []
                        HTMLflipArr = []
                        objectFlipArr = []
                        booleanFlipArr = []
                        document.querySelectorAll("input")[0].value = defaultLives
                        document.querySelector('#DOM').style.background = 'rgb(44, 12, 12)'
                        document.querySelector('#DOM').style.color = "rgb(44, 12, 12)"
                        document.querySelector('#boolean').style.background = 'rgb(44, 12, 12)'
                        document.querySelector('#boolean').style.color = "rgb(44, 12, 12)"
                    })
                    cards[7].addEventListener('click', (e)=>{
                        defaultLives --
                        DOMflipArr = []
                        HTMLflipArr = []
                        objectFlipArr = []
                        booleanFlipArr = []
                        document.querySelectorAll("input")[0].value = defaultLives
                        document.querySelector('#DOM').style.background = 'rgb(44, 12, 12)'
                        document.querySelector('#DOM').style.color = "rgb(44, 12, 12)"
                        document.querySelector('#boolean').style.background = 'rgb(44, 12, 12)'
                        document.querySelector('#boolean').style.color = "rgb(44, 12, 12)"
                    })

                }
            })
        }
        if(htmlIds[i] === "#HTML"){
            cards[3].addEventListener('click', (e)=> {
                flippedCard_1 = "HTML"
                HTMLflipArr.push(flippedCard_1)
                document.querySelector('#HTML').style.background = 'black'
                document.querySelector('#HTML').style.color = "white"
                if((HTMLflipArr[0] === "HTML" || HTMLflipArr[0] ==="HTMLmatch") && (HTMLflipArr[1] === "HTML" ||HTMLflipArr[1] === "HTMLmatch")){
                    pairsMade ++
                    document.querySelectorAll("input")[1].value = pairsMade
                    
                }else{
                    cards[0].addEventListener('click', (e)=>{
                        defaultLives --
                        DOMflipArr = []
                        HTMLflipArr = []
                        objectFlipArr = []
                        booleanFlipArr = []
                        document.querySelectorAll("input")[0].value = defaultLives
                        document.querySelector('#DOM').style.background = 'rgb(44, 12, 12)'
                        document.querySelector('#DOM').style.color = "rgb(44, 12, 12)"
                        document.querySelector('#boolean').style.background = 'rgb(44, 12, 12)'
                        document.querySelector('#boolean').style.color = "rgb(44, 12, 12)"
                    })
                    cards[1].addEventListener('click', (e)=>{
                        defaultLives --
                        DOMflipArr = []
                        HTMLflipArr = []
                        objectFlipArr = []
                        booleanFlipArr = []
                        document.querySelectorAll("input")[0].value = defaultLives
                        document.querySelector('#DOM').style.background = 'rgb(44, 12, 12)'
                        document.querySelector('#DOM').style.color = "rgb(44, 12, 12)"
                        document.querySelector('#boolean').style.background = 'rgb(44, 12, 12)'
                        document.querySelector('#boolean').style.color = "rgb(44, 12, 12)"
                    })
                    cards[2].addEventListener('click', (e)=>{
                        defaultLives --
                        DOMflipArr = []
                        HTMLflipArr = []
                        objectFlipArr = []
                        booleanFlipArr = []
                        document.querySelectorAll("input")[0].value = defaultLives
                        document.querySelector('#DOM').style.background = 'rgb(44, 12, 12)'
                        document.querySelector('#DOM').style.color = "rgb(44, 12, 12)"
                        document.querySelector('#boolean').style.background = 'rgb(44, 12, 12)'
                        document.querySelector('#boolean').style.color = "rgb(44, 12, 12)"
                    })
                    cards[4].addEventListener('click', (e)=>{
                        defaultLives --
                        DOMflipArr = []
                        HTMLflipArr = []
                        objectFlipArr = []
                        booleanFlipArr = []
                        document.querySelectorAll("input")[0].value = defaultLives
                        document.querySelector('#DOM').style.background = 'rgb(44, 12, 12)'
                        document.querySelector('#DOM').style.color = "rgb(44, 12, 12)"
                        document.querySelector('#boolean').style.background = 'rgb(44, 12, 12)'
                        document.querySelector('#boolean').style.color = "rgb(44, 12, 12)"
                    })
                    cards[5].addEventListener('click', (e)=>{
                        defaultLives --
                        DOMflipArr = []
                        HTMLflipArr = []
                        objectFlipArr = []
                        booleanFlipArr = []
                        document.querySelectorAll("input")[0].value = defaultLives
                        document.querySelector('#DOM').style.background = 'rgb(44, 12, 12)'
                        document.querySelector('#DOM').style.color = "rgb(44, 12, 12)"
                        document.querySelector('#boolean').style.background = 'rgb(44, 12, 12)'
                        document.querySelector('#boolean').style.color = "rgb(44, 12, 12)"
                    })
                    cards[6].addEventListener('click', (e)=>{
                        defaultLives --
                        DOMflipArr = []
                        HTMLflipArr = []
                        objectFlipArr = []
                        booleanFlipArr = []
                        document.querySelectorAll("input")[0].value = defaultLives
                        document.querySelector('#DOM').style.background = 'rgb(44, 12, 12)'
                        document.querySelector('#DOM').style.color = "rgb(44, 12, 12)"
                        document.querySelector('#boolean').style.background = 'rgb(44, 12, 12)'
                        document.querySelector('#boolean').style.color = "rgb(44, 12, 12)"
                    })

                }
            })
        }
        if(htmlIds[i] === "#booleanMatch"){
            cards[4].addEventListener('click', (e)=> {
                flippedCard_2 = "booleanMatch"
                booleanFlipArr.push(flippedCard_2)
                document.querySelector('#booleanMatch').style.background = 'black'
                document.querySelector('#booleanMatch').style.color = "white"
                if((booleanFlipArr[0] === "boolean" || booleanFlipArr[0] ==="booleanMatch") && (booleanFlipArr[1] === "boolean" ||booleanFlipArr[1] === "booleanMatch")){
                    pairsMade ++
                    document.querySelectorAll("input")[1].value = pairsMade
                    
                }else{
                    cards[0].addEventListener('click', (e)=>{
                        defaultLives --
                        DOMflipArr = []
                        HTMLflipArr = []
                        objectFlipArr = []
                        booleanFlipArr = []
                        document.querySelectorAll("input")[0].value = defaultLives
                        document.querySelector('#DOM').style.background = 'rgb(44, 12, 12)'
                        document.querySelector('#DOM').style.color = "rgb(44, 12, 12)"
                        document.querySelector('#boolean').style.background = 'rgb(44, 12, 12)'
                        document.querySelector('#boolean').style.color = "rgb(44, 12, 12)"
                    })
                    cards[2].addEventListener('click', (e)=>{
                        defaultLives --
                        DOMflipArr = []
                        HTMLflipArr = []
                        objectFlipArr = []
                        booleanFlipArr = []
                        document.querySelectorAll("input")[0].value = defaultLives
                        document.querySelector('#DOM').style.background = 'rgb(44, 12, 12)'
                        document.querySelector('#DOM').style.color = "rgb(44, 12, 12)"
                        document.querySelector('#boolean').style.background = 'rgb(44, 12, 12)'
                        document.querySelector('#boolean').style.color = "rgb(44, 12, 12)"
                    })
                    cards[3].addEventListener('click', (e)=>{
                        defaultLives --
                        DOMflipArr = []
                        HTMLflipArr = []
                        objectFlipArr = []
                        booleanFlipArr = []
                        document.querySelectorAll("input")[0].value = defaultLives
                        document.querySelector('#DOM').style.background = 'rgb(44, 12, 12)'
                        document.querySelector('#DOM').style.color = "rgb(44, 12, 12)"
                        document.querySelector('#boolean').style.background = 'rgb(44, 12, 12)'
                        document.querySelector('#boolean').style.color = "rgb(44, 12, 12)"
                    })
                    cards[5].addEventListener('click', (e)=>{
                        defaultLives --
                        DOMflipArr = []
                        HTMLflipArr = []
                        objectFlipArr = []
                        booleanFlipArr = []
                        document.querySelectorAll("input")[0].value = defaultLives
                        document.querySelector('#DOM').style.background = 'rgb(44, 12, 12)'
                        document.querySelector('#DOM').style.color = "rgb(44, 12, 12)"
                        document.querySelector('#boolean').style.background = 'rgb(44, 12, 12)'
                        document.querySelector('#boolean').style.color = "rgb(44, 12, 12)"
                    })
                    cards[6].addEventListener('click', (e)=>{
                        defaultLives --
                        DOMflipArr = []
                        HTMLflipArr = []
                        objectFlipArr = []
                        booleanFlipArr = []
                        document.querySelectorAll("input")[0].value = defaultLives
                        document.querySelector('#DOM').style.background = 'rgb(44, 12, 12)'
                        document.querySelector('#DOM').style.color = "rgb(44, 12, 12)"
                        document.querySelector('#boolean').style.background = 'rgb(44, 12, 12)'
                        document.querySelector('#boolean').style.color = "rgb(44, 12, 12)"
                    })
                    cards[7].addEventListener('click', (e)=>{
                        defaultLives --
                        DOMflipArr = []
                        HTMLflipArr = []
                        objectFlipArr = []
                        booleanFlipArr = []
                        document.querySelectorAll("input")[0].value = defaultLives
                        document.querySelector('#DOM').style.background = 'rgb(44, 12, 12)'
                        document.querySelector('#DOM').style.color = "rgb(44, 12, 12)"
                        document.querySelector('#boolean').style.background = 'rgb(44, 12, 12)'
                        document.querySelector('#boolean').style.color = "rgb(44, 12, 12)"
                    })

                }
            })
        }
        if(htmlIds[i] === "#ObjectMatch"){
            cards[5].addEventListener('click', (e)=> {
                flippedCard_2 = "objectMatch"
                objectFlipArr.push(flippedCard_2)
                document.querySelector('#ObjectMatch').style.background = 'black'
                document.querySelector('#ObjectMatch').style.color = "white"
                if((objectFlipArr[0] === "object" || objectFlipArr[0] ==="objectMatch") && (objectFlipArr[1] === "object" ||objectFlipArr[1] === "objectMatch")){
                    pairsMade ++
                    document.querySelectorAll("input")[1].value = pairsMade
                    
                }else{
                    cards[0].addEventListener('click', (e)=>{
                        defaultLives --
                        DOMflipArr = []
                        HTMLflipArr = []
                        objectFlipArr = []
                        booleanFlipArr = []
                        document.querySelectorAll("input")[0].value = defaultLives
                        document.querySelector('#DOM').style.background = 'rgb(44, 12, 12)'
                        document.querySelector('#DOM').style.color = "rgb(44, 12, 12)"
                        document.querySelector('#boolean').style.background = 'rgb(44, 12, 12)'
                        document.querySelector('#boolean').style.color = "rgb(44, 12, 12)"
                    })
                    cards[1].addEventListener('click', (e)=>{
                        defaultLives --
                        DOMflipArr = []
                        HTMLflipArr = []
                        objectFlipArr = []
                        booleanFlipArr = []
                        document.querySelectorAll("input")[0].value = defaultLives
                        document.querySelector('#DOM').style.background = 'rgb(44, 12, 12)'
                        document.querySelector('#DOM').style.color = "rgb(44, 12, 12)"
                        document.querySelector('#boolean').style.background = 'rgb(44, 12, 12)'
                        document.querySelector('#boolean').style.color = "rgb(44, 12, 12)"
                    })
                    cards[3].addEventListener('click', (e)=>{
                        defaultLives --
                        DOMflipArr = []
                        HTMLflipArr = []
                        objectFlipArr = []
                        booleanFlipArr = []
                        document.querySelectorAll("input")[0].value = defaultLives
                        document.querySelector('#DOM').style.background = 'rgb(44, 12, 12)'
                        document.querySelector('#DOM').style.color = "rgb(44, 12, 12)"
                        document.querySelector('#boolean').style.background = 'rgb(44, 12, 12)'
                        document.querySelector('#boolean').style.color = "rgb(44, 12, 12)"
                    })
                    cards[4].addEventListener('click', (e)=>{
                        defaultLives --
                        DOMflipArr = []
                        HTMLflipArr = []
                        objectFlipArr = []
                        booleanFlipArr = []
                        document.querySelectorAll("input")[0].value = defaultLives
                        document.querySelector('#DOM').style.background = 'rgb(44, 12, 12)'
                        document.querySelector('#DOM').style.color = "rgb(44, 12, 12)"
                        document.querySelector('#boolean').style.background = 'rgb(44, 12, 12)'
                        document.querySelector('#boolean').style.color = "rgb(44, 12, 12)"
                    })
                    cards[6].addEventListener('click', (e)=>{
                        defaultLives --
                        DOMflipArr = []
                        HTMLflipArr = []
                        objectFlipArr = []
                        booleanFlipArr = []
                        document.querySelectorAll("input")[0].value = defaultLives
                        document.querySelector('#DOM').style.background = 'rgb(44, 12, 12)'
                        document.querySelector('#DOM').style.color = "rgb(44, 12, 12)"
                        document.querySelector('#boolean').style.background = 'rgb(44, 12, 12)'
                        document.querySelector('#boolean').style.color = "rgb(44, 12, 12)"
                    })
                    cards[7].addEventListener('click', (e)=>{
                        defaultLives --
                        DOMflipArr = []
                        HTMLflipArr = []
                        objectFlipArr = []
                        booleanFlipArr = []
                        document.querySelectorAll("input")[0].value = defaultLives
                        document.querySelector('#DOM').style.background = 'rgb(44, 12, 12)'
                        document.querySelector('#DOM').style.color = "rgb(44, 12, 12)"
                        document.querySelector('#boolean').style.background = 'rgb(44, 12, 12)'
                        document.querySelector('#boolean').style.color = "rgb(44, 12, 12)"
                    })

                }
            })
        }
        
        if(htmlIds[i] === "#DOMmatch"){
            cards[6].addEventListener('click', (e)=> {
                flippedCard_2 = "DOMmatch"
                DOMflipArr.push(flippedCard_2)
                
                document.querySelector('#DOMmatch').style.background = 'black'
                document.querySelector('#DOMmatch').style.color = "white"
                if((DOMflipArr[0] === "DOM" || DOMflipArr[0] ==="DOMmatch") && (DOMflipArr[1] === "DOM" ||DOMflipArr[1] === "DOMmatch")){
                    pairsMade ++
                    document.querySelectorAll("input")[1].value = pairsMade
                    
                }else{
                    cards[1].addEventListener('click', (e)=>{
                        defaultLives --
                        DOMflipArr = []
                        HTMLflipArr = []
                        objectFlipArr = []
                        booleanFlipArr = []
                        document.querySelectorAll("input")[0].value = defaultLives
                        document.querySelector('#DOM').style.background = 'rgb(44, 12, 12)'
                        document.querySelector('#DOM').style.color = "rgb(44, 12, 12)"
                        document.querySelector('#boolean').style.background = 'rgb(44, 12, 12)'
                        document.querySelector('#boolean').style.color = "rgb(44, 12, 12)"
                    })
                    cards[2].addEventListener('click', (e)=>{
                        defaultLives --
                        DOMflipArr = []
                        HTMLflipArr = []
                        objectFlipArr = []
                        booleanFlipArr = []
                        document.querySelectorAll("input")[0].value = defaultLives
                        document.querySelector('#DOM').style.background = 'rgb(44, 12, 12)'
                        document.querySelector('#DOM').style.color = "rgb(44, 12, 12)"
                        document.querySelector('#boolean').style.background = 'rgb(44, 12, 12)'
                        document.querySelector('#boolean').style.color = "rgb(44, 12, 12)"
                    })
                    cards[3].addEventListener('click', (e)=>{
                        defaultLives --
                        DOMflipArr = []
                        HTMLflipArr = []
                        objectFlipArr = []
                        booleanFlipArr = []
                        document.querySelectorAll("input")[0].value = defaultLives
                        document.querySelector('#DOM').style.background = 'rgb(44, 12, 12)'
                        document.querySelector('#DOM').style.color = "rgb(44, 12, 12)"
                        document.querySelector('#boolean').style.background = 'rgb(44, 12, 12)'
                        document.querySelector('#boolean').style.color = "rgb(44, 12, 12)"
                    })
                    cards[4].addEventListener('click', (e)=>{
                        defaultLives --
                        DOMflipArr = []
                        HTMLflipArr = []
                        objectFlipArr = []
                        booleanFlipArr = []
                        document.querySelectorAll("input")[0].value = defaultLives
                        document.querySelector('#DOM').style.background = 'rgb(44, 12, 12)'
                        document.querySelector('#DOM').style.color = "rgb(44, 12, 12)"
                        document.querySelector('#boolean').style.background = 'rgb(44, 12, 12)'
                        document.querySelector('#boolean').style.color = "rgb(44, 12, 12)"
                    })
                    cards[5].addEventListener('click', (e)=>{
                        defaultLives --
                        DOMflipArr = []
                        HTMLflipArr = []
                        objectFlipArr = []
                        booleanFlipArr = []
                        document.querySelectorAll("input")[0].value = defaultLives
                        document.querySelector('#DOM').style.background = 'rgb(44, 12, 12)'
                        document.querySelector('#DOM').style.color = "rgb(44, 12, 12)"
                        document.querySelector('#boolean').style.background = 'rgb(44, 12, 12)'
                        document.querySelector('#boolean').style.color = "rgb(44, 12, 12)"
                    })
                    cards[7].addEventListener('click', (e)=>{
                        defaultLives --
                        DOMflipArr = []
                        HTMLflipArr = []
                        objectFlipArr = []
                        booleanFlipArr = []
                        document.querySelectorAll("input")[0].value = defaultLives
                        document.querySelector('#DOM').style.background = 'rgb(44, 12, 12)'
                        document.querySelector('#DOM').style.color = "rgb(44, 12, 12)"
                        document.querySelector('#boolean').style.background = 'rgb(44, 12, 12)'
                        document.querySelector('#boolean').style.color = "rgb(44, 12, 12)"
                    })

                }
            })
        }
        if(htmlIds[i] === "#HTMLmatch"){
            cards[7].addEventListener('click', (e)=> {
                flippedCard_2 = "HTMLmatch"
                HTMLflipArr.push(flippedCard_2)
                document.querySelector('#HTMLmatch').style.background = 'black'
                document.querySelector('#HTMLmatch').style.color = "white"
                if((HTMLflipArr[0] === "HTML" || HTMLflipArr[0] ==="HTMLmatch") && (HTMLflipArr[1] === "HTML" ||HTMLflipArr[1] === "HTMLmatch")){
                    pairsMade ++
                    document.querySelectorAll("input")[1].value = pairsMade
                    
                }else{
                    cards[0].addEventListener('click', (e)=>{
                        defaultLives --
                        DOMflipArr = []
                        HTMLflipArr = []
                        objectFlipArr = []
                        booleanFlipArr = []
                        document.querySelectorAll("input")[0].value = defaultLives
                        document.querySelector('#DOM').style.background = 'rgb(44, 12, 12)'
                        document.querySelector('#DOM').style.color = "rgb(44, 12, 12)"
                        document.querySelector('#boolean').style.background = 'rgb(44, 12, 12)'
                        document.querySelector('#boolean').style.color = "rgb(44, 12, 12)"
                    })
                    cards[1].addEventListener('click', (e)=>{
                        defaultLives --
                        DOMflipArr = []
                        HTMLflipArr = []
                        objectFlipArr = []
                        booleanFlipArr = []
                        document.querySelectorAll("input")[0].value = defaultLives
                        document.querySelector('#DOM').style.background = 'rgb(44, 12, 12)'
                        document.querySelector('#DOM').style.color = "rgb(44, 12, 12)"
                        document.querySelector('#boolean').style.background = 'rgb(44, 12, 12)'
                        document.querySelector('#boolean').style.color = "rgb(44, 12, 12)"
                    })
                    cards[2].addEventListener('click', (e)=>{
                        defaultLives --
                        DOMflipArr = []
                        HTMLflipArr = []
                        objectFlipArr = []
                        booleanFlipArr = []
                        document.querySelectorAll("input")[0].value = defaultLives
                        document.querySelector('#DOM').style.background = 'rgb(44, 12, 12)'
                        document.querySelector('#DOM').style.color = "rgb(44, 12, 12)"
                        document.querySelector('#boolean').style.background = 'rgb(44, 12, 12)'
                        document.querySelector('#boolean').style.color = "rgb(44, 12, 12)"
                    })
                    cards[4].addEventListener('click', (e)=>{
                        defaultLives --
                        DOMflipArr = []
                        HTMLflipArr = []
                        objectFlipArr = []
                        booleanFlipArr = []
                        document.querySelectorAll("input")[0].value = defaultLives
                        document.querySelector('#DOM').style.background = 'rgb(44, 12, 12)'
                        document.querySelector('#DOM').style.color = "rgb(44, 12, 12)"
                        document.querySelector('#boolean').style.background = 'rgb(44, 12, 12)'
                        document.querySelector('#boolean').style.color = "rgb(44, 12, 12)"
                    })
                    cards[5].addEventListener('click', (e)=>{
                        defaultLives --
                        DOMflipArr = []
                        HTMLflipArr = []
                        objectFlipArr = []
                        booleanFlipArr = []
                        document.querySelectorAll("input")[0].value = defaultLives
                        document.querySelector('#DOM').style.background = 'rgb(44, 12, 12)'
                        document.querySelector('#DOM').style.color = "rgb(44, 12, 12)"
                        document.querySelector('#boolean').style.background = 'rgb(44, 12, 12)'
                        document.querySelector('#boolean').style.color = "rgb(44, 12, 12)"
                    })
                    cards[6].addEventListener('click', (e)=>{
                        defaultLives --
                        DOMflipArr = []
                        HTMLflipArr = []
                        objectFlipArr = []
                        booleanFlipArr = []
                        document.querySelectorAll("input")[0].value = defaultLives
                        document.querySelector('#DOM').style.background = 'rgb(44, 12, 12)'
                        document.querySelector('#DOM').style.color = "rgb(44, 12, 12)"
                        document.querySelector('#boolean').style.background = 'rgb(44, 12, 12)'
                        document.querySelector('#boolean').style.color = "rgb(44, 12, 12)"
                    })

                }
            })
            
        }
        
       
        
        
    }
    
    
    
}
flipCard()

*/





