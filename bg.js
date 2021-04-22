const body = document.querySelector('body');

const IMG_NUMBER = 5

function genRandom() {
    const random = Math.floor(Math.random() * IMG_NUMBER) + 1;

    return random;
}


function paintImage(imgNumber) {
    const image = new Image();
    image.src = `./images/${imgNumber}.jpg`;
    image.classList.add('bgImage');

    body.appendChild(image);

}


function init() {
    const randomNumber = genRandom();
    paintImage(randomNumber);
}

init();