// Theme Toggle 
const commenet = document.getElementsByClassName('commentbar')
const themeToggle = document.getElementById('themeToggle');
const themeIcon = themeToggle.querySelector('i');
let isDarkMode = true;

themeToggle.addEventListener('click', () => {
    isDarkMode = !isDarkMode;
    if (isDarkMode) { 
        
        document.body.classList.remove('light-mode');
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    } else {
        document.body.classList.add('light-mode');
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun'); 
        
    }
});

// Search Functionality


// Modal Functions
// Anime data with streaming links
// Anime data with image URLs and streaming links
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

// Simplified openModal (no need to pass imageUrl manually)
function openModal(title, genre, description, rating) {
    const modal = document.getElementById('animeModal');
    const anime = animeData[title]; // Get anime data
    
    if (!anime) {
        console.error("Anime data not found:", title);
        return;
    }

    // Update modal content
    document.getElementById('modalTitle').textContent = title;
    document.getElementById('modalGenre').textContent = genre;
    document.getElementById('modalDescription').textContent = description;
    document.getElementById('modalRating').textContent = rating;
    document.getElementById('modalPoster').style.backgroundImage = `url(${anime.imageUrl})`;
    
    // Set up Watch Now button
    const watchButton = document.querySelector('.watch-button');
    watchButton.onclick = () => {
        window.open(anime.streamingLink, '_blank');
    };

    // Show modal
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

// Rest of the code remains the same...
function closeModal() {
    const modal = document.getElementById('animeModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
document.getElementById('animeModal').addEventListener('click', function(e) {
    if (e.target === this) {
        closeModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeModal();
    }
});
// Form Submission


// Animate elements when scrolling
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.anime-card, .plan-card');
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (elementPosition < screenPosition) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
};

window.addEventListener('scroll', animateOnScroll);
// Trigger once on load
animateOnScroll(); 
function searchAnime() {
    const input = document.getElementById('input').value.toLowerCase();
    const cards = document.getElementsByClassName('anime-card');

    for (let i = 0; i < cards.length; i++) {
        const title = cards[i].querySelector('h3').innerText.toLowerCase();
        if (title.includes(input)) {
            cards[i].style.display = 'block';
        } else {
            cards[i].style.display = 'none';
        }
    }
} 
document.addEventListener('DOMContentLoaded', function () {
    var typed = new Typed('#typed-text', {
      strings: ['Unlimited Anime Streaming', 'Stream Anytime, Anywhere', 'Thousands of Episodes'],
      typeSpeed: 50,
      backSpeed: 25,
      loop: true
    });
  });
  let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
  const slideWidth = slides[0].clientWidth;
  const slideContainer = document.querySelector('.slides');
  if (index >= slides.length) currentSlide = 0;
  else if (index < 0) currentSlide = slides.length - 1;
  else currentSlide = index;

  slideContainer.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

function prevSlide() {
  showSlide(currentSlide - 1);
}

setInterval(() => {
  nextSlide();
}, 4000); // auto-slide every 4 seconds

document.getElementById('submitComment').addEventListener('click', () => {
    const text = document.getElementById('commentText').value.trim();
    if (text) {
        addComment(text);
        document.getElementById('commentText').value = '';
    }
});

function addComment(content) {
    const commentsList = document.getElementById('commentsList');
    const noComments = commentsList.querySelector('.no-comments');
    if (noComments) noComments.remove();

    const commentDiv = document.createElement('div');
    commentDiv.className = 'comment';

    const textElement = document.createElement('div');
    textElement.className = 'comment-text';
    textElement.textContent = content;

    const dateElement = document.createElement('div');
    dateElement.className = 'comment-date';
    dateElement.textContent = new Date().toLocaleString();

    const actionsElement = document.createElement('div');
    actionsElement.className = 'comment-actions';

    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';

    actionsElement.appendChild(editBtn);
    actionsElement.appendChild(deleteBtn);

    commentDiv.appendChild(textElement);
    commentDiv.appendChild(dateElement);
    commentDiv.appendChild(actionsElement);

    commentsList.appendChild(commentDiv);

    let currentText = content;

    // --- Edit Comment ---
    editBtn.addEventListener('click', () => {
        const textarea = document.createElement('textarea');
        textarea.className = 'edit-textarea';
        textarea.value = currentText;
        textarea.style.width = '100%';
        textarea.style.marginTop = '10px';

        const saveBtn = document.createElement('button');
        saveBtn.textContent = 'Save';
        saveBtn.className = 'submit-btn';
        saveBtn.style.marginRight = '10px';

        const cancelBtn = document.createElement('button');
        cancelBtn.textContent = 'Cancel';
        cancelBtn.className = 'submit-btn';

        const editor = document.createElement('div');
        editor.appendChild(textarea);
        editor.appendChild(saveBtn);
        editor.appendChild(cancelBtn);

        commentDiv.insertBefore(editor, textElement);
        textElement.style.display = 'none';
        actionsElement.style.display = 'none';

        textarea.focus();

        saveBtn.addEventListener('click', () => {
            const newText = textarea.value.trim();
            if (newText) {
                textElement.textContent = newText;
                dateElement.textContent = "Edited just now";
                currentText = newText;
            }
            editor.remove();
            textElement.style.display = '';
            actionsElement.style.display = '';
        });

        cancelBtn.addEventListener('click', () => {
            editor.remove();
            textElement.style.display = '';
            actionsElement.style.display = '';
        });
    });

    // --- Delete Comment ---
    deleteBtn.addEventListener('click', () => {
        deleteComment(commentDiv);
    });
}

function deleteComment(commentDiv) {
    if (confirm('Are you sure you want to delete this comment?')) {
        commentDiv.style.transform = 'scale(0.9)';
        commentDiv.style.opacity = '0';
        commentDiv.style.transition = 'all 0.3s ease';

        setTimeout(() => {
            commentDiv.remove();
            const commentsList = document.getElementById('commentsList');
            if (!commentsList.querySelector('.comment')) {
                const noComments = document.createElement('div');
                noComments.className = 'no-comments';
                noComments.textContent = 'No comments yet. Be the first to share your thoughts!';
                commentsList.appendChild(noComments);
            }
        }, 300);
    }
}
