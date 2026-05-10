/**
 * main.js
 * Application entry point.
 * Orchestrates rendering and initialises UI behaviours.
 */

/* ---- App bootstrap ---- */

/**
 * Mount all sections into the page.
 * Runs once the DOM is ready.
 */
function mountApp() {
  const { owner, stats, certifications, skillCategories, highlight, projects } = PORTFOLIO_DATA;

  const fragments = [
    buildNav(owner),
    buildHero(owner, stats),
    buildAbout(owner, certifications),
    buildSkills(skillCategories),
    buildProjects(highlight, projects),
    buildContact(owner),
    buildContactForm(owner),
    buildFooter(owner),
  ];

  fragments.forEach((node) => document.body.appendChild(node));

  initScrollSpy();
  initSmoothScroll();
}

/* ---- Behaviours ---- */

/**
 * Highlight the active nav link as the user scrolls.
 */
function initScrollSpy() {
  const sections  = document.querySelectorAll('section[id]');
  const navLinks  = document.querySelectorAll('.nav__link');
  const threshold = 120;

  function onScroll() {
    let current = '';

    sections.forEach((section) => {
      if (window.scrollY >= section.offsetTop - threshold) {
        current = section.id;
      }
    });

    navLinks.forEach((link) => {
      const isActive = link.getAttribute('href') === `#${current}`;
      link.style.color = isActive
        ? 'var(--color-accent-green)'
        : 'var(--color-text-muted)';
    });
  }

  window.addEventListener('scroll', onScroll, { passive: true });
}

/**
 * Smooth-scroll nav links — handles the fixed nav offset.
 */
function initSmoothScroll() {
  document.addEventListener('click', (e) => {
    const link = e.target.closest('a[href^="#"]');
    if (!link) return;

    const target = document.querySelector(link.getAttribute('href'));
    if (!target) return;

    e.preventDefault();

    const navHeight = parseInt(
      getComputedStyle(document.documentElement).getPropertyValue('--nav-height'),
      10
    );

    window.scrollTo({
      top:      target.offsetTop - navHeight,
      behavior: 'smooth',
    });
  });
}

/* ---- Init ---- */
document.addEventListener('DOMContentLoaded', mountApp);