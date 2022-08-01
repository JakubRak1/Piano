"use strict";
const keys = [
  "A",
  "S",
  "D",
  "F",
  "G",
  "H",
  "J",
  "W",
  "E",
  "hidden",
  "T",
  "Y",
  "U",
];
const blackKeys = keys.slice(-6);
const whiteKeys = keys.slice(0, 7);
console.log(blackKeys, whiteKeys);

const whiteKey = document.querySelector(
  ".white-keys"
);
const blackKey = document.querySelector(
  ".black-keys"
);

const displayKeys = function (
  key,
  space
) {
  space.innerHTML = "";
  key.forEach(function (key) {
    const html = `
    <kbd
    class="white-key"
    id="${key}-key"
    >${key}</kbd>`;
    space.insertAdjacentHTML(
      "afterbegin",
      html
    );
  });
};

const displayKeysBlack = function (
  key,
  space
) {
  space.innerHTML = "";
  key.forEach(function (key) {
    if (key === "hidden") {
      const html = `<kbd
        class="black-key"
        id="${key}-key"
        >????????</kbd>`;
      space.insertAdjacentHTML(
        "afterbegin",
        html
      );
    } else {
      const html = `<kbd
      class="black-key"
      id="${key}-key"
      >${key}</kbd>`;
      space.insertAdjacentHTML(
        "afterbegin",
        html
      );
    }
  });
};

displayKeys(whiteKeys, whiteKey);
displayKeysBlack(blackKeys, blackKey);

const aClick =
  document.getElementById("A-key");
const sClick =
  document.getElementById("S-key");
const dClick =
  document.getElementById("D-key");
const fClick =
  document.getElementById("F-key");
const gClick =
  document.getElementById("G-key");
const hClick =
  document.getElementById("H-key");
const jClick =
  document.getElementById("J-key");
const wClick =
  document.getElementById("W-key");
const eClick =
  document.getElementById("E-key");
const tClick =
  document.getElementById("T-key");
const yClick =
  document.getElementById("Y-key");
const uClick =
  document.getElementById("U-key");

aClick.addEventListener(
  "click",
  function () {
    let audio = new Audio(
      "files/A.mp3"
    );
    audio.play();
  }
);
sClick.addEventListener(
  "click",
  function () {
    let audio = new Audio(
      "files/S.mp3"
    );
    audio.play();
  }
);
dClick.addEventListener(
  "click",
  function () {
    let audio = new Audio(
      "files/D.mp3"
    );
    audio.play();
  }
);
fClick.addEventListener(
  "click",
  function () {
    let audio = new Audio(
      "files/F.mp3"
    );
    audio.play();
  }
);
gClick.addEventListener(
  "click",
  function () {
    let audio = new Audio(
      "files/G.mp3"
    );
    audio.play();
  }
);
hClick.addEventListener(
  "click",
  function () {
    let audio = new Audio(
      "files/H.mp3"
    );
    audio.play();
  }
);
jClick.addEventListener(
  "click",
  function () {
    let audio = new Audio(
      "files/J.mp3"
    );
    audio.play();
  }
);
wClick.addEventListener(
  "click",
  function () {
    let audio = new Audio(
      "files/W.mp3"
    );
    audio.play();
  }
);
eClick.addEventListener(
  "click",
  function () {
    let audio = new Audio(
      "files/E.mp3"
    );
    audio.play();
  }
);
tClick.addEventListener(
  "click",
  function () {
    let audio = new Audio(
      "files/T.mp3"
    );
    audio.play();
  }
);
yClick.addEventListener(
  "click",
  function () {
    let audio = new Audio(
      "files/Y.mp3"
    );
    audio.play();
  }
);
uClick.addEventListener(
  "click",
  function () {
    let audio = new Audio(
      "files/U.mp3"
    );
    audio.play();
  }
);

document.addEventListener(
  "keydown",
  function (event) {
    let eventContent = String(
      event.code
    );
    let audio = new Audio(
      `files/${eventContent
        .slice(3, 4)
        .toUpperCase()}.mp3`
    );
    console.log(audio);
    audio.play();
  }
);
