// JavaScript to handle filter functionality
document.getElementById('btn-all').addEventListener('click', function() {
    filterMedia('all');
    setActiveButton(this);
  });
  document.getElementById('btn-photos').addEventListener('click', function() {
    filterMedia('photo');
    setActiveButton(this);
  });
  document.getElementById('btn-videos').addEventListener('click', function() {
    filterMedia('video');
    setActiveButton(this);
  });
  
  function filterMedia(type) {
    const allItems = document.querySelectorAll('.media-item');
    allItems.forEach(item => {
      if (type === 'all') {
        item.style.display = 'block';
      } else if (item.classList.contains(type)) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  }
  
  function setActiveButton(button) {
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
  }

// Get the media items and navigation buttons
const mediaItems = document.getElementById('media-items');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

// Set the initial scroll position
let scrollPosition = 0;

// Add event listeners for navigation buttons
prevBtn.addEventListener('click', () => {
    scrollPosition -= 300; // scroll 300px to the left
    mediaItems.scrollTo({ left: Math.max(scrollPosition, 0), behavior: 'smooth' });
});

nextBtn.addEventListener('click', () => {
    scrollPosition += 300; // scroll 300px to the right
    mediaItems.scrollTo({ left: scrollPosition, behavior: 'smooth' });
});

// Limit the scroll position to the media items boundaries
mediaItems.addEventListener('scroll', () => {
    scrollPosition = mediaItems.scrollLeft;
    prevBtn.disabled = scrollPosition <= 0;
    nextBtn.disabled = scrollPosition >= mediaItems.scrollWidth - mediaItems.clientWidth;
});


// Array of background and t-shirt images for the carousel
const slides = [
  {
      background: "./images/pink tee bck.png",
      tshirt: "./images/pink tshirt.png",
      text: "Coming Soon..."
  },
  {
      background: "./images/black hoodie bck.png",
      tshirt: "./images/black hoodie.png",
      text: "Exclusive Launch!"
  },
  {
      background: "./images/yellow tee bck.png",
      tshirt: "./images/yellow tshirt.png",
      text: "New Collection!"
  },
  {
    background: "./images/blue cap bck.png",
    tshirt: "./images/cap mockup.png",
    text: "Just Go For It!"
}
];

let currentSlide = 0;

// Function to update the slide content
function updateSlide() {
  const backgroundImage = document.querySelector('.background');
  const tshirtImage = document.querySelector('.tshirt');
  const overlayText = document.querySelector('.overlay-text h2');

  backgroundImage.src = slides[currentSlide].background;
  tshirtImage.src = slides[currentSlide].tshirt;
  overlayText.textContent = slides[currentSlide].text;
}

// Function to go to the previous slide
function prevSlide() {
  currentSlide--;
  if (currentSlide < 0) {
      currentSlide = slides.length - 1; // Loop back to the last slide
  }
  updateSlide();
}

// Function to go to the next slide
function nextSlide() {
  currentSlide++;
  if (currentSlide >= slides.length) {
      currentSlide = 0; // Loop back to the first slide
  }
  updateSlide();
}
