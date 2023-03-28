

var slideIndex = 1;
var myTimer;
var slideshowContainer;

window.addEventListener("load",function() {
    showSlides(slideIndex);
    myTimer = setInterval(function(){plusSlides(1)}, 4000);

   slideshowContainer = document.getElementsByClassName('slideshow-inner')[0];
   slideshowContainer = document.getElementsByClassName('slideshow-innerE')[0];

    slideshowContainer.addEventListener('mouseenter', pause)
    slideshowContainer.addEventListener('mouseleave', resume)
})

// Next and previous control
function plusSlides(n){
clearInterval(myTimer);
if (n < 0){
    showSlides(slideIndex -= 1);
} else {
showSlides(slideIndex += 1); 
}

// Arrows part of mouseenter pause/resume

if (n === -1){
    myTimer = setInterval(function(){plusSlides(n + 2)}, 4000);
} else {
    myTimer = setInterval(function(){plusSlides(n + 1)}, 4000);
}
}

// Controls the current slide and resets interval if needed
function currentSlide(n){
clearInterval(myTimer);
myTimer = setInterval(function(){plusSlides(n + 1)}, 4000);
showSlides(slideIndex = n);
}

function showSlides(n){
var i;
var slides = document.getElementsByClassName("mySlides");
var slidesE = document.getElementsByClassName("mySlidesE");

var dots = document.getElementsByClassName("dot");
var dotsE = document.getElementsByClassName("dotE");

if (n > slides.length) {slideIndex = 1}
if (n < 1) {slideIndex = slides.length}
for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    slidesE[i].style.display = "none";

}
for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
    dotsE[i].className = dotsE[i].className.replace(" active", "");
}
slides[slideIndex-1].style.display = "block";
dots[slideIndex-1].className += " active";
slidesE[slideIndex-1].style.display = "block";
dotsE[slideIndex-1].className += " active";
}

pause = () => {
clearInterval(myTimer);
}

resume = () =>{
clearInterval(myTimer);
myTimer = setInterval(function(){plusSlides(slideIndex)}, 4000);
}



