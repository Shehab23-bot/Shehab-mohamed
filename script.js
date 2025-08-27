const translations = {
  en: {
    "about-link": "About",
    "skills-link": "Skills",
    "projects-link": "Projects",
    "services-link": "Services",
    "contact-link": "Contact",
    "hero-chip": "Available for your next project ✨",
    "hero-title": "Hi, I'm Shehab Mohammed",
    "hero-desc": "Frontend developer building fast, modern websites using HTML, CSS, and JavaScript.",
    "btn-github": "My GitHub",
    "btn-projects": "View Projects",
    "btn-cv": "Download CV",
    "about-title": "About Me",
    "about-desc": "I build landing pages, stores, and company profiles with a focus on performance and UX.",
    "skills-title": "Skills",
    "skill1": "Web Design",
    "skill2": "Beginner in Website Editing",
    "skill3": "Languages: English & Arabic",
    "services-title": "Services",
    "service1": "Website Design (HTML/CSS)",
    "service2": "Frontend Development",
    "service3": "User Experience Optimization"
  },
  ar: {
    "about-link": "من أنا",
    "skills-link": "المهارات",
    "projects-link": "المشاريع",
    "services-link": "الخدمات",
    "contact-link": "تواصل",
    "hero-chip": "جاهز لمشروعك القادم ✨",
    "hero-title": "مرحبًا، أنا شهاب محمد",
    "hero-desc": "مطور واجهات أمامية أبني مواقع سريعة وحديثة باستخدام HTML وCSS وJavaScript.",
    "btn-github": "حسابي على GitHub",
    "btn-projects": "عرض المشاريع",
    "btn-cv": "تحميل السيرة الذاتية",
    "about-title": "نبذة عني",
    "about-desc": "أبني صفحات هبوط ومتاجر ومواقع شركات مع التركيز على الأداء وتجربة المستخدم.",
    "skills-title": "المهارات",
    "skill1": "تصميم مواقع",
    "skill2": "مبتدئ في تعديل المواقع",
    "skill3": "لغتان: الإنجليزية والعربية",
    "services-title": "الخدمات",
    "service1": "تصميم مواقع (HTML/CSS)",
    "service2": "تطوير الواجهات الأمامية",
    "service3": "تحسين تجربة المستخدم"
  }
};

let currentLang = "en";
const langToggle = document.getElementById("lang-toggle");
const year = document.getElementById("year");
year.textContent = new Date().getFullYear();

function updateLanguage(lang) {
  document.documentElement.lang = lang;
  for (const key in translations[lang]) {
    const el = document.querySelector(`[data-key="${key}"]`);
    if (el) el.textContent = translations[lang][key];
  }
  langToggle.textContent = lang === "en" ? "AR" : "EN";
  currentLang = lang;
}

langToggle.addEventListener("click", () => {
  updateLanguage(currentLang === "en" ? "ar" : "en");
});

// Initialize language
updateLanguage(currentLang);

// Typing effect
const typingElement = document.getElementById("typing");
const typingText = ["Frontend Developer", "Web Designer", "Creative Coder"];
let typingIndex = 0, charIndex = 0, typingSpeed = 100;

function type() {
  if (charIndex < typingText[typingIndex].length) {
    typingElement.textContent += typingText[typingIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingSpeed);
  } else {
    setTimeout(() => {
      typingElement.textContent = "";
      charIndex = 0;
      typingIndex = (typingIndex + 1) % typingText.length;
      type();
    }, 1500);
  }
}
type();

// Fade-in on scroll
const fadeElements = document.querySelectorAll(".fade-in");
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.2 });

fadeElements.forEach(el => observer.observe(el));
