// 🌙 Dark Mode Toggle
const toggleDarkMode = () => {
  document.body.classList.toggle('dark-mode');
};

// Add toggle button dynamically (optional)
const toggleButton = document.createElement('button');
toggleButton.textContent = '🌓 Toggle Dark Mode';
toggleButton.style.position = 'fixed';
toggleButton.style.bottom = '20px';
toggleButton.style.right = '20px';
toggleButton.style.padding = '10px';
toggleButton.style.border = 'none';
toggleButton.style.borderRadius = '8px';
toggleButton.style.backgroundColor = '#0f172a';
toggleButton.style.color = 'white';
toggleButton.style.cursor = 'pointer';

toggleButton.addEventListener('click', toggleDarkMode);
document.body.appendChild(toggleButton);

// 🔗 Smooth Scroll for Nav Links
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// ✉️ Placeholder for contact form (if used)
const contactForm = document.querySelector('#contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', e => {
    e.preventDefault();
    alert('Message submitted! (Hook this to AWS Lambda for real functionality)');
  });
}
