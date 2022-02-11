'use strict';
const aClick = document.getElementById('A-key');
const sClick = document.getElementById('S-key');
const dClick = document.getElementById('D-key');
const fClick = document.getElementById('F-key');
const gClick = document.getElementById('G-key');
const hClick = document.getElementById('H-key');
const jClick = document.getElementById('J-key');
const wClick = document.getElementById('W-key');
const eClick = document.getElementById('E-key');
const tClick = document.getElementById('T-key');
const yClick = document.getElementById('Y-key');
const uClick = document.getElementById('U-key');

aClick.addEventListener('click', function (){
    let audio = new Audio('files/A.mp3');
    audio.play();
});
sClick.addEventListener('click', function (){
    let audio = new Audio('files/S.mp3');
    audio.play();
});
dClick.addEventListener('click', function (){
    let audio = new Audio('files/D.mp3');
    audio.play();
});
fClick.addEventListener('click', function (){
    let audio = new Audio('files/F.mp3');
    audio.play();
});
gClick.addEventListener('click', function (){
    let audio = new Audio('files/G.mp3');
    audio.play();
});
hClick.addEventListener('click', function (){
    let audio = new Audio('files/H.mp3');
    audio.play();
});
jClick.addEventListener('click', function (){
    let audio = new Audio('files/J.mp3');
    audio.play();
});
wClick.addEventListener('click', function (){
    let audio = new Audio('files/W.mp3');
    audio.play();
});
eClick.addEventListener('click', function (){
    let audio = new Audio('files/E.mp3');
    audio.play();
});
tClick.addEventListener('click', function (){
    let audio = new Audio('files/T.mp3');
    audio.play();
});
yClick.addEventListener('click', function (){
    let audio = new Audio('files/Y.mp3');
    audio.play();
});
uClick.addEventListener('click', function (){
    let audio = new Audio('files/U.mp3');
    audio.play();
});

document.addEventListener("keydown", function(event){
    if (event.code == 'KeyA'){
        let audio = new Audio('files/A.mp3');
        audio.play();
    }else if (event.code == 'KeyS'){
        let audio = new Audio('files/S.mp3');
        audio.play();
    }else if (event.code == 'KeyD'){
        let audio = new Audio('files/D.mp3');
        audio.play();
    }else if (event.code == 'KeyF'){
        let audio = new Audio('files/F.mp3');
        audio.play();
    }else if (event.code == 'KeyG'){
        let audio = new Audio('files/G.mp3');
        audio.play();
    }else if (event.code == 'KeyH'){
        let audio = new Audio('files/H.mp3');
        audio.play();
    }else if (event.code == 'KeyJ'){
        let audio = new Audio('files/J.mp3');
        audio.play();
    }else if (event.code == 'KeyW'){
        let audio = new Audio('files/W.mp3');
        audio.play();
    }else if (event.code == 'KeyE') {
        let audio = new Audio('files/E.mp3');
        audio.play();
    }else if (event.code == 'KeyT') {
        let audio = new Audio('files/T.mp3');
        audio.play();
    }else if (event.code == 'KeyY') {
        let audio = new Audio('files/Y.mp3');
        audio.play();
    }else if (event.code == 'KeyU') {
        let audio = new Audio('files/U.mp3');
        audio.play();
    }else console.log('Warring, wrong key');
});

