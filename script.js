'use strict';

/* PERSONNALISATION — les textes, coordonnées et neuf projets sont réunis ici.
   Les noms et captures proviennent des sites publiés, sans client inventé.
   Pour un lien encore inconnu : url: '' (le lien sera désactivé explicitement).
   Les chemins d’images sont relatifs au fichier index.html. */
const portfolio = {
  name: 'Thibault Sene',
  firstName: 'Thibault.',
  email: 'thibaultsene4@gmail.com',
  instagram: 'https://www.instagram.com/thibaultsene/',
  subject: 'Projet de site web',
  emailBody: 'Bonjour Thibault,\n\nJ’aimerais échanger avec vous au sujet d’un site web.\n\nMon activité :\nMon idée / mes besoins :\nMon calendrier :\n\nÀ bientôt,',
};

const projects = [
  {
    number: '01', title: 'Sève', category: 'Maison de beauté',
    description: 'Une maison de beauté, entre ombre et douceur.',
    image: 'assets/projects/project-01.webp',
    thumbnail: 'assets/projects/project-01-small.webp',
    alt: 'Accueil de Sève : grande typographie ivoire et portrait chaleureux sur fond encre.',
    width: 1440, height: 1000, background: '#e6e9e0', layout: 'wide',
    url: 'https://thiba93.github.io/seve-institut/',
  },
  {
    number: '02', title: 'pigment.', category: 'Création artisanale',
    description: 'Des baskets peintes à la main, une identité sans retenue.',
    image: 'assets/projects/project-02.webp',
    thumbnail: 'assets/projects/project-02-small.webp',
    alt: 'Site pigment. : titre bleu expressif et baskets personnalisées à la peinture bleue.',
    width: 1440, height: 1000, background: '#e4e9f1', layout: 'left',
    url: 'https://thiba93.github.io/Site7-Chaussure/',
  },
  {
    number: '03', title: 'Étienne Morel', category: 'Art & culture',
    description: 'Un atelier de peintre ouvert sur ses œuvres.',
    image: 'assets/projects/project-03.webp',
    thumbnail: 'assets/projects/project-03-small.webp',
    alt: 'Galerie Étienne Morel : peintures de natures mortes et caractères bordeaux sur fond crème.',
    width: 1000, height: 1220, background: '#ede7dc', layout: 'right', portrait: true,
    url: 'https://thiba93.github.io/Site9-Peintre/',
  },
  {
    number: '04', title: 'LAQUE.', category: 'Nail studio',
    description: 'Porcelaine, chrome et caractère pour un studio d’onglerie.',
    image: 'assets/projects/project-04.webp',
    alt: 'LAQUE. : grandes lettres vert pétrole et photographie de manucure sur une sphère chromée.',
    width: 1440, height: 1000, background: '#e9eadf', layout: 'left',
    url: 'https://thiba93.github.io/laque-onglerie-93/',
  },
  {
    number: '05', title: 'Maison Alma', category: 'Soin capillaire',
    description: 'Le soin du cheveu dans un écrin lumineux.',
    image: 'assets/projects/project-05.webp',
    alt: 'Maison Alma : une chevelure longue et lumineuse dans une mise en page épurée.',
    width: 1440, height: 1000, background: '#eee8e3', layout: 'right',
    url: 'https://thiba93.github.io/Site8-Lissage/',
  },
  {
    number: '06', title: 'NAYA', category: 'Studio beauté',
    description: 'Des couleurs chaudes, une beauté qui s’affirme.',
    image: 'assets/projects/project-06.webp',
    alt: 'NAYA : identité aubergine et corail, grand titre et portrait aux tons terracotta.',
    width: 1440, height: 1000, background: '#e6d9d1', layout: 'wide',
    url: 'https://thiba93.github.io/naya-studio-beaute/',
  },
  {
    number: '07', title: 'jolie.', category: 'Beauty bar',
    description: 'L’esprit d’un beauty bar de quartier, simple et vivant.',
    image: 'assets/projects/project-07.webp',
    alt: 'jolie. : site vert et crème avec photographie de manucure et carte des soins.',
    width: 900, height: 1140, background: '#e6e9df', layout: 'left-small', portrait: true,
    url: 'https://thiba93.github.io/jolie-beauty-bar/',
  },
  {
    number: '08', title: 'NUA', category: 'Soin & bien-être',
    description: 'Un univers de soin intime, aux contrastes délicats.',
    image: 'assets/projects/project-08.webp',
    alt: 'NUA : portrait au clair-obscur, lettres ivoire et accents sauge sur fond anthracite.',
    width: 1440, height: 1000, background: '#e5e4e1', layout: 'right-large',
    url: 'https://thiba93.github.io/site3-esthetisme/',
  },
  {
    number: '09', title: 'Opale', category: 'Institut de beauté',
    description: 'Une approche du soin tout en lumière et transparence.',
    image: 'assets/projects/project-09.webp',
    alt: 'Opale : portrait lumineux, typographie fine et détails vert sauge sur un fond blanc.',
    width: 1440, height: 1000, background: '#e7ece8', layout: 'inset',
    url: 'https://thiba93.github.io/opale-institut-beaute/',
  },
];

