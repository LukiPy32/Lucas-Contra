const header = document.querySelector('.site-header');
const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');
const navLinks = [...document.querySelectorAll('.main-nav a[href^="#"]')];
const revealElements = document.querySelectorAll('.reveal');
const countElements = document.querySelectorAll('[data-count]');
const pointerGlow = document.querySelector('.pointer-glow');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const languageButtons = [...document.querySelectorAll('[data-lang]')];
const contactForm = document.querySelector('#contact-form');
const formStatus = document.querySelector('#form-status');

const translations = {
  es: {
    'meta.title': 'Lucas Imanol Contra | Developer',
    'meta.description': 'Portfolio de Lucas Imanol Contra, estudiante de programación y desarrollador en formación.',
    'aria.home': 'Ir al inicio',
    'aria.navigation': 'Navegación principal',
    'aria.language': 'Seleccionar idioma',
    'aria.skip': 'Saltar al contenido',
    'aria.profileVisual': 'Presentación visual de perfil',
    'menu.open': 'Abrir menú',
    'nav.about': 'Sobre mí',
    'nav.skills': 'Tecnologías',
    'nav.portfolio': 'Portfolio',
    'nav.contact': 'Contactame',
    'hero.eyebrow': 'Hola, soy Lucas',
    'hero.title': 'Convierto ideas en <span class="gradient-text">soluciones digitales.</span>',
    'hero.description': 'Estudiante de programación y desarrollador en formación, enfocado en crear experiencias claras, funcionales y construidas con intención.',
    'hero.work': 'Ver mi trabajo',
    'hero.talk': 'Hablemos',
    'hero.availability': 'Disponible para aprender, colaborar y crear',
    'window.status': '● online',
    'window.code': '<span><b class="code-purple">const</b> <b class="code-blue">developer</b> = {</span><span class="indent">nombre: <b class="code-string">"Lucas"</b>,</span><span class="indent">curiosidad: <b class="code-number">100</b>,</span><span class="indent">aprendiendo: [</span><span class="indent-two"><b class="code-string">"Python"</b>, <b class="code-string">"SQL"</b>, <b class="code-string">"Web"</b></span><span class="indent">],</span><span class="indent">objetivo: <b class="code-string">"seguir creciendo"</b></span><span>};</span><span class="code-comment">// construyendo el próximo proyecto_</span>',
    'marquee.web': 'Desarrollo web',
    'marquee.data': 'Bases de datos',
    'marquee.automation': 'Automatización',
    'about.index': '01 / SOBRE MÍ',
    'about.eyebrow': 'Un poco sobre mí',
    'about.title': 'Aprendo creando.<br /><span>Mejoro resolviendo.</span>',
    'about.lead': 'Soy estudiante de programación y disfruto entender cómo funciona cada pieza detrás de una solución, desde la lógica hasta la experiencia final.',
    'about.body1': 'Antes de comenzar la Tecnicatura en Programación, cursé durante un tiempo Ingeniería en Sistemas. Esa experiencia me dio una primera base y me ayudó a confirmar que quería orientar mi formación hacia el desarrollo de software.',
    'about.body2': 'Actualmente tengo conocimientos en tecnologías y lenguajes como HTML, CSS, Python y C#. Con HTML y CSS puedo diseñar y desarrollar landing pages adaptables, claras y funcionales.',
    'about.body3': 'Busco que cada proyecto sea una oportunidad para escribir mejor código, aprender algo nuevo y construir soluciones simples para problemas reales.',
    'about.stat1': '% curiosidad',
    'about.stat2': 'áreas en crecimiento',
    'about.stat3': 'ganas de aprender',
    'skills.index': '02 / TECNOLOGÍAS',
    'skills.eyebrow': 'Mi caja de herramientas',
    'skills.title': 'Tecnologías con las que estoy creciendo.',
    'skills.intro': 'Una base en constante evolución para transformar lógica, datos e interfaces en proyectos funcionales.',
    'skills.python': 'Lógica, resolución de problemas y automatización.',
    'skills.pythonStatus': 'EN APRENDIZAJE ACTIVO',
    'skills.databases': 'Bases de datos',
    'skills.databaseText': 'Modelado relacional, consultas y organización de información.',
    'skills.databaseStatus': 'CONSTRUYENDO BASES',
    'skills.web': 'Desarrollo web',
    'skills.webText': 'HTML, CSS y JavaScript para experiencias adaptables.',
    'skills.webStatus': 'CREANDO INTERFACES',
    'skills.gitText': 'Control de versiones y flujo de trabajo entre proyectos.',
    'skills.gitStatus': 'VERSIONANDO IDEAS',
    'portfolio.index': '03 / PORTFOLIO',
    'portfolio.eyebrow': 'Trabajo seleccionado',
    'portfolio.title': 'Proyectos que muestran mi evolución.',
    'portfolio.intro': 'Esta sección crecerá conmigo. Cada nuevo proyecto reemplazará una de estas ideas en desarrollo.',
    'portfolio.soon': 'PRÓXIMAMENTE',
    'portfolio.progress': 'EN DESARROLLO',
    'portfolio.idea': 'NUEVA IDEA',
    'portfolio.pythonLabel': 'PYTHON / AUTOMATIZACIÓN',
    'portfolio.dataLabel': 'DATOS / SQL',
    'portfolio.webLabel': 'WEB / EXPERIENCIA',
    'portfolio.project1': 'Proyecto de automatización',
    'portfolio.project1Meta': 'Python · Lógica · Procesos',
    'portfolio.project2': 'Sistema con base de datos',
    'portfolio.project2Meta': 'SQL · Modelado relacional',
    'portfolio.project3': 'Aplicación web interactiva',
    'contact.index': '04 / CONTACTO',
    'contact.eyebrow': 'Hagamos algo juntos',
    'contact.title': '¿Tenés una idea?<br /><span>Quiero conocerla.</span>',
    'contact.intro': 'Si querés conversar sobre un proyecto, una colaboración o una oportunidad para seguir aprendiendo, dejame tu mensaje.',
    'contact.note': 'Respondo apenas puedo',
    'form.name': 'Nombre',
    'form.namePlaceholder': 'Tu nombre',
    'form.email': 'Email',
    'form.emailPlaceholder': 'tu@email.com',
    'form.subject': 'Asunto',
    'form.subjectPlaceholder': '¿Sobre qué querés hablar?',
    'form.message': 'Mensaje',
    'form.messagePlaceholder': 'Contame un poco sobre tu idea...',
    'form.submit': 'Enviar mensaje',
    'form.privacy': 'Al enviar, FormSubmit procesa tus datos para entregarme el mensaje por email. Continuarás a su verificación y confirmación.',
    'form.sending': 'Continuando a la verificación de FormSubmit…',
    'form.local': 'Probá el envío desde la web publicada, no desde un archivo local.',
    'form.invalid': 'Revisá los campos marcados antes de continuar.',
    'form.copied': 'Mensaje preparado y copiado. Elegí el canal de contacto de Lucas para enviarlo.',
    'form.prepared': 'Mensaje preparado. Copialo y envialo por el canal de contacto que prefieras.',
    'footer.copy': 'Diseñado y desarrollado con curiosidad <span aria-hidden="true">✦</span> <span id="current-year"></span>',
    'footer.top': 'Volver arriba ↑',
  },
  en: {
    'meta.title': 'Lucas Imanol Contra | Developer',
    'meta.description': 'Portfolio of Lucas Imanol Contra, programming student and aspiring developer.',
    'aria.home': 'Go to the top',
    'aria.navigation': 'Main navigation',
    'aria.language': 'Select language',
    'aria.skip': 'Skip to content',
    'aria.profileVisual': 'Visual profile presentation',
    'menu.open': 'Open menu',
    'nav.about': 'About me',
    'nav.skills': 'Technologies',
    'nav.portfolio': 'Portfolio',
    'nav.contact': 'Contact me',
    'hero.eyebrow': "Hi, I'm Lucas",
    'hero.title': 'I turn ideas into <span class="gradient-text">digital solutions.</span>',
    'hero.description': 'Programming student and aspiring developer focused on creating clear, functional experiences built with purpose.',
    'hero.work': 'See my work',
    'hero.talk': "Let's talk",
    'hero.availability': 'Available to learn, collaborate and build',
    'window.status': '● online',
    'window.code': '<span><b class="code-purple">const</b> <b class="code-blue">developer</b> = {</span><span class="indent">name: <b class="code-string">"Lucas"</b>,</span><span class="indent">curiosity: <b class="code-number">100</b>,</span><span class="indent">learning: [</span><span class="indent-two"><b class="code-string">"Python"</b>, <b class="code-string">"SQL"</b>, <b class="code-string">"Web"</b></span><span class="indent">],</span><span class="indent">goal: <b class="code-string">"keep growing"</b></span><span>};</span><span class="code-comment">// building the next project_</span>',
    'marquee.web': 'Web development',
    'marquee.data': 'Databases',
    'marquee.automation': 'Automation',
    'about.index': '01 / ABOUT ME',
    'about.eyebrow': 'A little about me',
    'about.title': 'I learn by building.<br /><span>I improve by solving.</span>',
    'about.lead': 'I am a programming student who enjoys understanding how every piece behind a solution works, from its logic to the final experience.',
    'about.body1': 'Before starting my Programming Technician degree, I studied Systems Engineering for a time. That experience gave me an initial foundation and helped me confirm that I wanted to focus my education on software development.',
    'about.body2': 'I currently have knowledge of technologies and languages such as HTML, CSS, Python and C#. With HTML and CSS, I can design and develop clear, responsive and functional landing pages.',
    'about.body3': 'I want every project to be an opportunity to write better code, learn something new and build simple solutions to real problems.',
    'about.stat1': '% curiosity',
    'about.stat2': 'areas of growth',
    'about.stat3': 'desire to learn',
    'skills.index': '02 / TECHNOLOGIES',
    'skills.eyebrow': 'My toolkit',
    'skills.title': "Technologies I'm growing with.",
    'skills.intro': 'An ever-evolving foundation for turning logic, data and interfaces into functional projects.',
    'skills.python': 'Logic, problem-solving and automation.',
    'skills.pythonStatus': 'ACTIVE LEARNING',
    'skills.databases': 'Databases',
    'skills.databaseText': 'Relational modeling, queries and information organization.',
    'skills.databaseStatus': 'BUILDING FOUNDATIONS',
    'skills.web': 'Web development',
    'skills.webText': 'HTML, CSS and JavaScript for responsive experiences.',
    'skills.webStatus': 'BUILDING INTERFACES',
    'skills.gitText': 'Version control and project workflows.',
    'skills.gitStatus': 'VERSIONING IDEAS',
    'portfolio.index': '03 / PORTFOLIO',
    'portfolio.eyebrow': 'Selected work',
    'portfolio.title': 'Projects that show my progress.',
    'portfolio.intro': 'This section will grow with me. Each new project will replace one of these ideas in progress.',
    'portfolio.soon': 'COMING SOON',
    'portfolio.progress': 'IN PROGRESS',
    'portfolio.idea': 'NEW IDEA',
    'portfolio.pythonLabel': 'PYTHON / AUTOMATION',
    'portfolio.dataLabel': 'DATA / SQL',
    'portfolio.webLabel': 'WEB / EXPERIENCE',
    'portfolio.project1': 'Automation project',
    'portfolio.project1Meta': 'Python · Logic · Processes',
    'portfolio.project2': 'Database system',
    'portfolio.project2Meta': 'SQL · Relational modeling',
    'portfolio.project3': 'Interactive web application',
    'contact.index': '04 / CONTACT',
    'contact.eyebrow': "Let's build something together",
    'contact.title': 'Have an idea?<br /><span>I want to hear it.</span>',
    'contact.intro': 'If you would like to discuss a project, a collaboration or an opportunity to keep learning, leave me a message.',
    'contact.note': 'I reply as soon as I can',
    'form.name': 'Name',
    'form.namePlaceholder': 'Your name',
    'form.email': 'Email',
    'form.emailPlaceholder': 'you@email.com',
    'form.subject': 'Subject',
    'form.subjectPlaceholder': 'What would you like to discuss?',
    'form.message': 'Message',
    'form.messagePlaceholder': 'Tell me a little about your idea...',
    'form.submit': 'Send message',
    'form.privacy': 'When you submit, FormSubmit processes your details to email me your message. You will continue to its verification and confirmation page.',
    'form.sending': 'Continuing to FormSubmit verification…',
    'form.local': 'Please submit from the published website, not from a local file.',
    'form.invalid': 'Please review the highlighted fields before continuing.',
    'form.copied': "Your message is ready and copied. Choose one of Lucas's contact channels to send it.",
    'form.prepared': 'Your message is ready. Copy it and send it through your preferred contact channel.',
    'footer.copy': 'Designed and developed with curiosity <span aria-hidden="true">✦</span> <span id="current-year"></span>',
    'footer.top': 'Back to top ↑',
  },
};

