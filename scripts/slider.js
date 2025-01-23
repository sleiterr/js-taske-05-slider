const slide = document.querySelector(".image-in-slide");
const btnNext = document.querySelector(".next");
const btnPrevious = document.querySelector(".previous");

let currentImageIndex = 0;

let images = [
  "./assets/images/coffee1.jpg",
  "./assets/images/coffee2.jpg",
  "./assets/images/coffee3.jpg",
];

// Sørger for at vores img tag får en billedsti indsat i den src-attribute
function setActiveSlide() {
  slide.src = images[currentImageIndex];
}
setActiveSlide();

function next() {
  // Er vi ved det sidste billede i rækken?
  if (currentImageIndex >= images.length - 1) {
    currentImageIndex = 0;
  } else {
    currentImageIndex++;
  }
  setActiveSlide();
}

btnNext.addEventListener("click", next);

function previous() {
  //Er vi ved det første billede i rækken?
  if (currentImageIndex === 0) {
    currentImageIndex = images.length - 1;
  } else {
    currentImageIndex--;
  }
  setActiveSlide();
}

btnPrevious.addEventListener("click", previous);

setInterval(next, 2000);


