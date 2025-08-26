// Year
document.getElementById('year').textContent = new Date().getFullYear();

// Simple typing effect
const phrases = ["Web Designer", "Video Editor", "EN / AR Bilingual"];
const el = document.getElementById('typed');
let i = 0, j = 0, deleting = false;
function tick(){
  const current = phrases[i];
  el.textContent = current.slice(0, j);
  if(!deleting){ j++; if(j > current.length + 8){ deleting = true; } }
  else { j--; if(j === 0){ deleting = false; i = (i+1) % phrases.length; } }
  setTimeout(tick, deleting ? 50 : 90);
}
tick();

// Reveal on scroll
const io = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('show'); io.unobserve(e.target); }});
},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

// Smooth anchor scroll
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    const id = a.getAttribute('href').slice(1);
    const tgt = document.getElementById(id);
    if(tgt){ e.preventDefault(); tgt.scrollIntoView({behavior:'smooth', block:'start'}); }
  });
});

// Light/Dark toggle (optional)
const btn = document.getElementById('themeToggle');
let dark = true;
btn.addEventListener('click', ()=>{
  dark = !dark;
  document.documentElement.style.setProperty('--bg', dark ? '#0b0f14' : '#f6f7fb');
  document.documentElement.style.setProperty('--card', dark ? '#0f1621' : '#ffffff');
  document.documentElement.style.setProperty('--text', dark ? '#dbe7ff' : '#0b0f14');
  document.documentElement.style.setProperty('--muted', dark ? '#9fb0cf' : '#4a576b');
  btn.textContent = dark ? '🌙' : '☀️';
});
