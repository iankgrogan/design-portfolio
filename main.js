// ── Scroll reveal ──
const revealEls = document.querySelectorAll('.reveal');
const io = new IntersectionObserver(
  (entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        io.unobserve(e.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
);
revealEls.forEach(el => io.observe(el));

// ── Active nav link ──
const currentPath = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a').forEach(link => {
  const href = link.getAttribute('href').split('/').pop();
  if (href === currentPath || (currentPath === '' && href === 'index.html')) {
    link.classList.add('active');
  }
});

// ── Nav background opacity on scroll ──
const nav = document.querySelector('.nav');
if (nav) {
  window.addEventListener('scroll', () => {
    nav.style.background = window.scrollY > 10
      ? 'rgba(248,246,241,0.96)'
      : 'rgba(248,246,241,0.88)';
  }, { passive: true });
}

// ── Stagger project cards ──
const cards = document.querySelectorAll('.project-card');
cards.forEach((card, i) => {
  card.style.transitionDelay = `${i * 0.07}s`;
});
