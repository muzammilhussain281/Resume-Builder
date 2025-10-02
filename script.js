// ======= Categories + Templates Data =======
const categoriesData = {
  IT: [ /* aapka existing IT templates */ ],
  Designer: [ /* aapka existing Designer templates */ ],

  Marketing: [
   {
  key: "mkt2",
  mini: `
    <div class="mini-resume">
      <div class="mini-header">
        <div class="mini-name">Richard Sanchez</div>
        <div class="mini-sub">Marketing Manager</div>
      </div>
      <div style="display:flex;gap:6px;align-items:center;margin-top:6px;">
        <img src="https://via.placeholder.com/40" style="width:40px;height:40px;border-radius:50%;object-fit:cover;">
        <div style="font-size:11px;color:#444;">
          <div>+123-456-7890</div>
          <div>hello@reallygreatsite.com</div>
        </div>
      </div>
    </div>
  `,
  full: `
    <div class="resume-template" style="display:flex;max-width:900px;border:1px solid #ddd;border-radius:10px;overflow:hidden;">

      <!-- Left Sidebar -->
      <div class="left" style="width:30%;background:#f4f4f4;padding:20px;text-align:center;">
        <div id="preview_picture">
          <img src="https://via.placeholder.com/120" style="width:120px;height:120px;border-radius:50%;object-fit:cover;border:3px solid #2d3e5e;">
        </div>
        <div style="margin-top:20px;text-align:left;">
          <h3 style="font-size:14px;color:#2d3e5e;border-bottom:1px solid #ccc;padding-bottom:4px;">Contact</h3>
          <p id="preview_phone" style="font-size:12px;margin:4px 0;">+123-456-7890</p>
          <p id="preview_email" style="font-size:12px;margin:4px 0;">hello@reallygreatsite.com</p>
          <p id="preview_address" style="font-size:12px;margin:4px 0;">123 Anywhere St., Any City</p>
          <p id="preview_website" style="font-size:12px;margin:4px 0;">www.reallygreatsite.com</p>
        </div>

        <div style="margin-top:20px;text-align:left;">
          <h3 style="font-size:14px;color:#2d3e5e;border-bottom:1px solid #ccc;padding-bottom:4px;">Skills</h3>
          <ul id="preview_skills" style="font-size:12px;line-height:1.4;padding-left:18px;">
            <li>Project Management</li>
            <li>Public Relations</li>
            <li>Teamwork</li>
            <li>Digital Marketing</li>
          </ul>
        </div>

        <div style="margin-top:20px;text-align:left;">
          <h3 style="font-size:14px;color:#2d3e5e;border-bottom:1px solid #ccc;padding-bottom:4px;">Languages</h3>
          <ul id="preview_languages" style="font-size:12px;line-height:1.4;padding-left:18px;">
            <li>English (Fluent)</li>
            <li>French (Fluent)</li>
            <li>Spanish (Intermediate)</li>
          </ul>
        </div>

        <div style="margin-top:20px;text-align:left;">
          <h3 style="font-size:14px;color:#2d3e5e;border-bottom:1px solid #ccc;padding-bottom:4px;">Reference</h3>
          <p style="font-size:12px;margin:4px 0;"><b>Estelle Darcy</b></p>
          <p style="font-size:12px;margin:4px 0;">Wardiere Inc. / CTO</p>
          <p style="font-size:12px;margin:4px 0;">+123-456-7890</p>
          <p style="font-size:12px;margin:4px 0;">hello@reallygreatsite.com</p>
        </div>
      </div>

      <!-- Right Content -->
      <div class="right" style="flex:1;padding:20px;">
        <div style="background:#2d3e5e;color:#fff;padding:20px;border-radius:8px;">
          <h1 id="preview_name" style="margin:0;font-size:22px;">Richard Sanchez</h1>
          <p id="preview_title" style="margin:4px 0 0;font-size:14px;">Marketing Manager</p>
        </div>

        <div class="section" style="margin-top:20px;">
          <h2 style="font-size:15px;color:#2d3e5e;margin:6px 0;">Profile</h2>
          <p id="preview_summary" style="font-size:13px;color:#444;">Your profile summary here...</p>
        </div>

        <div class="section" style="margin-top:20px;">
          <h2 style="font-size:15px;color:#2d3e5e;margin:6px 0;">Work Experience</h2>
          <div id="preview_experience" style="font-size:13px;color:#444;">
            <p><b>Borcelle Studio</b> (2030 - Present)</p>
            <p>Marketing Manager & Specialist</p>
            <ul>
              <li>Develop and execute marketing strategies.</li>
              <li>Lead and mentor a high-performing team.</li>
              <li>Monitor brand consistency.</li>
            </ul>
          </div>
        </div>

        <div class="section" style="margin-top:20px;">
          <h2 style="font-size:15px;color:#2d3e5e;margin:6px 0;">Education</h2>
          <div id="preview_education" style="font-size:13px;color:#444;">
            <p><b>Master of Business Management</b> (2029 - 2031)</p>
            <p>Wardiere University | GPA: 3.8 / 4.0</p>
            <p><b>Bachelor of Business Management</b> (2025 - 2029)</p>
            <p>Wardiere University | GPA: 3.8 / 4.0</p>
          </div>
        </div>
      </div>
    </div>
  `
}

  ],
  Marketing: [
  {
    key: "mkt1",
    mini: `
      <div class="mini-resume">
        <div class="mini-header">
          <div class="mini-name">Richard Sanchez</div>
          <div class="mini-sub">Marketing Manager</div>
        </div>
        <div style="display:flex;gap:6px;align-items:center;margin-top:6px;">
          <img src="https://via.placeholder.com/40" style="width:40px;height:40px;border-radius:50%;object-fit:cover;">
          <div style="font-size:11px;color:#444;">
            <div>+123-456-7890</div>
            <div>hello@mail.com</div>
          </div>
        </div>
      </div>
    `,
    full: `
      <div class="resume-template sidebar" style="display:flex;gap:18px;max-width:800px;">
        <!-- Left Sidebar -->
        <div class="left" style="width:30%;background:#2d3e5e;color:#fff;padding:16px;border-radius:8px;display:flex;flex-direction:column;align-items:center;">
          <div id="preview_picture">
            <img src="https://via.placeholder.com/100" style="width:100px;height:100px;border-radius:50%;object-fit:cover;border:3px solid #fff;">
          </div>
          <h2 id="preview_name">Your Name</h2>
          <p id="preview_title">Job Title</p>

          <div style="margin-top:20px;width:100%;">
            <h3>Contact</h3>
            <p id="preview_phone">Phone</p>
            <p id="preview_email">Email</p>
          </div>

          <div style="margin-top:20px;width:100%;">
            <h3>Skills</h3>
            <ul id="preview_skills">
              <li>Skill 1</li>
              <li>Skill 2</li>
            </ul>
          </div>
        </div>

        <!-- Right Content -->
        <div class="right" style="flex:1;padding:16px;">
          <h2>Profile</h2>
          <p id="preview_summary">Your summary</p>

          <h2>Work Experience</h2>
          <p id="preview_experience">Your experience here</p>

          <h2>Education</h2>
          <p id="preview_education">Your education here</p>
        </div>
      </div>
    `
  },
  {
    key: "mkt2",
    mini: `
      <div class="mini-resume">
        <div class="mini-name">Samantha Grey</div>
        <div class="mini-sub">Digital Strategist</div>
        <img src="https://via.placeholder.com/50" style="border-radius:50%;margin-top:6px;">
      </div>
    `,
    full: `
      <div class="resume-template modern" style="padding:20px;max-width:800px;">
        <div id="preview_picture"></div>
        <h1 id="preview_name">Your Name</h1>
        <p id="preview_title">Job Title · <span id="preview_email">Email</span> · <span id="preview_phone">Phone</span></p>
        <h2>Summary</h2>
        <p id="preview_summary">Your summary</p>
        <h2>Skills</h2>
        <ul id="preview_skills"><li>Skill 1</li></ul>
        <h2>Experience</h2>
        <p id="preview_experience">Your experience</p>
        <h2>Education</h2>
        <p id="preview_education">Your education</p>
      </div>
    `
  },
  {
    key: "mkt3",
    mini: `
      <div class="mini-resume">
        <div class="mini-name">David Lee</div>
        <div class="mini-sub">Brand Consultant</div>
      </div>
    `,
    full: `
      <div class="resume-template clean" style="padding:20px;max-width:800px;border-left:5px solid #2d3e5e;">
        <h1 id="preview_name">Your Name</h1>
        <h3 id="preview_title">Job Title</h3>
        <p><b>Email:</b> <span id="preview_email">Email</span> | <b>Phone:</b> <span id="preview_phone">Phone</span></p>
        <h2>Summary</h2>
        <p id="preview_summary"></p>
        <h2>Skills</h2>
        <ul id="preview_skills"><li>Skill</li></ul>
        <h2>Experience</h2>
        <p id="preview_experience"></p>
        <h2>Education</h2>
        <p id="preview_education"></p>
      </div>
    `
  },
  {
    key: "mkt4",
    mini: `
      <div class="mini-resume">
        <div class="mini-name">Emma Wilson</div>
        <div class="mini-sub">SEO Specialist</div>
      </div>
    `,
    full: `
      <div class="resume-template modern" style="display:grid;grid-template-columns:1fr 2fr;gap:20px;max-width:800px;">
        <div>
          <div id="preview_picture"></div>
          <h2 id="preview_name">Your Name</h2>
          <p id="preview_title">Job Title</p>
          <p id="preview_email">Email</p>
          <p id="preview_phone">Phone</p>
          <h3>Skills</h3>
          <ul id="preview_skills"></ul>
        </div>
        <div>
          <h3>Profile</h3>
          <p id="preview_summary"></p>
          <h3>Experience</h3>
          <p id="preview_experience"></p>
          <h3>Education</h3>
          <p id="preview_education"></p>
        </div>
      </div>
    `
  },
  {
    key: "mkt5",
    mini: `
      <div class="mini-resume">
        <div class="mini-name">Michael Adams</div>
        <div class="mini-sub">Content Marketer</div>
      </div>
    `,
    full: `
      <div class="resume-template bordered" style="padding:20px;border:2px solid #2d3e5e;border-radius:8px;max-width:800px;">
        <h1 id="preview_name">Your Name</h1>
        <p id="preview_title">Job Title</p>
        <p>Email: <span id="preview_email"></span> | Phone: <span id="preview_phone"></span></p>
        <h2>Summary</h2>
        <p id="preview_summary"></p>
        <h2>Skills</h2>
        <ul id="preview_skills"></ul>
        <h2>Experience</h2>
        <p id="preview_experience"></p>
        <h2>Education</h2>
        <p id="preview_education"></p>
      </div>
    `
  }
],

  IT: [
    {
      key: "it1",
      mini: `<div class="mini-resume">
               <div class="mini-header">
                 <div class="mini-name">John Doe</div>
                 <div class="mini-sub">Frontend Developer · john@mail.com</div>
               </div>
               <div style="font-size:11px;color:#444">Skills: JS, Python</div>
               <div style="margin-top:4px;"><img src="https://via.placeholder.com/60" style="width:60px;height:60px;border-radius:50%;object-fit:cover;"></div>
             </div>`,
      full: `<div class="resume-template modern">
               <div id="preview_picture"></div>
               <h1 id="preview_name">Your Name</h1>
               <p class="sub" id="preview_title">Job Title · <span id="preview_email">Email</span> · <span id="preview_phone">Phone</span></p>
               <div class="section">
                 <h2>Summary</h2>
                 <p id="preview_summary">Your summary</p>
               </div>
               <div class="section">
                 <h2>Skills</h2>
                 <ul id="preview_skills"><li>Skill 1</li><li>Skill 2</li></ul>
               </div>
               <div class="section">
                 <h2>Experience</h2>
                 <p id="preview_experience">Your experience here</p>
               </div>
               <div class="section">
                 <h2>Education</h2>
                 <p id="preview_education">Your education here</p>
               </div>
             </div>`
    },
    // it2, it3, it4, it5 similar ... can duplicate it with different names/jobs
  ],
  Designer: [
    {
      key: "des1",
      mini: `<div class="mini-resume">
               <div class="mini-header">
                 <div class="mini-name">Alice Brown</div>
                 <div class="mini-sub">UI Designer · alice@mail.com</div>
               </div>
               <div style="font-size:11px;color:#444">Skills: Photoshop, Figma</div>
               <div style="margin-top:4px;"><img src="https://via.placeholder.com/60" style="width:60px;height:60px;border-radius:50%;object-fit:cover;"></div>
             </div>`,
      full: `<div class="resume-template modern">
               <div id="preview_picture"></div>
               <h1 id="preview_name">Your Name</h1>
               <p class="sub" id="preview_title">Job Title · <span id="preview_email">Email</span> · <span id="preview_phone">Phone</span></p>
               <div class="section">
                 <h2>Summary</h2>
                 <p id="preview_summary">Your summary</p>
               </div>
               <div class="section">
                 <h2>Skills</h2>
                 <ul id="preview_skills"><li>Skill 1</li><li>Skill 2</li></ul>
               </div>
               <div class="section">
                 <h2>Experience</h2>
                 <p id="preview_experience">Your experience here</p>
               </div>
               <div class="section">
                 <h2>Education</h2>
                 <p id="preview_education">Your education here</p>
               </div>
             </div>`
    }
    // des2, des3, des4, des5 similar
  ]
  // Add more categories like Marketing, Teacher, Engineer, Business
};



