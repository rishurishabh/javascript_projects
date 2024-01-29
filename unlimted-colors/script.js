const duration = 1000;//milisecond
const body = document.querySelector('body');
const startBtn = document.querySelector('#start');
const stopBtn = document.querySelector('#stop');
const activeColor = document.querySelector('#active-color');

let interval;

/**
 * Generate Random Hex Color Code
 */
function createRandomHexColor() {
    const hex = "0123456789ABCDEF";
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
}

startBtn.addEventListener('click', function () {
    if(!interval) {
        interval =  setInterval(function() {
            const colorHexCode = createRandomHexColor();
            body.style.backgroundColor = colorHexCode;
            activeColor.innerHTML = `Active Hex Color : ${colorHexCode}`;
        }, duration);
        
        startBtn.disabled = true;
        startBtn.style.cursor = 'not-allowed';
    }
})

stopBtn.addEventListener('click', function() {
    if(interval) {
        clearInterval(interval);
        startBtn.disabled = false;
        startBtn.style.cursor = 'pointer';
        interval = null;
    }
})