// Native DOM construction keeps configurable copy as text, never injected HTML.
function element(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}

function externalUrl(value) {
  try {
    const url = new URL(value);
    return url.protocol === 'https:' ? url.href : '';
  } catch {
    return '';
  }
}

function applyIdentity() {
  document.querySelectorAll('[data-signature]').forEach(node => { node.textContent = portfolio.name; });
  document.querySelectorAll('[data-first-name]').forEach(node => { node.textContent = portfolio.firstName; });
  document.querySelectorAll('[data-year]').forEach(node => { node.textContent = new Date().getFullYear(); });
  document.querySelectorAll('[data-count]').forEach(node => { node.textContent = String(projects.length).padStart(2, '0'); });
  document.querySelector('.signature').setAttribute('aria-label', `${portfolio.name}, accueil`);

  const email = portfolio.email.trim();
  const emailIsValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const mailto = `mailto:${encodeURIComponent(email).replace('%40', '@')}?subject=${encodeURIComponent(portfolio.subject)}&body=${encodeURIComponent(portfolio.emailBody)}`;
  document.querySelectorAll('[data-contact], [data-email], [data-email-link]').forEach(link => {
    if (emailIsValid) {
      link.href = mailto;
      if (link.hasAttribute('data-email')) link.textContent = email;
    } else {
      link.removeAttribute('href');
      link.setAttribute('aria-disabled', 'true');
      link.textContent = 'Contact à renseigner';
    }
  });
  const instagram = externalUrl(portfolio.instagram);
  document.querySelectorAll('[data-instagram]').forEach(link => {
    if (instagram) link.href = instagram;
    else link.hidden = true;
  });
}

function fallbackImage(image, title) {
  const showFallback = () => {
    if (!image.isConnected) return;
    const fallback = element('div', 'image-fallback');
    fallback.style.aspectRatio = `${image.width} / ${image.height}`;
    fallback.style.minHeight = '0';
    fallback.setAttribute('role', 'img');
    fallback.setAttribute('aria-label', `${title} — aperçu indisponible`);
    fallback.append(element('strong', '', title), element('span', '', 'Aperçu à venir'));
    image.replaceWith(fallback);
  };
  image.addEventListener('error', showFallback, { once: true });
  if (image.complete && image.naturalWidth === 0) showFallback();
}

function projectElement(project, index) {
  const article = element('article', `project project--${project.layout}${project.portrait ? ' project--portrait' : ''}`);
  article.id = `projet-${project.number}`;
  article.setAttribute('aria-labelledby', `titre-${project.number}`);
  article.style.setProperty('--project-bg', project.background);
  const url = externalUrl(project.url);
  const link = element(url ? 'a' : 'div', `project-link${url ? '' : ' project-unavailable'}`);
  if (url) {
    link.href = url;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.setAttribute('aria-label', `${project.title} — Voir le site (nouvel onglet)`);
  }

  const visual = element('div', 'project-image-wrap');
  const img = element('img', 'project-image');
  img.alt = project.alt;
  img.width = project.width;
  img.height = project.height;
  img.loading = index === 0 ? 'eager' : 'lazy';
  img.decoding = 'async';
  if (index === 0) img.setAttribute('fetchpriority', 'high');
  img.src = project.image;
  visual.append(img);
  if (url) {
    const label = element('span', 'project-preview-label', `Explorer ${project.title}`);
    const arrow = element('span', 'project-open', '↗');
    label.setAttribute('aria-hidden', 'true');
    arrow.setAttribute('aria-hidden', 'true');
    visual.append(label, arrow);
  }

  const caption = element('div', 'project-caption');
  const number = element('span', 'project-number', project.number);
  const copy = element('div', 'project-copy');
  const title = element('h3', 'project-title', project.title);
  title.id = `titre-${project.number}`;
  copy.append(title, element('span', 'project-category', project.category), element('p', 'project-description', project.description));
  const visit = element('span', 'project-visit', url ? 'Voir le site' : 'Lien à venir');
  if (url) {
    const arrow = element('span', '', '↗');
    arrow.setAttribute('aria-hidden', 'true');
    visit.append(arrow);
  }
  caption.append(number, copy, visit);
  link.append(visual, caption);
  article.append(link);
  return { article, img };
}

