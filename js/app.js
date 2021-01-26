
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



//function that subtracts a life from the player board when 2 cards do not match

//function that identifies when pairs are either matched or identifying a miss

