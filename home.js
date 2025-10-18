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

// Templates Section Scrolling
document.addEventListener("DOMContentLoaded", () => {
    // Templates scrolling
    const templatesWrapper = document.getElementById("templatesWrapper");
    const leftArrow = document.getElementById("leftArrow");
    const rightArrow = document.getElementById("rightArrow");

    if (templatesWrapper && leftArrow && rightArrow) {
        const scrollAmount = 310;

        leftArrow.addEventListener("click", () => {
            templatesWrapper.scrollBy({ left: -scrollAmount, behavior: "smooth" });
        });

        rightArrow.addEventListener("click", () => {
            templatesWrapper.scrollBy({ left: scrollAmount, behavior: "smooth" });
        });
    }

    // Testimonials scrolling
    const track = document.querySelector('.testimonial-track');
const testimonials = Array.from(document.querySelectorAll('.testimonial'));
const prevBtn = document.querySelector('.left-btn');
const nextBtn = document.querySelector('.right-btn');

let index = 1;

function updateSlider() {
  const cardWidth = testimonials[1].offsetWidth + 100;
  track.style.transform = `translateX(-${(index - 1) * cardWidth}px)`;

  testimonials.forEach((t, i) => {
    t.classList.toggle('active', i === index);
  });
}

prevBtn.addEventListener('click', () => {
  index = index > 0 ? index - 1 : 0;
  updateSlider();
});

nextBtn.addEventListener('click', () => {
  index = index < testimonials.length - 1 ? index + 1 : testimonials.length - 1;
  updateSlider();
});

updateSlider();


    // FAQ Accordion Functionality
    const faqs = document.querySelectorAll('.faq');

    faqs.forEach(faq => {
        faq.addEventListener('click', () => {
            faq.classList.toggle('active');
        });
    });
});