function positioningElement() {
  const section = element('section', 'positioning');
  section.setAttribute('aria-labelledby', 'positioning-title');
  const label = element('p', 'eyebrow', 'Le fil conducteur');
  const copy = element('div', 'positioning-copy');
  const title = element('h3');
  title.id = 'positioning-title';
  title.append('Chaque site est conçu autour d’un métier, d’une matière et d’une ', element('em', '', 'personnalité.'));
  const tags = element('div', 'positioning-tags');
  ['Direction artistique', 'Design sur mesure', 'Site prêt à publier'].forEach(text => tags.append(element('span', '', text)));
  copy.append(title, tags);
  section.append(label, copy);
  return section;
}

function renderProjects() {
  const grid = document.getElementById('project-grid');
  const fragment = document.createDocumentFragment();
  const images = [];
  projects.forEach((project, index) => {
    const result = projectElement(project, index);
    fragment.append(result.article);
    images.push([result.img, project.title]);
    if (index === 2) fragment.append(positioningElement());
  });
  grid.replaceChildren(fragment);
  images.forEach(([img, title]) => fallbackImage(img, title));

  document.querySelectorAll('[data-hero-image]').forEach(img => {
    const project = projects.find(item => item.number === img.dataset.heroImage);
    if (project) {
      img.src = project.thumbnail || project.image;
      img.addEventListener('error', () => { img.closest('.hero-print').hidden = true; }, { once: true });
    }
  });
}

function setupMenu() {
  const header = document.querySelector('.site-header');
  const button = document.querySelector('.menu-toggle');
  const navigation = document.getElementById('navigation');
  const mobile = window.matchMedia('(max-width: 760px)');
  function closeMenu(returnFocus = false) {
    button.setAttribute('aria-expanded', 'false');
    navigation.classList.remove('is-open');
    if (returnFocus && mobile.matches) button.focus();
  }
  function syncMenu() {
    button.hidden = !mobile.matches;
    header.classList.toggle('js-menu', mobile.matches);
    closeMenu();
  }
  button.addEventListener('click', () => {
    const open = button.getAttribute('aria-expanded') !== 'true';
    button.setAttribute('aria-expanded', String(open));
    navigation.classList.toggle('is-open', open);
  });
  navigation.addEventListener('click', event => {
    const link = event.target.closest('a');
    if (!link) return;
    closeMenu();
    if (mobile.matches && link.hash && link.origin === location.origin && link.pathname === location.pathname) {
      const target = document.getElementById(link.hash.slice(1));
      if (target) {
        target.setAttribute('tabindex', '-1');
        target.focus({ preventScroll: true });
        target.addEventListener('blur', () => target.removeAttribute('tabindex'), { once: true });
      }
    }
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && button.getAttribute('aria-expanded') === 'true') closeMenu(true);
  });
  document.addEventListener('click', event => {
    if (!header.contains(event.target)) closeMenu();
  });
  header.addEventListener('focusout', event => {
    if (event.relatedTarget && !header.contains(event.relatedTarget)) closeMenu();
  });
  if (mobile.addEventListener) mobile.addEventListener('change', syncMenu);
  else mobile.addListener(syncMenu);
  syncMenu();
}

function setupMotion() {
  const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (!('IntersectionObserver' in window) || preference.matches) return;
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.remove('reveal-pending');
        entry.target.classList.add('reveal-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: .05, rootMargin: '0px 0px 25px 0px' });
  document.querySelectorAll('.project').forEach((project, index) => {
    if (index === 0 || project.getBoundingClientRect().top < window.innerHeight) return;
    project.classList.add('reveal-pending');
    observer.observe(project);
  });
  const revealAll = () => {
    if (!preference.matches) return;
    observer.disconnect();
    document.querySelectorAll('.reveal-pending').forEach(node => node.classList.remove('reveal-pending'));
  };
  if (preference.addEventListener) preference.addEventListener('change', revealAll);
  // Tab navigation must reveal an off-screen project immediately.
  document.getElementById('project-grid').addEventListener('focusin', event => {
    const project = event.target.closest('.project');
    if (project) {
      project.classList.remove('reveal-pending');
      observer.unobserve(project);
    }
  });
}

function setupProjectFeedback() {
  const grid = document.getElementById('project-grid');
  grid.addEventListener('click', event => {
    const link = event.target.closest('a.project-link');
    if (!link) return;
    link.classList.add('is-opening');
    document.getElementById('link-status').textContent = `${link.querySelector('.project-title').textContent} : ouverture dans un nouvel onglet.`;
    window.setTimeout(() => link.classList.remove('is-opening'), 900);
    // Keep native target=_blank behavior (keyboard, modifier keys, popup policies).
  });
}

applyIdentity();
renderProjects();
setupMenu();
setupMotion();
setupProjectFeedback();
