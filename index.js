window.onload = () => {
    colorRender();

}



document.getElementById("start").onclick = () => {isEqual(choosenColors,activeColors )};

let start = () => {
    document.getElementById("blue").classList.add("is-active");
}



const colors = ['blue','green','red','yellow'];
let activeColors = [];
let choosenColors = [];



let colorRender = () => {
    let ind = Math.floor(Math.random() * colors.length);

    document.getElementById(colors[ind]).classList.add("is-active");
    activeColors.push(colors[ind]);
    setTimeout(() => {document.getElementById(colors[ind]).classList.remove("is-active");}, 200);
    console.log(activeColors)
    // isTrue(activeColorInd)

}

let isEqual = (activeColorsArray, choosenColorsArray) => {
    // console.log (array[0] === choosenColor[0] ? true : false);
    console.log(JSON.stringify(activeColorsArray) === JSON.stringify(choosenColorsArray))
    // console.log (choosenColor)
    if (activeColorsArray.length === choosenColorsArray.length) {
        if (JSON.stringify(activeColorsArray) === JSON.stringify(choosenColorsArray)){
            colorRender();
            choosenColors = [];
        }
        else {
            alert('false')
        }

    }
    // else {

    // }
}

// isTrue (activeColorInd,choosenColor )
// document.addEventListener("click", mySecondFunction);

// const buttonPressed = e => { 
//     result.innerHTML = `ID of <em>${e.target.innerHTML}</em> is <strong>${e.target.id}</strong>`;
//   }
  
//   for (let button of buttons) {
//     button.addEventListener("click", buttonPressed);
//   }
  

const gameColors = document.getElementsByClassName('color');

const colorPressed = event => {
    choosenColors.push(event.target.id);
    isEqual(choosenColors,activeColors )
}

for (let color of gameColors) {
    color.addEventListener("click", colorPressed);
  }

// colorPressed()

let chooseColor = (color) => {
    
    document.getElementById("blue").classList.add("is-active");

}

