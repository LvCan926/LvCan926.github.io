const body = document.body;
const languageButton = document.querySelector('.language-toggle');
const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.nav-links');
const navAnchors = [...document.querySelectorAll('.nav-links > a')];

const savedLanguage = localStorage.getItem('can-lv-language');
if (savedLanguage === 'zh') {
  body.classList.add('lang-zh');
  document.documentElement.lang = 'zh-CN';
  languageButton.textContent = 'EN';
}

languageButton.addEventListener('click', () => {
  const isChinese = body.classList.toggle('lang-zh');
  document.documentElement.lang = isChinese ? 'zh-CN' : 'en';
  languageButton.textContent = isChinese ? 'EN' : '中';
  localStorage.setItem('can-lv-language', isChinese ? 'zh' : 'en');
});

menuButton.addEventListener('click', () => {
  const isOpen = navigation.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
});

navAnchors.forEach((anchor) => {
  anchor.addEventListener('click', () => {
    navigation.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
  });
});

const sections = [...document.querySelectorAll('main > section[id]')];
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navAnchors.forEach((anchor) => {
        anchor.classList.toggle('active', anchor.getAttribute('href') === `#${entry.target.id}`);
      });
    });
  },
  { rootMargin: '-20% 0px -65% 0px' },
);

sections.forEach((section) => observer.observe(section));
document.querySelector('#year').textContent = new Date().getFullYear();
