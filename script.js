const maincontainer = document.getElementById('rootcontainer');
const maincontainerheight = maincontainer.offsetHeight;
const maincontainerwidth = maincontainer.offsetWidth;

const square = (Math.floor(maincontainerheight/21))*(Math.floor(maincontainerwidth/21));


for (i = 0; i < square; i++){
    const newsquare = document.createElement('div');
    newsquare.classList.add('sq');
    maincontainer.appendChild(newsquare);  
}

let allsqdiv = document.querySelectorAll('.sq');
console.log(allsqdiv.length);

let noofsqdiv = allsqdiv.length;
let noofcolordiv = Math.floor(noofsqdiv/19);

// Generate a random number between rang 
let max = noofsqdiv;
let min = 1;
function genrandomwithinrange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function setcolor(){
    for (i = 0; i < noofcolordiv; i++) {
        let p = genrandomwithinrange(min, max);
        let necessarydiv = allsqdiv[p-1];
        let randomColor = Math.floor(Math.random()*16777215).toString(16);
        necessarydiv.style.backgroundColor = "#" + randomColor;
        necessarydiv.style.transitionDuration = "4s";
    }
    for (i = 0; i < noofsqdiv; i++) {
        let p = noofsqdiv - genrandomwithinrange(min, max);
        let necessarydiv = allsqdiv[p];
        let randomColor = Math.floor(Math.random()*16777215).toString(16);
        necessarydiv.style.backgroundColor = 'black';
        necessarydiv.style.transitionDuration = "4s";
    }
}





setInterval(() => {
    setcolor();
}, 4000);
    




// function setcolor(){

//     for(i = 0; i < noofcolordiv; i++){
//         let necessarydiv = allsqdiv[i];
//         necessarydiv.style.backgroundColor = 'red';
//     }
// }

// setcolor();
// Final Color Trail Project

// const container = document.getElementById('container');

// const SQUARES = 2700;

// for(let i = 0; i < SQUARES; i++){
//     const square = document.createElement('div');
//     square.classList.add('squaire');
//     container.appendChild(square);

//     square.addEventListener('mouseover', function(){
//         addcolor(square);
//     })

//     square.addEventListener('mouseout', function(){
//         removecolor(square);
//     })
// }

// function addcolor(square){
//     let randomColor = Math.floor(Math.random()*16777215).toString(16);
//     square.style.backgroundColor = "#" + randomColor;
// }

// function removecolor(square){
//     square.style.backgroundColor = '#3b3b3b';
// }




// const container = document.getElementById('container');
// const colors = ['#e74c3c', 
// '#b67c3c', 
// '#e84c3c', 
// '#c61c3c', 
// '#e74c3a'];

// const SQUARES = 500;

// for(let i = 0; i < SQUARES; i++){
//     const square = document.createElement('div');
//     square.classList.add('squaire');

//     square.addEventListener('mouseover' , () => setColor(square))
   
//     square.addEventListener('mouseout' , () => removeColor(square))
//     container.appendChild(square);
// }


// function setColor(element) {
//     const color = getRandomColor();
//     element.style.background = color;
//     element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
// }
// function removeColor(element) {
//     element.style.background = '#4d391f';
//     element.style.boxShadow = '0 0 2px #1d460b';
// }
// function getRandomColor(){
//     // let color = Math.floor(Math.random()*16777215).toString(16);
//     // return color
//     return colors[Math.floor(Math.random() * colors.length)]
// }





// ALL BODY RED

// function myFunction() {
//     var x = document.getElementsByTagName("BODY")[0];
//     x.style.backgroundColor = "red";
//   }



// DONE PROJECT

// const container = document.getElementById('container');

// const noOfSquare = 10000;

// for(i = 0; i<noOfSquare; i++){
//     const newsquare = document.createElement('div');
//     newsquare.classList.add('square');
//     container.appendChild(newsquare);

//     newsquare.addEventListener('mouseover', function(){
//         const randomColor = Math.floor(Math.random()*16777215).toString(16);
//         newsquare.style.backgroundColor = "#" + randomColor;
//     });
// }





