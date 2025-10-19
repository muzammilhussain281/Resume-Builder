// Navbar Toggle Functionality
const toggleBtn = document.getElementById('toggleBtn');
const navLinks = document.getElementById('navLinks');

toggleBtn.addEventListener('click', () => {
  toggleBtn.classList.toggle('active');  // This changes hamburger → cross
  navLinks.classList.toggle('active');   // This slides the menu in/out
});


// Close menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        toggleBtn.classList.remove('active');
        navLinks.classList.remove('active');
    });
});