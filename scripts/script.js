const box = document.querySelector(".box");

const slider1 = document.getElementById("myRange1");
const slider2 = document.getElementById("myRange2");
const slider3 = document.getElementById("myRange3");
const slider4 = document.getElementById("myRange4");

const widthSlider = document.getElementById("myWidthRange");
const heightSlider = document.getElementById("myHeightRange");

const slider1TextPreview = document.getElementById("slider1TextPreview");
const slider2TextPreview = document.getElementById("slider2TextPreview");
const slider3TextPreview = document.getElementById("slider3TextPreview");
const slider4TextPreview = document.getElementById("slider4TextPreview");

const widthSliderTextPreview = document.getElementById("widthSliderTextPreview");

const heightSliderTextPreview = document.getElementById("heightSliderTextPreview");

let topLeft;
let topRight;
let bottomRight;
let bottomLeft;

let width;
let height;

slider1.addEventListener("input", function () {
    topLeft = slider1.value;
    slider1TextPreview.textContent = `${topLeft} px`;
    box.style.borderTopLeftRadius = topLeft + "px";
});

slider2.addEventListener("input", function () {
    topRight = slider2.value;
    slider2TextPreview.textContent = `${topRight} px`;
    box.style.borderTopRightRadius = topRight + "px";
});

slider3.addEventListener("input", function () {
    bottomRight = slider3.value;
    slider3TextPreview.textContent = `${bottomRight} px`;
    box.style.borderBottomRightRadius = bottomRight + "px";
});

slider4.addEventListener("input", function () {
    bottomLeft = slider4.value;
    slider4TextPreview.textContent = `${bottomLeft} px`;
    box.style.borderBottomLeftRadius = bottomLeft + "px";
});

widthSlider.addEventListener("input", function () {
    width = widthSlider.value / 10;
    widthSliderTextPreview.textContent = `${width} rem`;
    box.style.width = width + "rem";
});

heightSlider.addEventListener("input", function () {
    height = heightSlider.value / 10;
    heightSliderTextPreview.textContent = `${height} rem`;
    box.style.height = height + "rem";
});