let currentLanguage = 'es';

try {
  const savedLanguage = localStorage.getItem('lucas-portfolio-language');
  if (savedLanguage === 'es' || savedLanguage === 'en') currentLanguage = savedLanguage;
} catch {
  currentLanguage = 'es';
}

function translate(key) {
  return translations[currentLanguage][key] || translations.es[key] || key;
}

function updateYear() {
  const year = document.querySelector('#current-year');
  if (year) year.textContent = new Date().getFullYear();
}

function applyLanguage(language) {
  currentLanguage = language;
  document.documentElement.lang = language;
  document.title = translations[language]['meta.title'];
  document.querySelector('meta[name="description"]').content = translations[language]['meta.description'];

  document.querySelectorAll('[data-i18n]').forEach((element) => {
    element.textContent = translate(element.dataset.i18n);
  });

  document.querySelectorAll('[data-i18n-html]').forEach((element) => {
    element.innerHTML = translate(element.dataset.i18nHtml);
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach((element) => {
    element.placeholder = translate(element.dataset.i18nPlaceholder);
  });

  document.querySelectorAll('[data-i18n-aria-label]').forEach((element) => {
    element.setAttribute('aria-label', translate(element.dataset.i18nAriaLabel));
  });

  languageButtons.forEach((button) => {
    const selected = button.dataset.lang === language;
    button.classList.toggle('active', selected);
    button.setAttribute('aria-pressed', String(selected));
  });

  if (formStatus.dataset.statusKey) {
    formStatus.textContent = translate(formStatus.dataset.statusKey);
  }

  updateYear();
  try {
    localStorage.setItem('lucas-portfolio-language', language);
  } catch {
    // The translation still works when browser storage is unavailable.
  }
}

languageButtons.forEach((button) => {
  button.addEventListener('click', () => applyLanguage(button.dataset.lang));
});

applyLanguage(currentLanguage);

function closeMenu() {
  menuButton.setAttribute('aria-expanded', 'false');
  nav.classList.remove('open');
}

menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!open));
  nav.classList.toggle('open', !open);
});

