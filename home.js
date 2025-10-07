  // Toggle menu open/close
// Navbar Toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  
  // Icon change
  const icon = navToggle.querySelector('i');
  if (navLinks.classList.contains('active')) {
    icon.classList.remove('fa-bars');
    icon.classList.add('fa-times');
  } else {
    icon.classList.remove('fa-times');
    icon.classList.add('fa-bars');
  }
});

// Close menu when clicking on a link
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
    const icon = navToggle.querySelector('i');
    icon.classList.remove('fa-times');
    icon.classList.add('fa-bars');
  });
});

// Your existing code continues below...
const wrapper = document.getElementById('templatesWrapper');
// ... rest of your code


    // Comments

 document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("testimonialContainer"); // ✅ FIXED
  const leftBtn = document.querySelector(".arrow.left");
  const rightBtn = document.querySelector(".arrow.right");

  if (!container || !leftBtn || !rightBtn) {
    console.error("⚠️ Arrows or container not found!");
    return;
  }

  leftBtn.addEventListener("click", () => {
    container.scrollBy({ left: -400, behavior: "smooth" });
  });

  rightBtn.addEventListener("click", () => {
    container.scrollBy({ left: 400, behavior: "smooth" });
  });
});



// ===== Accordion Functionality =====
const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
  faq.addEventListener('click', () => {
    faq.classList.toggle('active');
  });
});


