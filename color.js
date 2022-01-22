const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const background_color = document.getElementById("box");
const btn = document.getElementById("button1");
const color_span = document.getElementById("coler-text");




btn.addEventListener('click', function(){
    let hexcolor = "#";
    for(let i = 0; i < 6 ; i++){
        hexcolor += hex[getRandomNumber()];
    }
    background_color.style.backgroundColor =  hexcolor;
    color_span.innerHTML = hexcolor;
})

function getRandomNumber(){
    let randomNumber = Math.floor(Math.random() * hex.length);
    return randomNumber;
}


