const box = document.querySelector(".box");

const slider1 = document.getElementById("myRange1");
const slider2 = document.getElementById("myRange2");
const slider3 = document.getElementById("myRange3");
const slider4 = document.getElementById("myRange4");

const widthSlider = document.getElementById("myWidthRange");
const heightSlider = document.getElementById("myHeightRange");

// const slider1TextPreview = document.getElementById("slider1TextPreview");
// const slider2TextPreview = document.getElementById("slider2TextPreview");
// const slider3TextPreview = document.getElementById("slider3TextPreview");
// const slider4TextPreview = document.getElementById("slider4TextPreview");

const slider1Input = document.getElementById("slider1-input");
const slider2Input = document.getElementById("slider2-input");
const slider3Input = document.getElementById("slider3-input");
const slider4Input = document.getElementById("slider4-input");

const copyToClipboardBtn = document.getElementById("copy-to-clipboard-btn");

const widthSliderInput = document.getElementById("widthSlider-input");
const heightSliderInput = document.getElementById("heightSlider-input");

const widthSliderTextPreview = document.getElementById("widthSliderTextPreview");

const heightSliderTextPreview = document.getElementById("heightSliderTextPreview");

let topLeft = 0;
let topRight = 0;
let bottomRight = 0;
let bottomLeft = 0;

let width = 15;
let height = 7;

slider1.addEventListener("input", function () {
    topLeft = slider1.value;
    slider1Input.value = topLeft;
    box.style.borderTopLeftRadius = topLeft + "px";
    cssCodePreviewChanger();
});

slider2.addEventListener("input", function () {
    topRight = slider2.value;
    slider2Input.value = topRight;
    box.style.borderTopRightRadius = topRight + "px";
    cssCodePreviewChanger();
});

slider3.addEventListener("input", function () {
    bottomRight = slider3.value;
    slider3Input.value = bottomRight;
    box.style.borderBottomRightRadius = bottomRight + "px";
    cssCodePreviewChanger();
});

slider4.addEventListener("input", function () {
    bottomLeft = slider4.value;
    slider4Input.value = bottomLeft;
    box.style.borderBottomLeftRadius = bottomLeft + "px";
    cssCodePreviewChanger();
});

widthSlider.addEventListener("input", function () {
    width = widthSlider.value / 10;
    widthSliderInput.value = width;
    box.style.width = width + "rem";
    cssCodePreviewChanger();
});

heightSlider.addEventListener("input", function () {
    height = heightSlider.value / 10;
    heightSliderInput.value = height;
    box.style.height = height + "rem";
    cssCodePreviewChanger();
});

function slider1Change() {
    slider1.value = slider1Input.value
    topLeft = slider1Input.value
    box.style.borderTopLeftRadius = topLeft + "px";
    cssCodePreviewChanger();
}

function slider2Change() {
    slider2.value = slider2Input.value
    topRight = slider2Input.value
    box.style.borderTopRightRadius = topRight + "px";
    cssCodePreviewChanger();
}

function slider3Change() {
    slider3.value = slider3Input.value
    bottomRight = slider3Input.value
    box.style.borderBottomRightRadius = bottomRight + "px";
    cssCodePreviewChanger();
}

function slider4Change() {
    slider4.value = slider4Input.value
    bottomLeft = slider4Input.value
    box.style.borderBottomLeftRadius = bottomLeft + "px";
    cssCodePreviewChanger();
}

function widthSliderChange() {
    widthSlider.value = widthSliderInput.value * 10;
    width = widthSliderInput.value;
    box.style.width = width + "rem";
    cssCodePreviewChanger();
}

function heightSliderChange() {
    heightSlider.value = heightSliderInput.value * 10;
    height = heightSliderInput.value * 10;
    box.style.height = height + "rem";
    cssCodePreviewChanger();
}

const cssCodePreview = document.getElementById("css-code-preview");

function cssCodePreviewChanger() {
    cssCodePreview.textContent =
        `.box {
        width: ${width}rem;    
        height: ${height}rem;  
        border-radius: ${topLeft}px ${topRight}px ${bottomRight}px ${bottomLeft}px;
        /* background-color: aliceblue; */
}`;
}

copyToClipboardBtn.addEventListener("click", function () {
    navigator.clipboard.writeText(cssCodePreview.textContent).then(() => {
        console.log('Content copied to clipboard');
        /* Resolved - text copied to clipboard successfully */
    }, () => {
        console.error('Failed to copy');
        /* Rejected - text failed to copy to the clipboard */
    });
})

// When the user clicks on <div>, open the popup
function myFunction() {
    let popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}