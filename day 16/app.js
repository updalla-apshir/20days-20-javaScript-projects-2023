let row = document.querySelector(".row");
let btn = document.getElementById("spin");
let currentRotation = 0;

btn.onclick = function () {
    let randomRotation = Math.ceil(Math.random() * 1000);
    currentRotation += randomRotation;
    row.style.transition = "transform 3s ease-in-out"; // Add transition for smooth rotation
    row.style.transform = "rotate(" + currentRotation + "deg)";
};
