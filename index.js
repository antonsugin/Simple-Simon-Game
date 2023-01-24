window.onload = () => {
    setNames ();
    header(players.namePlayerOne);

}

const audio = new Audio ('sounds/wrong.mp3');
const colors = ['blue','green','red','yellow'];
const gameColors = document.getElementsByClassName('color');
let level = 0;
let personPlayer = '';
let activeColors = [];
let choosenColors = [];
let players = {
    "namePlayerOne" : "Player 1",
    "levelPlayerOne" : 0,
    "namePlayerTwo" : "Player 2",
    "levelPlayerTwo" : 0
};



const header = (player) => {
    level = 0;

    setTimeout(function () {
        document.getElementById("header").innerHTML = 'Ready Player ' + player;
        
    }, 500);

    setTimeout(function () {
        colorRender();
        document.getElementById("header").innerHTML = 'Level ' + level;
        
    }, 2000);
    
}



const starter = () => {
    level = 0;

}



let setNames = () => {

    let capitalizeFirstLetter = (name) => name.charAt(0).toUpperCase() + name.slice(1);

    let player = prompt("Please enter your name", "Player 1");
    let person = prompt("Please enter your name", "Player 2");

    if (players.namePlayerOne !== null && person !== null) {
        document.getElementById("prompt-name1").innerHTML = capitalizeFirstLetter(player) +":";
        document.getElementById("prompt-name2").innerHTML = capitalizeFirstLetter(person) + ":";
    }

    players.namePlayerOne = capitalizeFirstLetter(player);
    players.namePlayerTwo = capitalizeFirstLetter(person);
    personPlayer = players.namePlayerOne;
}


let colorRender = () => {
    level++;
    document.getElementById("header").innerHTML = 'Level ' + level;
    let ind = Math.floor(Math.random() * colors.length);

    document.getElementById(colors[ind]).classList.add("is-active");
    activeColors.push(colors[ind]);
    choosenColors = [];
    setTimeout(() => {document.getElementById(colors[ind]).classList.remove("is-active");}, 200);    
}

let isEqual = (currentLevel) => {

    if (activeColors[currentLevel] === choosenColors[currentLevel]) {
        if (choosenColors.length === activeColors.length){
        
        colorRender();
        }
      }
      else {
        wrong();
        activeColors = [];

        checkLevel(level);
        
        
        console.log(personPlayer)
        if (personPlayer !== '') {
            personPlayer = players.namePlayerTwo;
            header(players.namePlayerTwo);
        }
      }

}    


const colorPressed = event => {
    
    choosenColors.push(event.target.id);

    document.getElementById(event.target.id).classList.add("is-pressed");
    setTimeout(function () {
        document.getElementById(event.target.id).classList.remove("is-pressed");
      }, 200);

    isEqual(choosenColors.length - 1)
}
    

for (let color of gameColors) {
    color.addEventListener("click", colorPressed);
  }


const checkLevel = (level) => {
    
    if (personPlayer === players.namePlayerOne) {
        players.levelPlayerOne = level - 1;
        document.getElementById("win1").innerHTML = 'Level ' + players.levelPlayerOne;
        
    }
    else {
        players.levelPlayerTwo = level - 1;
        document.getElementById("win2").innerHTML = 'Level ' + players.levelPlayerTwo;
        console.log(checkWinner(players.levelPlayerOne,players.levelPlayerTwo));
        personPlayer = '';
        document.getElementById("restart").style.visibility = "visible";
    }
}

const checkWinner = (levelOne, levelTwo) => {

    if (levelOne === levelTwo ) document.getElementById("header").innerHTML = "Draw!!!";
    else {

        levelOne > levelTwo 
        ? document.getElementById("header").innerHTML = players.namePlayerOne + " Wins The Game!!!"
        : document.getElementById("header").innerHTML = players.namePlayerTwo + " Wins The Game!!!";
    }
    
 }


document.getElementById("restart").onclick = () => {

    document.getElementById("win1").innerHTML = 'Good Luck!';
    document.getElementById("win2").innerHTML = 'Good Luck!';
    personPlayer = players.namePlayerOne;
    activeColors = [];
    header(players.namePlayerOne);
    document.getElementById("restart").style.visibility = "hidden";

};

document.getElementById("start").onclick = () => {
    document.getElementById("win1").innerHTML = 'Good Luck!';
    document.getElementById("win2").innerHTML = 'Good Luck!';
    activeColors = [];
    document.getElementById("restart").style.visibility = "hidden";

    setNames ();
    header(players.namePlayerOne);
};

const wrong = () => {
    
    audio.play();

    document.getElementsByTagName('body')[0].classList.add('wrong');

    setTimeout(function () {
        document.getElementsByTagName('body')[0].classList.remove('wrong');
        
    }, 200);
}

