/**
 * renderer.js
 * Pure functions that build DOM nodes from data objects.
 * No side-effects — each function receives data and returns a Node.
 */

/* ---- Utility helpers ---- */

/**
 * Create an element with optional className and innerHTML.
 * @param {string} tag
 * @param {string} [className]
 * @param {string} [innerHTML]
 * @returns {HTMLElement}
 */
function createElement(tag, className = '', innerHTML = '') {
  const el = document.createElement(tag);
  if (className) el.className = className;
  if (innerHTML) el.innerHTML = innerHTML;
  return el;
}

/**
 * Build a section header with number, title, and decorative line.
 * @param {string} num  e.g. '01.'
 * @param {string} title
 * @returns {HTMLElement}
 */
function buildSectionHeader(num, title) {
  const header = createElement('div', 'section-header');
  header.appendChild(createElement('span', 'section-header__num', num));
  header.appendChild(createElement('h2',   'section-header__title', title));
  header.appendChild(createElement('div',  'section-header__line'));
  return header;
}

/* ---- Section builders ---- */

/**
 * Render the <nav> element.
 * @param {{ name: string, github: string }} owner
 * @returns {HTMLElement}
 */
function buildNav(owner) {
  const nav = createElement('nav', 'nav');

  const logo = createElement('div', 'nav__logo');
  logo.innerHTML = `&gt; ${owner.firstName.toLowerCase()}.${owner.lastName.toLowerCase()}<span class="cursor"></span>`;

  const links = createElement('ul', 'nav__links');
  ['About', 'Skills', 'Projects', 'Contact'].forEach((label) => {
    const li = document.createElement('li');
    const a  = createElement('a', 'nav__link', label);
    a.href   = `#${label.toLowerCase()}`;
    li.appendChild(a);
    links.appendChild(li);
  });

  nav.appendChild(logo);
  nav.appendChild(links);
  return nav;
}

/**
 * Render the hero section.
 * @param {object} owner
 * @param {Array}  stats
 * @returns {HTMLElement}
 */
function buildHero(owner, stats) {
  const section = createElement('section', 'section hero');
  section.id = 'hero';

  const container = createElement('div', 'container');

  // Tag line
  const tag = createElement('p', 'hero__tag animate-fade-up');
  tag.style.setProperty('--delay', '0.1s');
  tag.textContent = 'Available for opportunities';

  // Name
  const heading = createElement('h1', 'hero__name animate-fade-up');
  heading.style.setProperty('--delay', '0.2s');
  heading.innerHTML = `${owner.firstName}<br><span class="hero__name--accent">${owner.lastName}</span>`;

  // Role
  const role = createElement('p', 'hero__role animate-fade-up');
  role.style.setProperty('--delay', '0.35s');
  role.textContent = `// ${owner.tagline}`;

  // Description
  const desc = createElement('p', 'hero__description animate-fade-up');
  desc.style.setProperty('--delay', '0.5s');
  desc.textContent = 'I build clean, performant web interfaces and love diving deep into algorithms, open-source, and everything that runs in a terminal.';

  // CTA buttons
  const cta = createElement('div', 'hero__cta animate-fade-up');
  cta.style.setProperty('--delay', '0.65s');

  const ctaPrimary = createElement('a', 'btn btn--primary', 'View Projects');
  ctaPrimary.href  = '#projects';

  const ctaOutline = createElement('a', 'btn btn--outline', 'GitHub ↗');
  ctaOutline.href   = owner.github;
  ctaOutline.target = '_blank';
  ctaOutline.rel    = 'noopener noreferrer';

  const ctaCV = createElement('a', 'btn btn--outline', 'View CV');
  ctaCV.href   = '/resume.pdf';
  ctaCV.target = '_blank';
  ctaCV.rel    = 'noopener noreferrer';

  cta.appendChild(ctaPrimary);
  cta.appendChild(ctaOutline);
  cta.appendChild(ctaCV);

  // Stats
  const statsEl = createElement('div', 'hero__stats animate-fade-up');
  statsEl.style.setProperty('--delay', '0.65s');

  stats.forEach(({ value, label }) => {
    const item = createElement('div', 'stat');
    item.innerHTML = `<span class="stat__number">${value}</span><span class="stat__label">${label}</span>`;
    statsEl.appendChild(item);
  });

  [tag, heading, role, desc, cta, statsEl].forEach((el) => container.appendChild(el));
  section.appendChild(container);
  return section;
}

/**
 * Render the about section.
 * @param {object} owner
 * @param {Array}  certifications
 * @returns {HTMLElement}
 */
