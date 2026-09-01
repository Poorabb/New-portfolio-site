// Scroll-triggered reveal animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Duplicate marquee content for a seamless loop — duplicate is aria-hidden
const marquee = document.getElementById('marquee');
if (marquee) {
  const originalHTML = marquee.innerHTML;
  const dup = document.createElement('span');
  dup.setAttribute('aria-hidden', 'true');
  dup.style.display = 'contents';
  dup.innerHTML = originalHTML;
  dup.querySelectorAll('span').forEach(el => el.setAttribute('aria-hidden', 'true'));
  marquee.appendChild(dup);
}

// Mobile nav toggle
const navToggle = document.querySelector('.nav-toggle');
const mobileMenu = document.getElementById('mobileMenu');

if (navToggle && mobileMenu) {
  navToggle.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  });
}

// Interactive hero parallax — desktop pointer devices only, rAF + CSS custom properties
// Uses CSS variables --hero-mx/--hero-my on .hero, applied via `translate` on .hero-bg, ::before/::after, .hero-grid
// Movement is restrained/premium, preserves existing gradient animation, rAF eased, resets on leave,
// disabled for (prefers-reduced-motion) and non-fine pointers, no layout shift.
(function() {
  const hero = document.querySelector('.hero');
  if (!hero) return;

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) return;

  // Only enable on desktop pointer devices (fine pointer + hover)
  // This automatically excludes touch devices (coarse pointer, no hover)
  const canHoverFine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  if (!canHoverFine) return;

  let targetX = 0;
  let targetY = 0;
  let currentX = 0;
  let currentY = 0;
  let rafId = null;

  const MAX = 22; // visible but restrained — with CSS multipliers 0.5/0.9/1.1 gives 11px / 20px / 24px peak
  const EASE = 0.07;

  function tick() {
    const dx = targetX - currentX;
    const dy = targetY - currentY;
    currentX += dx * EASE;
    currentY += dy * EASE;
    if (Math.abs(dx) < 0.01) currentX = targetX;
    if (Math.abs(dy) < 0.01) currentY = targetY;

    hero.style.setProperty('--hero-mx', currentX.toFixed(2) + 'px');
    hero.style.setProperty('--hero-my', currentY.toFixed(2) + 'px');

    if (Math.abs(targetX - currentX) > 0.01 || Math.abs(targetY - currentY) > 0.01) {
      rafId = requestAnimationFrame(tick);
    } else {
      rafId = null;
      if (targetX === 0 && targetY === 0) {
        hero.style.setProperty('--hero-mx', '0px');
        hero.style.setProperty('--hero-my', '0px');
      }
    }
  }

  function ensureTick() {
    if (rafId == null) rafId = requestAnimationFrame(tick);
  }

  function onMove(e) {
    const rect = hero.getBoundingClientRect();
    if (rect.width === 0 || rect.height === 0) return;
    const nx = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const ny = ((e.clientY - rect.top) / rect.height) * 2 - 1;
    targetX = Math.max(-1, Math.min(1, nx)) * MAX;
    targetY = Math.max(-1, Math.min(1, ny)) * MAX;
    ensureTick();
  }

  // Use both pointermove and mousemove for broad desktop coverage
  hero.addEventListener('pointermove', onMove, { passive: true });
  hero.addEventListener('mousemove', onMove, { passive: true });

  hero.addEventListener('pointerleave', () => {
    targetX = 0;
    targetY = 0;
    ensureTick();
  }, { passive: true });

  hero.addEventListener('mouseleave', () => {
    targetX = 0;
    targetY = 0;
    ensureTick();
  }, { passive: true });
})();
