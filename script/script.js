let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
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

function sendInformation() {
  if (informationSent) {
    window.open("https://www.google.com", "_blank");
  }
}

// To close the menu on mobile devices when they click on the link
function closeTheWindow() {
  const isOpen = document.querySelector('.first-header__list, .header__list').classList.contains('open');
  if (isOpen) {
    document.querySelector('#myCheckbox').checked = false;
  }
}