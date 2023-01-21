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
    choosenColors = [];
    setTimeout(() => {document.getElementById(colors[ind]).classList.remove("is-active");}, 200);
    console.log(activeColors)
}

let isEqual = (activeColorsArray, choosenColorsArray) => {
    // console.log (array[0] === choosenColor[0] ? true : false);
    // console.log(JSON.stringify(activeColorsArray) === JSON.stringify(choosenColorsArray))
    // for (let i = 0; i < activeColorsArray.length; i++) {
    //     console.log(JSON.stringify(activeColorsArray[i]) === JSON.stringify(choosenColorsArray[i]))
    //     // if (JSON.stringify(activeColorsArray[i]) === JSON.stringify(choosenColorsArray[i])){
    //     //     console.log(true)
    //     //     // colorRender();
    //     // }
    //     // else false
    // }
    // console.log(activeColorsArray)
    // console.log(choosenColorsArray)
    // console.log(activeColorsArray.length, choosenColorsArray.length)

    for (let i = 0; i < activeColorsArray.length; i++) {
        console.log(activeColorsArray[i] === choosenColorsArray[i])
        console.log(activeColorsArray[i], choosenColorsArray[i])
        console.log(i)
        // if (activeColorsArray[i] === choosenColorsArray[i]) {
        //     chooseColor;
            
            
            
        // }
        // else alert('false')

        return activeColorsArray[i] === choosenColorsArray[i] ? true : false
        
    }
    
    
    // console.log(activeColorsArray)
    // console.log(choosenColorsArray)
    
    // console.log(activeColorsArray.length, choosenColorsArray.length)
    
    // console.log(choosenColorsArray)
    

    // if (activeColorsArray.length === choosenColorsArray.length) {
    //     for (let i = 0; i < activeColorsArray.length; i++) {
    //         console.log(activeColorsArray[i] === choosenColorsArray[i])
            
    //         // if (JSON.stringify(activeColorsArray[i]) === JSON.stringify(choosenColorsArray[i])){
    //         //     colorRender();
    //         //     choosenColors = [];
    //         // }
    //         // else {
    //         //     alert('false')
    //         // }
    //     }

    // }
}
  

const gameColors = document.getElementsByClassName('color');

const colorPressed = event => {
    choosenColors.push(event.target.id);
    if (isEqual(activeColors, choosenColors)) {
        colorRender();
    }
    else {
        
        alert('false')
    } 
    
}

for (let color of gameColors) {
    color.addEventListener("click", colorPressed);
  }


let chooseColor = () => {
    
    for (let color of gameColors) {
        color.addEventListener("click", colorPressed);
      }

}