// ======= Variables =======
const templateList = document.getElementById("templateList");
let currentTemplate = null;

// ======= Category Click =======
const categoryItems = document.querySelectorAll(".category-item");
categoryItems.forEach(cat=>{
  cat.addEventListener("click", ()=>{
    const catName = cat.textContent.replace(/[^a-zA-Z]/g,''); // remove emoji
    const templates = categoriesData[catName];
    if(!templates) return;
    templateList.innerHTML = "";
    templates.forEach(t=>{
      const div = document.createElement("div");
      div.classList.add("template-box");
      div.innerHTML = t.mini;
      div.dataset.key = t.key;
      div.dataset.full = t.full;
      templateList.appendChild(div);
    });
  });
});

// ======= Template Click → Show Preview =======
templateList.addEventListener("click", function(e){
  const box = e.target.closest(".template-box");
  if(!box) return;
  currentTemplate = box.dataset.key;
  document.getElementById("resumePreview").innerHTML = box.dataset.full;
  updatePreview();
});

// ======= Input Live Update =======
const inputs = ["name","title","email","phone","summary","skills","experience","education"];
inputs.forEach(id=>{
  const inputEl = document.getElementById(`inp_${id}`);
  inputEl.addEventListener("input", updatePreview);
});

// ======= Picture Upload =======
const pictureInput = document.createElement("input");
pictureInput.type = "file";
pictureInput.accept = "image/*";
pictureInput.id = "inp_picture";
pictureInput.style.marginBottom = "10px";
document.querySelector(".builder-left").prepend(pictureInput);

