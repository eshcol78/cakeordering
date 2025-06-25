let navbar = document.querySelector(".navbar");
let slides = document.querySelectorAll(".home .slide-container .slide");
let currentSlide = 0;

// Toggle mobile menu
document.querySelector("#menu-btn").onclick = () => {
  navbar.classList.toggle("active");
};

// Close menu when scrolling
window.onscroll = () => {
  navbar.classList.remove("active");
};

// Slide show functions
function showSlide(n) {
  slides[currentSlide].classList.remove("active");
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].classList.add("active");
}

function next() {
  showSlide(currentSlide + 1);
}

function prev() {
  showSlide(currentSlide - 1);
}

// Auto slide change every 5 seconds
setInterval(() => {
  next();
}, 5000);

// Initialize first slide
showSlide(0);
