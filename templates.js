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


// Dummy templates (replace with your images)

// Your template images
const templates = [
  { img: "https://www.resumetemplates.com/wp-content/uploads/2025/03/3590975-restaurant-server-job-description-resume-example.pdf.jpeg" },
  { img: "https://template.canva.com/EAFzfwx_Qik/4/0/1131w-T9RPR4DPdiw.jpg" },
  { img: "https://www.my-resume-templates.com/wp-content/uploads/2023/07/job-resume-template-259.jpg" },
  { img: "https://resumesector.com/wp-content/uploads/2024/10/Best-Resume-Template-Free-Download-MS-Word--724x1024.jpg" },
  { img: "https://resumesector.com/wp-content/uploads/2024/12/Professional-Resume-768x1080.jpg" },
  { img: "https://marketplace.canva.com/EAFrc1XfAas/3/0/1131w/canva-professional-modern-cv-resume-PGNK1_muGHg.jpg" },
  { img: "https://mycvstore.com/wp-content/uploads/2020/12/Modern-Resume-Design.jpg" },
  { img: "https://marketplace.canva.com/EAGPFDylf0w/7/0/1131w/canva-white-simple-bordered-infographic-resume-zXxvx4iZtDs.jpg" },
  { img: "https://i.redd.it/good-resume-templates-for-someone-with-no-job-experience-v0-1uz5p6wv68nd1.jpg?width=1131&format=pjpg&auto=webp&s=23b9492d93dade8e3af336c5370f18fe6680a91c" },
  { img: "https://static.resumetrick.com/userspace/7cfd2ebf84b697d6d6832ec9210c7575/1718888899530/cover800.webp" },
  { img: "https://www.my-resume-templates.com/wp-content/uploads/2023/05/sample-resume-word.jpg" },
  { img: "https://www.my-resume-templates.com/wp-content/uploads/2023/05/professional-resume-template-350x495.jpg" },
  {img: "https://www.resumetemplates.com/wp-content/uploads/2025/03/3590975-restaurant-server-job-description-resume-example.pdf.jpeg" },
  { img: "https://template.canva.com/EAFzfwx_Qik/4/0/1131w-T9RPR4DPdiw.jpg" },
  { img: "https://www.my-resume-templates.com/wp-content/uploads/2023/07/job-resume-template-259.jpg" },
  { img: "https://resumesector.com/wp-content/uploads/2024/10/Best-Resume-Template-Free-Download-MS-Word--724x1024.jpg" },
  { img: "https://resumesector.com/wp-content/uploads/2024/12/Professional-Resume-768x1080.jpg" },
];


const grid = document.getElementById("templateGrid");
const pagination = document.getElementById("pagination");

const templatesPerPage = 9;
let currentPage = 1;

// Function to display templates for a given page
function displayTemplates(page) {
  grid.innerHTML = "";
  const start = (page - 1) * templatesPerPage;
  const end = start + templatesPerPage;
  const pageTemplates = templates.slice(start, end);

  pageTemplates.forEach((t) => {
    const card = document.createElement("div");
    card.classList.add("template-card");
    card.innerHTML = `<img src="${t.img}" alt="Template">`;
    grid.appendChild(card);
  });
}

// Function to create pagination buttons
function setupPagination() {
  pagination.innerHTML = "";
  const pageCount = Math.ceil(templates.length / templatesPerPage);

  for (let i = 1; i <= pageCount; i++) {
    const btn = document.createElement("button");
    btn.textContent = i;
    btn.classList.add("page-btn");
    if (i === currentPage) btn.classList.add("active");

    btn.addEventListener("click", () => {
      currentPage = i;
      displayTemplates(currentPage);
      updatePagination();
    });

    pagination.appendChild(btn);
  }
}

// Function to update active page button
function updatePagination() {
  const buttons = document.querySelectorAll(".page-btn");
  buttons.forEach((btn, index) => {
    btn.classList.toggle("active", index + 1 === currentPage);
  });
}

// Initialize
displayTemplates(currentPage);
setupPagination();


    // FAQ Accordion Functionality
    const faqs = document.querySelectorAll('.faq');

    faqs.forEach(faq => {
        faq.addEventListener('click', () => {
            faq.classList.toggle('active');
        });
    });