// Initialize variables
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

// Function to show the current slide and hide others
function showSlide(index) {
  slides.forEach((slide, i) => {
    if (i === index) {
      slide.style.left = "0";
    } else if (i === currentSlide) {
      slide.style.left = "-100%";
    } else {
      slide.style.left = "100%";
    }
  });
}

// Function to show the next slide
function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

// Function to show the previous slide
function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

// Call showSlide function for the initial slide when the page loads
document.addEventListener("DOMContentLoaded", function() {
  showSlide(currentSlide);
});

// Image Carousel - Auto Scrolling
const imageWrapper = document.querySelector('.image-wrapper');
const imageItems = document.querySelectorAll('.image-wrapper > *');
const imageLength = imageItems.length;
const perView = 4;
let totalScroll = 0;
const delay = 2000;
let autoScroll;

// Initialize the carousel
function initCarousel() {
  imageWrapper.style.setProperty('--per-view', perView);
  for (let i = 0; i < perView; i++) {
    imageWrapper.insertAdjacentHTML('beforeend', imageItems[i].outerHTML);
  }
  autoScroll = setInterval(scrolling, delay);
}

// Function to handle auto scrolling of the carousel
function scrolling() {
  totalScroll++;
  if (totalScroll == imageLength + 1) {
    clearInterval(autoScroll);
    totalScroll = 1;
    imageWrapper.style.transition = '0s';
    imageWrapper.style.left = '0';
    autoScroll = setInterval(scrolling, delay);
  }
  const widthEl = document.querySelector('.image-wrapper > :first-child').offsetWidth + 24;
  imageWrapper.style.left = `-${totalScroll * widthEl}px`;
  imageWrapper.style.transition = '.3s';
}

// Call the initCarousel function to start the carousel
initCarousel();



// calcualte now js
document.getElementById('calculateBtn').addEventListener('click', function() {
    var value1 = parseInt(document.getElementById('value1').value);
    var value2 = parseInt(document.getElementById('value2').value);

    if (!isNaN(value1) && !isNaN(value2)) {
      var outcome = calculateOutcome(value1, value2);
      document.getElementById('outcome').innerHTML = outcome;
    } else {
      document.getElementById('outcome').innerHTML = '0000'; // Default value if not calculated
    }
  });

  function calculateOutcome(value1, value2) {
    var outcomes = [50, 100, 150, 200, 250, 300, 350, 400, 450, 500];
    if (value1 >= 10 && value1 <= 100 && value2 >= 20 && value2 <= 110) {
      var index = value1 / 10 - 1;
      return outcomes[index];
    } else {
      return 'Invalid input';
    }
  }

  // testimonial
  // Add JavaScript code for testimonials slider here
// Add JavaScript code for testimonials slider here
document.addEventListener('DOMContentLoaded', function () {
  const slider = document.getElementById('testimonials-slider');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');

  prevBtn.addEventListener('click', function () {
      slider.scrollLeft -= 300; // Adjust scroll distance as needed
  });

  nextBtn.addEventListener('click', function () {
      slider.scrollLeft += 300; // Adjust scroll distance as needed
  });
});

