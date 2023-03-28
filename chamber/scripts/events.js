var slideIndexs = 1;
var myTime;
var slideshowContainer;

window.addEventListener("load",function() {
    showSlides(slideIndexs);
    myTime = setInterval(function(){plusSlides(1)}, 4000);

   slideshowContainer = document.getElementsByClassName('slideshow-innerE')[0];

    slideshowContainer.addEventListener('mouseenter', pause)
    slideshowContainer.addEventListener('mouseleave', resume)
})

// Next and previous control
function plusSlides(n){
clearInterval(myTime);
if (n < 0){
    showSlides(slideIndexs -= 1);
} else {
showSlides(slideIndexs += 1); 
}

// Arrows part of mouseenter pause/resume

if (n === -1){
    myTime = setInterval(function(){plusSlides(n + 2)}, 4000);
} else {
    myTime = setInterval(function(){plusSlides(n + 1)}, 4000);
}
}

// Controls the current slide and resets interval if needed
function currentSlide(n){
clearInterval(myTime);
myTime = setInterval(function(){plusSlides(n + 1)}, 4000);
showSlides(slideIndexs = n);
}

function showSlides(n){
var i;
var slides = document.getElementsByClassName("mySlidesE");
console.log(slides);
var dots = document.getElementsByClassName("dotE");
if (n > slides.length) {slideIndexs = 1}
if (n < 1) {slideIndexs = slides.length}
for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
}
for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
}
slides[slideIndexs-1].style.display = "block";
dots[slideIndexs-1].className += " active";
}

pause = () => {
clearInterval(myTime);
}

resume = () =>{
clearInterval(myTime);
myTime = setInterval(function(){plusSlides(slideIndexs)}, 4000);
}



