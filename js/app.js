



//global variables 



///DOM elements

document.querySelector('button').addEventListener('click', ()=> {
    console.log('this is working');
})




///functions


//function to creat the flipCards from the start button

const createCards = (numOfCards) => {
    for (let i = 0; i < numOfCards.lenght; i++) {
        const cards = document.createElement("div");
        //append the cards
        document.querySelector(".cards").append(cards);
        //generate basic style'
        applyStartColor(cards)
    }
    
}

const cardsContainer = document.querySelector('.cards')

document.querySelector('button').addEventListener('click', () => {
    createCards(15);
});


const applyStartColor = () => {
    cards.setAttribute("style", "background-color: blue;");
      
}




//function that subtracts a life from the player board when 2 cards do not match

//function that identifies when pairs are either matched or identifying a miss