navLinks.forEach((link) => link.addEventListener('click', closeMenu));
document.querySelectorAll('a[href="#inicio"]').forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: reducedMotion ? 'auto' : 'smooth',
    });
  });
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeMenu();
});

window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 24);
}, { passive: true });

const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('visible');
    observer.unobserve(entry.target);
  });
}, { threshold: 0.14 });

revealElements.forEach((element, index) => {
  element.style.transitionDelay = `${Math.min(index % 4, 3) * 70}ms`;
  revealObserver.observe(element);
});

const countObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    const element = entry.target;
    const target = Number(element.dataset.count);
    const startedAt = performance.now();
    const duration = 1000;

    function tick(now) {
      const progress = Math.min((now - startedAt) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      element.textContent = Math.round(target * eased);
      if (progress < 1) requestAnimationFrame(tick);
    }

    requestAnimationFrame(tick);
    observer.unobserve(element);
  });
}, { threshold: 0.6 });

countElements.forEach((element) => countObserver.observe(element));

const sections = [...document.querySelectorAll('main section[id]')];
const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    navLinks.forEach((link) => {
      link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`);
    });
  });
}, { rootMargin: '-35% 0px -55% 0px' });

sections.forEach((section) => sectionObserver.observe(section));

if (!reducedMotion && window.matchMedia('(pointer: fine)').matches) {
  window.addEventListener('pointermove', (event) => {
    pointerGlow.animate(
      { transform: `translate(${event.clientX - 210}px, ${event.clientY - 210}px)` },
      { duration: 850, fill: 'forwards' }
    );
  });

  document.querySelectorAll('.project-card').forEach((card) => {
    card.addEventListener('pointermove', (event) => {
      const bounds = card.getBoundingClientRect();
      const rotateX = ((event.clientY - bounds.top) / bounds.height - 0.5) * -3;
      const rotateY = ((event.clientX - bounds.left) / bounds.width - 0.5) * 3;
      card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-3px)`;
    });
    card.addEventListener('pointerleave', () => {
      card.style.transform = '';
    });
  });
}

