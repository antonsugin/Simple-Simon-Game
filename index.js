document.getElementById("start").onclick = () => {random()};

let start = () => {
    document.getElementById("blue").classList.add("is-active");
}

const coloris = {
    // "1" : { "color" : "blue", "id" : 1 },
    // green : { "color" : "green", "id" : 2 },
    // red : { "color" : "red", "id" : 3 },
    // yellow : { "color" : "yellow", "id" : 4 },
    'blue' : 1,
    'green' : 2,
    'red' : 3,
    'yellow' : 4
}

// blue=1;
// green=2;
// red=3;
// yellow=4;


const colors = ['blue','green','red','yellow'];

let random = () => {
    let num = Math.floor(Math.random() * colors.length);

    document.getElementById(colors[num]).classList.add("is-active");


    console.log(colors[num]);
    console.log(num);
}

let chooseColor = (color) => {
    
    document.getElementById("blue").classList.add("is-active");

}

// let b = coloris.'1'.color;
// console.log(b)