function buildAbout(owner, certifications) {
  const section = createElement('section', 'section');
  section.id = 'about';

  const container = createElement('div', 'container');
  container.appendChild(buildSectionHeader('01.', 'About'));

  const grid = createElement('div', 'about__grid');

  // Bio paragraphs
  const body = createElement('div', 'about__body');
  owner.bio.forEach((text) => {
    body.appendChild(createElement('p', '', text));
  });

  // Certifications
  const certList = createElement('div', 'cert-list');
  certifications.forEach(({ title, subtitle, modifier }) => {
    const card = createElement('div', `card cert-card cert-card--${modifier}`);
    card.appendChild(createElement('div', 'cert-card__title',    title));
    card.appendChild(createElement('div', 'cert-card__subtitle', subtitle));
    certList.appendChild(card);
  });

  grid.appendChild(body);
  grid.appendChild(certList);
  container.appendChild(grid);
  section.appendChild(container);
  return section;
}

/**
 * Render the skills section.
 * @param {Array} skillCategories
 * @returns {HTMLElement}
 */
function buildSkills(skillCategories) {
  const section = createElement('section', 'section');
  section.id = 'skills';

  const container = createElement('div', 'container');
  container.appendChild(buildSectionHeader('02.', 'Skills'));

  const grid = createElement('div', 'skills__grid');

  skillCategories.forEach(({ title, skills }) => {
    const category = createElement('div', 'card skill-category');

    const catTitle = createElement('div', 'skill-category__title', title);

    const tags = createElement('div', 'skill-category__tags');
    skills.forEach((skill) => {
      tags.appendChild(createElement('span', 'tag', skill));
    });

    category.appendChild(catTitle);
    category.appendChild(tags);
    grid.appendChild(category);
  });

  container.appendChild(grid);
  section.appendChild(container);
  return section;
}

/**
 * Render the projects section.
 * @param {object} highlight
 * @param {Array}  projects
 * @returns {HTMLElement}
 */
function buildProjects(highlight, projects) {
  const section = createElement('section', 'section');
  section.id = 'projects';

  const container = createElement('div', 'container');
  container.appendChild(buildSectionHeader('03.', 'Projects & Highlights'));

  // Featured highlight card
  const highlightCard = createElement('div', 'projects__highlight');

  const badge = createElement('div', 'projects__highlight-badge', '★ Open Source');
  const title = createElement('div', 'project-card__title', highlight.title);
  title.style.marginBottom = 'var(--space-3)';

  const desc = createElement('div', 'project-card__description', highlight.description);

  const stack = createElement('div', 'project-card__stack');
  highlight.tags.forEach((tag) => {
    stack.appendChild(createElement('span', 'tag tag--cyan', tag));
  });

  const link = createElement('a', 'project-card__link', `${highlight.link.label} →`);
  link.href   = highlight.link.href;
  link.target = '_blank';
  link.rel    = 'noopener noreferrer';

  [badge, title, desc, stack, link].forEach((el) => highlightCard.appendChild(el));

  // Project cards grid
  const grid = createElement('div', 'projects__grid');

  projects.forEach(({ num, title: pTitle, description, tags, link: pLink }) => {
    const card = createElement('div', 'card project-card');

    card.appendChild(createElement('div', 'project-card__num',         `// ${num}`));
    card.appendChild(createElement('div', 'project-card__title',       pTitle));
    card.appendChild(createElement('div', 'project-card__description', description));

    const stackEl = createElement('div', 'project-card__stack');
    tags.forEach((tag) => stackEl.appendChild(createElement('span', 'tag tag--cyan', tag)));

    const linkEl = createElement('a', 'project-card__link', `${pLink.label} →`);
    linkEl.href   = pLink.href;
    linkEl.target = '_blank';
    linkEl.rel    = 'noopener noreferrer';

    card.appendChild(stackEl);
    card.appendChild(linkEl);
    grid.appendChild(card);
  });

  container.appendChild(highlightCard);
  container.appendChild(grid);
  section.appendChild(container);
  return section;
}

/**
 * Render the contact section.
 * @param {object} owner
 * @returns {HTMLElement}
 */
