// ============================================
//   SAMUEL DEHEER — PORTFOLIO SCRIPTS
//   File: js/main.js
// ============================================

// ── Generate Stars Background ──
const starsEl = document.getElementById('stars');

for (let i = 0; i < 120; i++) {
  const star = document.createElement('div');
  star.className = 'star';

  const size = Math.random() * 2 + 0.5;
  star.style.cssText = `
    width: ${size}px;
    height: ${size}px;
    top: ${Math.random() * 100}%;
    left: ${Math.random() * 100}%;
    --d: ${2 + Math.random() * 4}s;
    opacity: ${Math.random() * 0.5 + 0.1};
    animation-delay: ${Math.random() * 4}s;
  `;

  starsEl.appendChild(star);
}

// ── Fade-in on Scroll ──
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.fade-in').forEach((el, i) => {
  el.style.transitionDelay = `${(i % 4) * 0.08}s`;
  observer.observe(el);
});
