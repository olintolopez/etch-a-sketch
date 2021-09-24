const container        = document.querySelector('.container');
const btnBlack         = document.querySelector('#btnBlack');
const btnRainbow       = document.querySelector('#btnRainbow');
const btnGray          = document.querySelector('#btnGray');

const btnClearBoard    = document.createElement('button');
let idRange            = document.querySelector('#idRange');
const btnSize          = document.createElement('button');
const etchsketch       = document.querySelector('.etchsketch');
const buttonsContainer = document.querySelector('.buttons');
const btnClear         = document.getElementById('clear');
let slider             = document.querySelector('#sizeRange');
const userColorPicker  = document.querySelector('#input-color');
let colorBase          = 'white';


window.onload = () => {
    initGame();
}

function initGame(){
    const boxs = container.querySelectorAll('.box')
    boxs.forEach(box => box.addEventListener('mouseover', () => {
        box.style.background = 'black'
    }))
}


function createGrid(col , rows) {
    for(let i = 0;i < (col * rows); i++) {
        const div = document.createElement('div') 
        container.style.gridTemplateColumns = `repeat(${col}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
        container.appendChild(div).classList.add('box')
    }
}

function clear(){
    userColorPicker.value  = '#ffffff';    
    const boxs = container.querySelectorAll('.box');
    boxs.forEach(box => {
        box.style.background = 'white';
    })

}

function clearBoard(){
    const boxs = container.querySelectorAll('.box');
    btnClearBoard.textContent='CLEAR';    
    clear();    
    buttonsContainer.appendChild(btnClearBoard).classList.add('btn');
}

function userColorSelection(event) {
    let color  = event.target.value;
    colorBase  = color;
    const boxs = container.querySelectorAll('.box');
    clear();
    boxs.forEach(box => box.addEventListener('mouseover', ()=> {
            box.style.background = color;
    }))
}

function grayCell() { 
    
    const boxs = container.querySelectorAll('.box')
    clear();
    boxs.forEach(box => box.addEventListener('mouseover', ()=> {
            let RNum = Math.floor(Math.random() * 256);
            let GrayScale = `rgb(${RNum},${RNum},${RNum})`
            box.style.background = GrayScale;
    }))
}

function rainbowCell() {
    
    const boxs = container.querySelectorAll('.box');
    clear();
    boxs.forEach(box => box.addEventListener('mouseover', () => {
            let R = Math.floor(Math.random() * 256);
            let G = Math.floor(Math.random() * 256);
            let B = Math.floor(Math.random() * 256);
            const RGB = `rgb(${R},${G},${B})`;
            box.style.background = RGB;
    }))
}

function blackColorCell() {
    
    const boxs = container.querySelectorAll('.box')
    clear();
    boxs.forEach(box => box.addEventListener('mouseover', function() {
            this.style.background = 'black'
    }))
}
 
function reSet() {
    const boxs = container.querySelectorAll('.box')
    boxs.forEach(box => {
        box.remove();
    })
}

slider.addEventListener('mouseup', ()=>{
    clear();
    /* console.log(slider.value); */
    data=slider.value;
    idRange.textContent=data+'x'+data;
    createGrid(data,data);
});


createGrid(16,16);

btnClear.addEventListener('click',()=>clear());
btnGray.addEventListener('click',()=>grayCell());
btnBlack.addEventListener('click',()=>blackColorCell());
btnRainbow.addEventListener('click',()=>rainbowCell());
userColorPicker.addEventListener('change', userColorSelection, false);
userColorPicker.addEventListener('input', userColorSelection, false);

