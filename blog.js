// Navbar Toggle Functionality
const toggleBtn = document.getElementById('toggleBtn');
const navLinks = document.getElementById('navLinks');

toggleBtn.addEventListener('click', () => {
    toggleBtn.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        toggleBtn.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

