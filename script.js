// alert("Click/Tap the box.");

let glass = document.querySelector(".glass");
let lid = document.querySelector(".lid");
let gift = document.querySelector(".gift");
let p = document.querySelector("#demo");

function fadeAway(callback) {
    glass.style.display = "none";
    callback();
}

function toLeft(callback) {
    lid.style.left = "10%";
    gift.style.left = "10%";
    p.style.left = "15%";
    setTimeout(() => {
        callback();
    }, 300)
}

function open() {
    lid.style.transform = "rotate(-45deg)";
    gift.style.transform = "rotate(45deg)";
    p.style.transform = "scale(15)";
    p.style.left = "25%";
}

function fadeAway() {
    toLeft(() => {
        open(() => {})
    })
}

