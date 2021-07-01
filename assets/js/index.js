let block = document.getElementById('block');

// position y manipulation 
 let positionY = document.getElementById('pos-y');
 positionY.onchange = function() {
     block.style.top = positionY.value + "px";
 }

 // position x manipulation 
 let positionX = document.getElementById('pos-x');
positionX.onchange = function() {
    block.style.left = positionX.value + "px";
}

// size manipulation 
let size = document.getElementById('range-size');
size.onchange = function() {
    block.style.transform = 'scale('+size.value+')';
}


// shape manipulation

let shape = document.getElementById('size-types');
let okButton = document.getElementById('change-shape-button');
okButton.onclick = function() {
    let option = shape.value;
    if(option === 'circle') {
        block.style.borderRadius = '50%';
    } else if(option === 'square') {
        block.style.borderRadius = '0%';
        block.style.transform = 'rotate(0deg)';

    } else if(option === 'rhombus') {
        block.style.transform = 'rotate(45deg)';
        block.style.borderRadius = '0%';
    }
}


// opacity manipulation
let opacity = document.getElementById('opacity');
opacity.onchange = function() {
    block.style.opacity = opacity.value;
}

// hex color manipulation
let hex = document.getElementById('hex');
hex.onkeypress = function(e) {
    if(e.which === 13) {
    block.style.backgroundColor = '#'+hex.value;
}
}

// rgba manipulation
let r = document.getElementById('rgba-r');
let g = document.getElementById('rgba-g');
let b = document.getElementById('rgba-b');
let a = document.getElementById('rgba-a');

let rgbaInputs = document.querySelectorAll('.rgba-inputs');

for(let i=0; i<rgbaInputs.length; i++){
    rgbaInputs[i].onchange = function(){
        block.style.backgroundColor = 'rgba('+r.value+','+g.value+','+b.value+','+a.value+')';
    }
}