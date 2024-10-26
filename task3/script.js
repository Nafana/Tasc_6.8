const trafficLightEl1 = document.querySelector('#trafficLight1');

function makeGreen() {
    trafficLightEl1.style.background = ('green');
    trafficLightEl2.style.background = ('');
    trafficLightEl3.style.background = ('');
}

trafficLightEl1.addEventListener('click', makeGreen);

const trafficLightEl2 = document.querySelector('#trafficLight2');

function makeYellow() {
    trafficLightEl2.style.background = ('yellow');
    trafficLightEl3.style.background = ('');
    trafficLightEl1.style.background = ('');
}

trafficLightEl2.addEventListener('click', makeYellow);

const trafficLightEl3 = document.querySelector('#trafficLight3');

function makeRed() {
    trafficLightEl3.style.background = ('red');
    trafficLightEl1.style.background = ('');
    trafficLightEl2.style.background = ('');
}

trafficLightEl3.addEventListener('click', makeRed);