function buildContact(owner) {
  const section = createElement('section', 'section');
  section.id = 'contact';

  const container = createElement('div', 'container');
  container.appendChild(buildSectionHeader('04.', 'Contact'));

  const grid = createElement('div', 'contact__grid');

  // Left col — copy + CTA
  const left = createElement('div');
  const heading = createElement('h3', 'contact__heading');
  heading.innerHTML = `Let's build something <em>together.</em>`;

  const sub = createElement('p', 'contact__subtext',
    'Open to junior front-end roles, freelance projects, and open-source collaborations. I respond fast and I ship faster.');

  const ctaBtn = createElement('a', 'btn btn--primary', 'Say Hello →');
  ctaBtn.href = `mailto:${owner.email}`;

  left.appendChild(heading);
  left.appendChild(sub);
  left.appendChild(ctaBtn);

  // Right col — links
  const right = createElement('div', 'contact__links');

  const ghLink = createElement('a', 'contact-link');
  ghLink.href   = owner.github;
  ghLink.target = '_blank';
  ghLink.rel    = 'noopener noreferrer';
  ghLink.innerHTML = `<div class="contact-link__icon">⌥</div>${owner.github.replace('https://', '')}`;

  const leetcodeLink = createElement('a', 'contact-link');
  leetcodeLink.href   = owner.leetcode;
  leetcodeLink.target = '_blank';
  leetcodeLink.rel    = 'noopener noreferrer';
  leetcodeLink.innerHTML = `<div class="contact-link__icon">🏆</div>${owner.leetcode.replace('https://', '')}`;

  const linkedinLink = createElement('a', 'contact-link');
  linkedinLink.href   = owner.linkedin;
  linkedinLink.target = '_blank';
  linkedinLink.rel    = 'noopener noreferrer';
  linkedinLink.innerHTML = `<div class="contact-link__icon">💼</div>${owner.linkedin.replace('https://', '')}`;

  const youtubeLink = createElement('a', 'contact-link');
  youtubeLink.href   = owner.youtube;
  youtubeLink.target = '_blank';
  youtubeLink.rel    = 'noopener noreferrer';
  youtubeLink.innerHTML = `<div class="contact-link__icon">▶</div>${owner.youtube.replace('https://', '')}`;

  const phoneLink = createElement('a', 'contact-link');
  phoneLink.href = `tel:${owner.phone.replace(/[^0-9+]/g, '')}`;
  phoneLink.innerHTML = `<div class="contact-link__icon">📞</div>${owner.phone}`;

  right.appendChild(ghLink);
  right.appendChild(leetcodeLink);
  right.appendChild(linkedinLink);
  right.appendChild(youtubeLink);
  right.appendChild(phoneLink);

  grid.appendChild(left);
  grid.appendChild(right);
  container.appendChild(grid);
  section.appendChild(container);
  return section;
}

/**
 * Render the contact form section.
 * @param {object} owner
 * @returns {HTMLElement}
 */
function buildContactForm(owner) {
  const section = createElement('section', 'section contact-form');
  section.id = 'contact-form';

  const container = createElement('div', 'container');
  container.appendChild(buildSectionHeader('05.', 'Get In Touch'));

  const form = createElement('form', 'contact-form__form');
  form.action = 'https://formspree.io/f/rorikari00x@gmail.com';
  form.method = 'POST';

  // Name input
  const nameGroup = createElement('div', 'contact-form__group');
  const nameLabel = createElement('label', 'contact-form__label', 'Name');
  nameLabel.htmlFor = 'name';
  const nameInput = createElement('input', 'contact-form__input');
  nameInput.type = 'text';
  nameInput.id = 'name';
  nameInput.name = 'name';
  nameInput.placeholder = 'Your name';
  nameInput.required = true;
  nameGroup.appendChild(nameLabel);
  nameGroup.appendChild(nameInput);

  // Email input
  const emailGroup = createElement('div', 'contact-form__group');
  const emailLabel = createElement('label', 'contact-form__label', 'Email');
  emailLabel.htmlFor = 'email';
  const emailInput = createElement('input', 'contact-form__input');
  emailInput.type = 'email';
  emailInput.id = 'email';
  emailInput.name = 'email';
  emailInput.placeholder = 'Your email';
  emailInput.required = true;
  emailGroup.appendChild(emailLabel);
  emailGroup.appendChild(emailInput);

  // Message textarea
  const messageGroup = createElement('div', 'contact-form__group');
  const messageLabel = createElement('label', 'contact-form__label', 'Message');
  messageLabel.htmlFor = 'message';
  const messageTextarea = createElement('textarea', 'contact-form__input contact-form__input--textarea');
  messageTextarea.id = 'message';
  messageTextarea.name = 'message';
  messageTextarea.placeholder = 'Your message';
  messageTextarea.required = true;
  messageGroup.appendChild(messageLabel);
  messageGroup.appendChild(messageTextarea);

  // Submit button
  const submitBtn = createElement('button', 'btn btn--primary', 'Send Message');
  submitBtn.type = 'submit';

  form.appendChild(nameGroup);
  form.appendChild(emailGroup);
  form.appendChild(messageGroup);
  form.appendChild(submitBtn);

  container.appendChild(form);
  section.appendChild(container);
  return section;
}

/**
 * Render the footer.
 * @param {object} owner
 * @returns {HTMLElement}
 */
function buildFooter(owner) {
  const footer = createElement('footer', 'footer');
  const year   = new Date().getFullYear();
  footer.appendChild(
    createElement('p', 'footer__text', `Designed & Built by ${owner.name} — ${year}`)
  );
  return footer;
}