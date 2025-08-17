const sidebar = document.getElementById("sidebar");
const menuBtn = document.getElementById("menuBtn");
const menuIcon = menuBtn.querySelector("i");
const themeToggle = document.getElementById("themeToggle");
const themeIcon = themeToggle.querySelector("i");

let isDarkMode = true;

// Toggle Sidebar
menuBtn.addEventListener("click", () => {
  sidebar.classList.toggle("open");

  if (sidebar.classList.contains("open")) {
    menuIcon.classList.remove("fa-bars");
    menuIcon.classList.add("fa-times");
  } else {
    menuIcon.classList.remove("fa-times");
    menuIcon.classList.add("fa-bars");
  }
});

// Toggle Theme
themeToggle.addEventListener("click", () => {
  isDarkMode = !isDarkMode;
  document.body.classList.toggle("light-mode", !isDarkMode);

  if (isDarkMode) {
    themeIcon.classList.remove("fa-sun");
    themeIcon.classList.add("fa-moon");
  } else {
    themeIcon.classList.remove("fa-moon");
    themeIcon.classList.add("fa-sun");
  }
});

// Anime data
const animeData = {
  "Demon Slayer": {
    imageUrl: "https://i.pinimg.com/originals/ad/e9/94/ade9945650e254d021fb6ea42334e770.gif",
    streamingLink: "demon.html"
  },
  "Attack on Titan": {
    imageUrl: "https://i.pinimg.com/originals/d8/6b/54/d86b54b83cea8c149c98de9a2ef87f0b.gif",
    streamingLink: "https://www.crunchyroll.com/series/GR751KNZY/attack-on-titan"
  },
  "Jujutsu Kaisen": {
    imageUrl: "https://i.pinimg.com/originals/ba/45/31/ba453136787732d5681b72b6fd0d361d.gif",
    streamingLink: "https://www.crunchyroll.com/series/GY5P48XEY/jujutsu-kaisen"
  },
  "Chainsaw Man": {
    imageUrl: "https://wallpapers-clan.com/wp-content/uploads/2024/08/chainsaw-man-denji-devil-gif-desktop-wallpaper-preview.gif",
    streamingLink: "https://www.crunchyroll.com/series/G4PH0WXVJ/chainsaw-man"
  },
  "One Piece": {
    imageUrl: "https://giffiles.alphacoders.com/945/94501.gif",
    streamingLink: "https://www.crunchyroll.com/series/GRMG8ZQZR/one-piece"
  },
  "Naruto Shippuden": {
    imageUrl: "https://giffiles.alphacoders.com/979/9790.gif",
    streamingLink: "https://www.crunchyroll.com/series/GYQ4MW246/naruto-shippuden"
  },
  "Death Note": {
    imageUrl: "https://media.tenor.com/TP58Jc-uI-AAAAAM/sqds.gif",
    streamingLink: "https://www.netflix.com/title/70204970"
  },
  "My Hero Academia": {
    imageUrl: "https://i.pinimg.com/originals/8b/a2/c4/8ba2c4aa8d5bac8528679f0bcfc6c3d1.gif",
    streamingLink: "https://www.crunchyroll.com/series/G6NQ5DWZ6/my-hero-academia"
  }
};

// Open modal (only keep enhanced version)
function openModal(title, genre, description, rating) {
  const modal = document.getElementById('animeModal');
  const anime = animeData[title];
  
  if (!anime) {
    console.error("Anime data not found:", title);
    return;
  }

  document.getElementById('modalTitle').textContent = title;
  document.getElementById('modalGenre').textContent = genre;
  document.getElementById('modalDescription').textContent = description;
  document.getElementById('modalRating').textContent = rating;
  document.getElementById('modalPoster').style.backgroundImage = `url(${anime.imageUrl})`;
  
  const watchButton = document.querySelector('.watch-button');
  watchButton.onclick = () => {
    window.open(anime.streamingLink, '_blank');
  };

  modal.style.display = 'flex';
  setTimeout(() => {
    modal.classList.add('show');
  }, 10);
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const modal = document.getElementById('animeModal');
  modal.classList.remove('show');
  setTimeout(() => {
    modal.style.display = 'none';
  }, 500);
  document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
document.getElementById('animeModal').addEventListener('click', function(e) {
  if (e.target === this) closeModal();
});

// Close modal with Escape key
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') closeModal();
}); 

// Search Anime
function searchAnime() {
  const input = document.getElementById('input').value.toLowerCase();
  const cards = document.getElementsByClassName('anime-card');

  for (let i = 0; i < cards.length; i++) {
    const title = cards[i].querySelector('h3').innerText.toLowerCase();
    cards[i].style.display = title.includes(input) ? 'block' : 'none';
  }
}

// Typed.js Animation
document.addEventListener('DOMContentLoaded', function () {
    var typed = new Typed('#typed-text', {
      strings: ['Unlimited Anime Streaming', 'Stream Anytime, Anywhere', 'Thousands of Episodes'],
      typeSpeed: 50,
      backSpeed: 25,
      loop: true
  });
});
createStars();
initScrollAnimations();
initEnhancedSlider();

// Falling Stars
function createStars() {
  const starsContainer = document.createElement('div');
  starsContainer.className = 'stars';
  document.body.appendChild(starsContainer);
  
  for (let i = 0; i < 200; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    const size = Math.random() * 2 + 1;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.left = `${Math.random() * 100}vw`;
    star.style.top = `${Math.random() * 100}vh`;
    const duration = Math.random() * 10 + 5;
    const delay = Math.random() * 10;
    star.style.animationDuration = `${duration}s`;
    star.style.animationDelay = `${delay}s`;
    starsContainer.appendChild(star);
  }
}

// Scroll Animations
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.setAttribute('data-scroll', 'in');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  
  document.querySelectorAll('[data-scroll]').forEach(el => observer.observe(el));
}

// Slider
let currentSlide = 0;
function initEnhancedSlider() {
  showSlide(currentSlide);
  setInterval(() => nextSlide(), 4000);
}

function showSlide(index) {
  const slides = document.querySelectorAll('.slide');
  const slideWidth = slides[0].clientWidth;
  const slideContainer = document.querySelector('.slides');
  
  if (index >= slides.length) currentSlide = 0;
  else if (index < 0) currentSlide = slides.length - 1;
  else currentSlide = index;

  slides.forEach(slide => slide.classList.remove('active'));
  slides[currentSlide].classList.add('active');
  slideContainer.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
}

function nextSlide() { showSlide(currentSlide + 1); }
function prevSlide() { showSlide(currentSlide - 1); }
// Fix in initScrollAnimations
document.querySelectorAll('[data-scroll]').forEach((el, index) => {
  const delay = el.getAttribute('data-scroll-delay');
  const duration = el.getAttribute('data-scroll-duration');
  const ease = el.getAttribute('data-scroll-ease');

  if (delay) el.style.transitionDelay = delay + "ms";
  if (duration) el.style.transitionDuration = duration + "ms";
  if (ease) el.style.transitionTimingFunction = ease;
  
  observer.observe(el);
});
