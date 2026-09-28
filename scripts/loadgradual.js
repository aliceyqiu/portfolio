const STEP_SECONDS = 0.05;     // gap between each element's reveal
const MAX_DELAY_SECONDS = 0.25; // cap so far-down elements don't wait too long

const revealEls = document.querySelectorAll('[data-reveal]');

// Stagger is derived from DOM order, so adding/reordering scrapbook items
// just works — no per-element delay to hand-author or keep in sync.
revealEls.forEach((el, i) => {
    const delay = Math.min(i * STEP_SECONDS, MAX_DELAY_SECONDS);
    el.style.setProperty('--delay', `${delay}s`);
});

const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
    if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
    }
    });
}, { threshold: 0.15, rootMargin: '0px 0px -8% 0px' });

revealEls.forEach(el => io.observe(el));
