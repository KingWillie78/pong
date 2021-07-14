const rectangle = document.querySelector('.paddle');
let xPosition = 0;
let xVelocity = 1;
function doThisEverySoOften() {
    if (xPosition > 400) {
        xVelocity = -1;
    } 
    xPosition = xPosition + xVelocity;
    console.log(xPosition);
    rectangle.style.top = `${xPosition}px`;
}
function goDown() {
    if (xPosition <= 0) {
        xVelocity = 1;
    } 
    xPosition = xPosition + xVelocity;
    console.log(xPosition);
    rectangle.style.top = `${xPosition}px`;
}

setInterval(doThisEverySoOften, 35);
setInterval(goDown, 35);

const rectangle2 = document.querySelector('.paddle2');
let xPosition2 = 0;
let xVelocity2 = 1;
function doThisEverySoOften2() {
    if (xPosition > 400) {
        xVelocity = -1;
    } 
    xPosition = xPosition + xVelocity;
    console.log(xPosition);
    rectangle2.style.top = `${xPosition}px`;
}
function goDown() {
    if (xPosition <= 0) {
        xVelocity = 1;
    } 
    xPosition = xPosition + xVelocity;
    console.log(xPosition);
    rectangle2.style.top = `${xPosition}px`;
}

setInterval(doThisEverySoOften, 15);
setInterval(goDown, 10);

const ball = document.querySelector('.ball');
let xPosition3 = 1;
let xVelocity3 = 1;
function doThisEverySoOften3() {
    if (xPosition3 > 660) {
        xVelocity3 = -1;
    } 
    xPosition3 = xPosition3 + xVelocity3;
    console.log(xPosition3);
    ball.style.left = `${xPosition3}px`;
}
function goDown3() {
    if (xPosition3 <= 10) {
        xVelocity3 = 1;
    } 
    xPosition3 = xPosition3 + xVelocity3;
    console.log(xPosition3);
    ball.style.left = `${xPosition3}px`;
}

setInterval(doThisEverySoOften3, 20);
setInterval(goDown3, 8);