const canvas = document.querySelector('.network-canvas');
const context = canvas.getContext('2d');
let particles = [];
let animationFrame;

function resizeCanvas() {
  const ratio = Math.min(window.devicePixelRatio || 1, 2);
  canvas.width = window.innerWidth * ratio;
  canvas.height = window.innerHeight * ratio;
  canvas.style.width = `${window.innerWidth}px`;
  canvas.style.height = `${window.innerHeight}px`;
  context.setTransform(ratio, 0, 0, ratio, 0, 0);

  const particleCount = Math.min(48, Math.floor(window.innerWidth / 28));
  particles = Array.from({ length: particleCount }, () => ({
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    vx: (Math.random() - 0.5) * 0.18,
    vy: (Math.random() - 0.5) * 0.18,
    size: Math.random() * 1.3 + 0.4,
  }));
}

function drawNetwork() {
  context.clearRect(0, 0, window.innerWidth, window.innerHeight);
  particles.forEach((particle, index) => {
    particle.x += particle.vx;
    particle.y += particle.vy;
    if (particle.x < 0 || particle.x > window.innerWidth) particle.vx *= -1;
    if (particle.y < 0 || particle.y > window.innerHeight) particle.vy *= -1;

    context.beginPath();
    context.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
    context.fillStyle = 'rgba(0, 229, 255, .5)';
    context.fill();

    particles.slice(index + 1).forEach((other) => {
      const dx = particle.x - other.x;
      const dy = particle.y - other.y;
      const distance = Math.hypot(dx, dy);
      if (distance > 115) return;
      context.beginPath();
      context.moveTo(particle.x, particle.y);
      context.lineTo(other.x, other.y);
      context.strokeStyle = `rgba(0, 229, 255, ${(1 - distance / 115) * 0.13})`;
      context.stroke();
    });
  });
  animationFrame = requestAnimationFrame(drawNetwork);
}

resizeCanvas();
if (!reducedMotion) drawNetwork();
window.addEventListener('resize', () => {
  cancelAnimationFrame(animationFrame);
  resizeCanvas();
  if (!reducedMotion) drawNetwork();
});

function setFormStatus(key) {
  formStatus.dataset.statusKey = key;
  formStatus.textContent = translate(key);
}

contactForm.addEventListener('submit', (event) => {
  const fields = [...contactForm.querySelectorAll('input, textarea')];
  fields.forEach((field) => field.classList.toggle('invalid', !field.checkValidity()));

  const firstInvalid = fields.find((field) => !field.checkValidity());
  if (firstInvalid) {
    event.preventDefault();
    setFormStatus('form.invalid');
    firstInvalid.focus();
    return;
  }

  if (window.location.protocol === 'file:') {
    event.preventDefault();
    setFormStatus('form.local');
    return;
  }
  // Native POST goes to the service; delivery is not confirmed on this page.
  setFormStatus('form.sending');
});
