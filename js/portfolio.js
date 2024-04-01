let opacity = 0;
let intervalID = 0;
window.onload = fadeIn;
  
function fadeIn() {
    setInterval(cardFadeIn1, 200);
    setInterval(cardFadeIn2, 200);
    setInterval(cardFadeIn3, 200);
}
  
function cardFadeIn1() {
    let cardFadeIn = document.getElementById("card1");
    opacity = Number(window.getComputedStyle(cardFadeIn)
                    .getPropertyValue("opacity"));
    if (opacity < 1) {
        opacity = opacity + 0.5;
        cardFadeIn.style.opacity = opacity;
    } else {
        clearInterval(intervalID);
    }
}

function cardFadeIn2() {
    let cardFadeIn = document.getElementById("card2");
    opacity = Number(window.getComputedStyle(cardFadeIn)
                    .getPropertyValue("opacity"));
    if (opacity < 1) {
        opacity = opacity + 0.3;
        cardFadeIn.style.opacity = opacity;
    } else {
        clearInterval(intervalID);
    }
}

function cardFadeIn3() {
    let cardFadeIn = document.getElementById("card3");
    opacity = Number(window.getComputedStyle(cardFadeIn)
                    .getPropertyValue("opacity"));
    if (opacity < 1) {
        opacity = opacity + 0.1;
        cardFadeIn.style.opacity = opacity;
    } else {
        clearInterval(intervalID);
    }
}