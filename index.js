window.onload = () => {
    setNames ();
    

    // setTimeout(function () {
    //     document.getElementById("header").innerHTML = 'Ready Player ' + players.namePlayerOne
        
    //     }, 1000);

    setTimeout(function () {
        colorRender();
        // document.getElementById("header").innerHTML = 'Level ' + level;
        
        }, 500);

}



let players = {
    "namePlayerOne" : "Player 1",
    "levelPlayerOne" : 0,
    "namePlayerTwo" : "Player 2",
    "levelPlayerTwo" : 0
}


// console.log(players.namePlayerOne)
let level = 0;
// let playerName = "Player 1";
// let personName = "Player 2";


const starter = () => {
    level = 0;

}

let personPlayer = '';

let setNames = () => {

    // enabled();
    // restart();
    
    // document.getElementById("header").innerHTML = "Good Luck!!!";

    let capitalizeFirstLetter = (name) => name.charAt(0).toUpperCase() + name.slice(1);

    let player = prompt("Please enter your name", "Player 1");
    let person = prompt("Please enter your name", "Player 2");

    if (players.namePlayerOne !== null && person !== null) {
    document.getElementById("prompt-name1").innerHTML = capitalizeFirstLetter(player);
    // document.getElementById("prompt-player1").innerHTML = capitalizeFirstLetter(player);
    document.getElementById("prompt-name2").innerHTML = capitalizeFirstLetter(person);
    // document.getElementById("prompt-player2").innerHTML = capitalizeFirstLetter(person);
    }

    players.namePlayerOne = capitalizeFirstLetter(player);
    players.namePlayerTwo = capitalizeFirstLetter(person);
    personPlayer = players.namePlayerOne;
}




// document.getElementById("start").onclick = () => {isEqual(choosenColors,activeColors )};

let start = () => {
    document.getElementById("blue").classList.add("is-active");
}



const colors = ['blue','green','red','yellow'];
let activeColors = [];
let choosenColors = [];



let colorRender = () => {
    level++
    document.getElementById("header").innerHTML = 'Level ' + level
    let ind = Math.floor(Math.random() * colors.length);

    document.getElementById(colors[ind]).classList.add("is-active");
    activeColors.push(colors[ind]);
    choosenColors = [];
    setTimeout(() => {document.getElementById(colors[ind]).classList.remove("is-active");}, 200);
    console.log(activeColors)

    
}

const checkLevel = (level) => {
    // alert('hi')
    console.log(personPlayer)
    if (personPlayer) {
        document.getElementById("win1").innerHTML = players.levelPlayerOne ='Level ' + (level - 1)
    }
    else players.levelPlayerTwo = level - 1
}




// console.log(level)
// activeColorsArray, choosenColorsArray

// const restartButton = document.getElementById("restart").addEventListener("click", colorRender, 
// () => {
//     activeColors = [];
// });

let isEqual = (currentLevel) => {

    if (activeColors[currentLevel] === choosenColors[currentLevel]) {
        if (choosenColors.length === activeColors.length){
        //   setTimeout(function () {
        //     colorRender();
        //   }, 1000);
        colorRender();
        }
      }
      else {
        activeColors = [];
        // console.log(level)
        checkLevel(level)
      }

}    

const gameColors = document.getElementsByClassName('color');

const colorPressed = event => {
    choosenColors.push(event.target.id);

    console.log(activeColors)
    console.log(choosenColors)
    isEqual(choosenColors.length - 1)
}
    

for (let color of gameColors) {
    color.addEventListener("click", colorPressed);
  }









// let chooseColor = () => {
    
//     for (let color of gameColors) {
//         color.addEventListener("click", colorPressed);
//       }

// }


// TESTS!!!!!!!!!!!!!!!!!!!!!

// function Equal()
//     {
     
//      var a = [1, 2, 3, 5];
//      var b = [1, 2, 4, 5];
      
//       // If length is not equal
//     //   if(a.length!=b.length)
//     //    return "False";
//     //   else
//     //   {
       
//       // Comparing each element of array
//        for(let i=0;i<a.length;i++)
//        if(f[i]!=t[i]) {
//         // console.log(f[i]);
//         // console.log(t[i]);
//        return "False";
       

//        }return "True";
//     //   }
//     }
//     var v = Equal();
//     // console.log(v);

const compareArrays = (a, b) =>
 
  a.every((element, index) => element === b[index]);

  let kar = [];
  const f = ['blue','green','red','yellow'];
  
  const t = ['blue','green','yellow']; 

  kar = f.slice(0,t.length)

//   console.log(f.slice(0,t.length))
//   console.log(kar === t)
//   console.log(kar)
//   console.log(t)
//   f.copyWithin(2,0)
//   console.log(f.slice(0,t.length) === kar)

function Equal(a, b)
    {
    return a.join() == b.join();
    }

    // console.log(Equal(kar, t))





    // let newChoosenColorsArray = [];
    // const f = ['blue','green','red','yellow'];
  
    // const t = ['red','green','red'];   

    //     console.log(activeColorsArray)
    //     console.log(choosenColorsArray)

    // if (activeColorsArray[0] === choosenColorsArray[0]) {
    //     return true
    // }
    // else if (activeColorsArray[0] === choosenColorsArray[0] && activeColorsArray.length !== choosenColorsArray.length) {

    
        // let newChoosenColorsArray = activeColorsArray.slice(0,choosenColorsArray.length)

        // console.log(newChoosenColorsArray)
        // console.log(choosenColorsArray)

        // return JSON.stringify(newChoosenColorsArray) === JSON.stringify(choosenColorsArray) ? true : false;
    
        // let newChoosenColorsArray = activeColorsArray.slice(0,choosenColorsArray.length)

        // console.log(newChoosenColorsArray)
        // console.log(choosenColorsArray)
        // console.log(JSON.stringify(newChoosenColorsArray))
        // console.log(activeColors)

        // return JSON.stringify(newChoosenColorsArray) === JSON.stringify(choosenColorsArray) ? true : false;
    // }
    // else {
    //     return false
// }

    

//   console.log(f.splice(0,t.length))
//   console.log(kar === t)
//   console.log(kar)
//   console.log(t)
//   f.copyWithin(2,0)
//   console.log(f.splice(0,t.length) === kar)

// function Equal(a, b)
//     {
//     return a.join() == b.join();
//     }

//     console.log(Equal(kar, t))



// }



// if (activeColors[0] === choosenColors[0] && activeColors.length === choosenColors.length) {
    //     colorRender();
    // }
    // else if (activeColors.length !== choosenColors.length) {
    //     if (isEqual(activeColors, choosenColors) && activeColors.length === choosenColors.length) {
    //         colorRender();
    //         // chooseColor();
    //     }
    //     else {
    //         alert('false 104')
    //     }
    // }
    // // else if (isEqual(activeColors, choosenColors)) {
    // //     colorRender();
    // // }
    // // else if (activeColors.length !== choosenColors.length) {
    // //     // alert('ok')
    // // }
    // else if (activeColors[0] !== choosenColors[0]) {
    //     alert('false 114') 
    // }
    // else {
        
    //     alert('false 118')
    // }
    // // colorRender(); 
    // console.log(choosenColors)
    
// }

// console.log(choosenColors)
// console.log(activeColors)

  