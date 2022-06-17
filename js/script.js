const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const clouds = document.querySelector('.clouds');
const yoshi = document.querySelector('.yoshi');
const castle = document.querySelector('.castle');
const peach = document.querySelector('.peach');
const koopaLatiku = document.querySelector('.koopaLatiku');


const jump = () => {
    mario.classList.add('jump');
    
    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
}

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    const cloudsPosition = clouds.offsetLeft;
    const yoshiPosition = yoshi.offsetLeft;
    const castlePosition = castle.offsetLeft;
    const peachPosition = peach.offsetLeft;
    const koopaLatikuPosition = koopaLatiku.offsetLeft;

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        clouds.style.animation = 'none';
        clouds.style.left = `${cloudsPosition}px`;

        yoshi.style.animation = 'none';
        yoshi.style.left = `${yoshiPosition}px`;
        yoshi.src = "./images/yoshi.png";

        peach.style.animation = 'none';
        peach.style.left = `${peachPosition}px`;
        peach.src = './images/helpPeach.png';
        peach.style.width = '120px';
        peach.style.bottom = '-8px';

        castle.style.animation = 'none';
        castle.style.left = `${castlePosition}px`;

        koopaLatiku.style.animation = 'none';
        koopaLatiku.style.left = `${koopaLatikuPosition}px`;

        mario.src = './images/game-over.png';
        mario.style.width = '65px';
        mario.style.marginLeft = '50px';

        clearInterval(loop);
    }

}, 10)

document.addEventListener('keydown', jump);