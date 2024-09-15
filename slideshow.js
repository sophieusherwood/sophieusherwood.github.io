let slideIndex = 1;
let slideInterval;

document.addEventListener('DOMContentLoaded', function() {
    showSlides(slideIndex);
    startSlideShow();
});

function plusSlides(n) {
  showSlides(slideIndex += n);
  resetSlideShow();
}

function currentSlide(n) {
  showSlides(slideIndex = n);
  resetSlideShow();
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

function startSlideShow() {
  slideInterval = setInterval(function() {
    plusSlides(1);
  }, 3000); // Change slide every 3 seconds
}

function resetSlideShow() {
  clearInterval(slideInterval);
  startSlideShow();
}