pictureInput.addEventListener("change", ()=>{
  if(!currentTemplate) return;
  const file = pictureInput.files[0];
  if(file){
    const reader = new FileReader();
    reader.onload = function(e){
      let picEl = document.getElementById("preview_picture");
      if(!picEl){
        picEl = document.createElement("div");
        picEl.id = "preview_picture";
        document.getElementById("resumePreview").prepend(picEl);
      }
      picEl.innerHTML = `<img src="${e.target.result}" style="width:80px;height:80px;border-radius:50%;object-fit:cover;margin-bottom:8px;">`;
    };
    reader.readAsDataURL(file);
  }
});

// ======= Update Preview Function =======
function updatePreview(){
  if(!currentTemplate) return;
  inputs.forEach(id=>{
    const val = document.getElementById(`inp_${id}`).value;
    const previewEl = document.getElementById(`preview_${id}`);
    if(previewEl){
      if(id=="skills" && previewEl.tagName==="UL"){
        previewEl.innerHTML = val.split(",").map(s=>s.trim()).filter(s=>s).map(s=>`<li>${s}</li>`).join("");
      } else {
        previewEl.textContent = val;
      }
    }
  });
}

// ======= Clear Button =======
document.getElementById("clearBtn").addEventListener("click", ()=>{
  document.getElementById("resumeForm").reset();
  document.getElementById("inp_picture").value = "";
  updatePreview();
});

